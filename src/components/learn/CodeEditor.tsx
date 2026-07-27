'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import Button from '@/components/ui/Button';

interface CodeEditorProps {
  initialCode: string;
  language: string;
}

export default function CodeEditor({ initialCode, language }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('Running...');

    try {
      const res = await fetch('/api/run-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language }),
      });

      const data = await res.json();
      if (res.ok) {
        setOutput(data.output || 'No output');
      } else {
        setOutput(`Error: ${data.error}`);
      }
    } catch (err) {
      setOutput('Failed to execute code.');
    } finally {
      setIsRunning(false);
    }
  };

  const getMonacoLanguage = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'python': return 'python';
      case 'javascript': return 'javascript';
      case 'typescript': return 'typescript';
      case 'java': return 'java';
      case 'cpp': case 'c++': return 'cpp';
      case 'c': return 'c';
      case 'php': return 'php';
      case 'kotlin': return 'kotlin';
      case 'go': case 'golang': return 'go';
      case 'ruby': return 'ruby';
      case 'rust': return 'rust';
      case 'sql': return 'sql';
      case 'swift': return 'swift';
      case 'elixir': return 'elixir';
      case 'bash': case 'shell': case 'sh': return 'shell';
      default: return 'javascript';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
      <div style={{ flex: 1, border: '1px solid var(--glass-border)', borderRadius: '8px', overflow: 'hidden' }}>
        <Editor
          height="100%"
          language={getMonacoLanguage(language)}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            padding: { top: 16 },
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleRunCode} disabled={isRunning} variant="primary">
          {isRunning ? 'Running...' : 'Run Code'}
        </Button>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '8px', border: '1px solid var(--glass-border)', padding: '1rem', height: '150px', overflowY: 'auto' }}>
        <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Output</h4>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'var(--text-primary)' }}>
          {output}
        </pre>
      </div>
    </div>
  );
}
