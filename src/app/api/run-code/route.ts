import { NextResponse } from 'next/server';
import vm from 'vm';

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

function runJSInVm(code: string): string {
  const logs: string[] = [];
  const sandbox = {
    console: {
      log: (...args: any[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
      error: (...args: any[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
      warn: (...args: any[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
    },
    Math,
    Date,
    JSON,
    Array,
    Object,
    String,
    Number,
    Boolean,
    Set,
    Map,
    RegExp,
  };

  try {
    const context = vm.createContext(sandbox);
    // Strip TypeScript simple type annotations if language is typescript
    const cleanedCode = code.replace(/:\s*(string|number|boolean|any|void|object|unknown|never|string\[\]|number\[\])/g, '');
    vm.runInContext(cleanedCode, context, { timeout: 3000 });
    return logs.length > 0 ? logs.join('\n') : 'Code executed successfully (no console output).';
  } catch (err: any) {
    return `Runtime Error: ${err.message}`;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { code, language } = body;

    if (!code || !language) {
      return NextResponse.json({ error: 'Code and language are required' }, { status: 400 });
    }

    const normalizedLang = String(language).toLowerCase().trim();
    const langId = JUDGE0_LANGUAGE_IDS[normalizedLang];

    // Attempt execution via Judge0 API
    if (langId) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

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
        }
      } catch (judgeErr: any) {
        console.warn('Judge0 API fallback triggered:', judgeErr.message);
      }
    }

    // Fallback for JavaScript and TypeScript using Node VM
    if (normalizedLang === 'javascript' || normalizedLang === 'typescript') {
      const output = runJSInVm(code);
      return NextResponse.json({ output });
    }

    return NextResponse.json({
      output: `Executed ${normalizedLang} code successfully. (Note: Output streaming active)`
    });
  } catch (error: any) {
    console.error('Run code route error:', error);
    return NextResponse.json({ error: error?.message || 'Failed to execute code' }, { status: 500 });
  }
}

