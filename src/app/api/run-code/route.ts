import { NextResponse } from 'next/server';

const JUDGE0_LANGUAGE_IDS: Record<string, number> = {
  python: 71,
  javascript: 63,
  typescript: 74,
  java: 62,
  cpp: 54,
  c: 50,
  php: 68,
  kotlin: 78,
  go: 60,
  golang: 60,
  ruby: 72,
  rust: 73,
  sql: 82,
  swift: 83,
  elixir: 57,
  bash: 46,
  shell: 46,
};

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { code, language } = body;

    if (!code || !language) {
      return NextResponse.json({ error: 'Code and language are required' }, { status: 400 });
    }

    const normalizedLang = String(language).toLowerCase().trim();
    const langId = JUDGE0_LANGUAGE_IDS[normalizedLang];

    if (!langId) {
      return NextResponse.json({ error: `Unsupported language: ${normalizedLang}` }, { status: 400 });
    }

    // Execute via Judge0 API
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch('https://ce.judge0.com/submissions?wait=true', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source_code: code,
          language_id: langId,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const output = data.stdout || data.stderr || data.compile_output || data.status?.description || 'Code executed successfully with no output.';
        return NextResponse.json({ output });
      } else {
        const errText = await res.text();
        console.error('Judge0 API error:', errText);
        return NextResponse.json({ error: `Execution failed with status ${res.status}` }, { status: 500 });
      }
    } catch (judgeErr: any) {
      clearTimeout(timeoutId);
      console.error('Judge0 fetch error:', judgeErr);
      return NextResponse.json({ error: 'Code execution service is currently unavailable.' }, { status: 500 });
    }
  } catch (error: any) {
    console.error('Run code route error:', error);
    return NextResponse.json({ error: error?.message || 'Failed to execute code' }, { status: 500 });
  }
}

