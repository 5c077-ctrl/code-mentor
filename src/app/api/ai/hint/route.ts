import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { code, error } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY.includes('mock-key')) {
      return NextResponse.json({ hint: "Mock hint: Check your syntax on line 1." });
    }

    const prompt = `Review the following code and error (if any). Provide a short, 1-2 sentence hint to guide the user towards the solution without giving them the exact answer.
    
    Code:
    ${code}
    
    Error:
    ${error || 'None'}`;

    const message = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 250,
      messages: [{ role: 'user', content: prompt }]
    });

    return NextResponse.json({ hint: message.content[0].type === 'text' ? message.content[0].text : 'No hint generated.' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
