import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { messages, codeContext, lessonContext } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY.includes('mock-key')) {
      // Mock streaming for development without a real key
      const encoder = new TextEncoder();
      const customReadable = new ReadableStream({
        async start(controller) {
          const text = "I am a mock AI Tutor since you haven't provided a valid Anthropic API key yet. How can I help you with your code?";
          const words = text.split(' ');
          for (const word of words) {
            controller.enqueue(encoder.encode(word + ' '));
            await new Promise((r) => setTimeout(r, 50));
          }
          controller.close();
        },
      });
      return new Response(customReadable, {
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    const systemPrompt = `You are an expert AI programming tutor. The user is currently taking the lesson: "${lessonContext}".
    Here is their current code:
    \`\`\`
    ${codeContext}
    \`\`\`
    Provide helpful, concise, and encouraging answers to their questions. Do not give them the final code immediately; instead, guide them to the solution.`;

    const stream = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages,
      stream: true,
    });

    const encoder = new TextEncoder();
    const customReadable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (chunk.type === 'content_block_delta' && 'text' in chunk.delta) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
        controller.close();
      },
    });

    return new Response(customReadable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
