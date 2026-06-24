from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import Optional, List
import anthropic
import os
import httpx
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="CODE MENTOR AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:8081")],
    allow_methods=["POST"],
    allow_headers=["*"],
)

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
BACKEND_URL = os.getenv("BACKEND_URL", "http://localhost:3001")

class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str

class AskRequest(BaseModel):
    messages: List[ChatMessage]
    language: Optional[str] = None  # e.g. "Python", "JavaScript"
    lesson_context: Optional[str] = None

async def verify_token(authorization: str = Header(...)):
    """Verify JWT with main backend"""
    try:
        async with httpx.AsyncClient() as c:
            r = await c.get(f"{BACKEND_URL}/api/users/me", headers={"Authorization": authorization})
            if r.status_code != 200:
                raise HTTPException(status_code=401, detail="Unauthorized")
            return r.json()
    except httpx.RequestError:
        raise HTTPException(status_code=503, detail="Auth service unavailable")

@app.post("/ai/ask")
async def ask_ai(req: AskRequest, user=Depends(verify_token)):
    """Stream AI response to user question"""
    
    system = f"""You are CODE MENTOR's AI tutor — a friendly, encouraging programming teacher.
You help learners understand programming concepts in a clear, engaging way.
Use analogies, examples, and emojis to make learning fun! 🚀

Current context:
- Student: {user.get('username', 'learner')} (Level {user.get('level', 1)}, {user.get('xp', 0)} XP)
- Learning: {req.language or 'programming'}
{f'- Current lesson: {req.lesson_context}' if req.lesson_context else ''}

Rules:
1. Always encourage the student
2. Provide short, working code examples
3. Explain WHY, not just WHAT
4. If they're stuck, give hints before full solutions
5. Keep responses concise but complete"""

    messages = [{"role": m.role, "content": m.content} for m in req.messages]

    def generate():
        with client.messages.stream(
            model="claude-haiku-4-5-20251001",
            max_tokens=1024,
            system=system,
            messages=messages
        ) as stream:
            for text in stream.text_stream:
                yield f"data: {text}\n\n"
        yield "data: [DONE]\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")

@app.get("/health")
def health():
    return {"status": "ok", "service": "CODE MENTOR AI"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
