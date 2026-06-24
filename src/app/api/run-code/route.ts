import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

export async function POST(req: Request) {
  try {
    const { code, language } = await req.json();

    if (!code || !language) {
      return NextResponse.json({ error: 'Code and language are required' }, { status: 400 });
    }

    const tempDir = path.join(process.cwd(), 'temp');
    await fs.mkdir(tempDir, { recursive: true });

    const filename = `code_${Date.now()}.${language === 'python' ? 'py' : 'js'}`;
    const filepath = path.join(tempDir, filename);

    await fs.writeFile(filepath, code);

    let command = '';
    if (language === 'python') {
      command = `python "${filepath}"`;
    } else if (language === 'javascript') {
      command = `node "${filepath}"`;
    } else {
      return NextResponse.json({ error: 'Unsupported language' }, { status: 400 });
    }

    try {
      const { stdout, stderr } = await execAsync(command, { timeout: 5000 });
      await fs.unlink(filepath).catch(() => {}); // Cleanup
      return NextResponse.json({ output: stdout || stderr });
    } catch (err: any) {
      await fs.unlink(filepath).catch(() => {}); // Cleanup
      return NextResponse.json({ error: err.stderr || err.message }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
