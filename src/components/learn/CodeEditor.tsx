'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import Button from '@/components/ui/Button';

import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/lib/translations';

interface CodeEditorProps {
  initialCode: string;
  language: string;
}

interface SyntaxIssue {
  type: 'error' | 'warning';
  message: string;
  line?: number;
  suggestion?: string;
}

export default function CodeEditor({ initialCode, language }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const appLang = useLanguageStore((state) => state.language);
  const t = useTranslation(appLang);

  // Real-time Syntax Inspector
  const analyzeSyntax = (codeText: string, lang: string): SyntaxIssue[] => {
    const issues: SyntaxIssue[] = [];
    const lines = codeText.split('\n');

    // 1. Check Unmatched Brackets & Parentheses
    let parenCount = 0, braceCount = 0, bracketCount = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      for (const char of line) {
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        if (char === '[') bracketCount++;
        if (char === ']') bracketCount--;
      }

      // Check Keyword & Function Typos
      const lineLower = line.toLowerCase();
      if (lineLower.includes('functon') || lineLower.includes('funciton')) {
        issues.push({ type: 'error', message: 'Syntax keyword typo detected: "functon"', line: i + 1, suggestion: 'Did you mean "function" or "def"?' });
      }
      if (lineLower.includes('prnt(') || lineLower.includes('pritn(')) {
        issues.push({ type: 'error', message: 'Function name typo detected: "prnt"', line: i + 1, suggestion: 'Did you mean "print(...)"?' });
      }
      if (lineLower.includes('sys.out.') || lineLower.includes('system.out.prnt')) {
        issues.push({ type: 'error', message: 'Java print method syntax typo', line: i + 1, suggestion: 'Use "System.out.println(...)" with capital System.' });
      }
      if (lineLower.includes('cnst ') || lineLower.includes('lett ')) {
        issues.push({ type: 'error', message: 'Variable declaration keyword typo', line: i + 1, suggestion: 'Did you mean "const" or "let"?' });
      }
      if (lineLower.includes('incldue') || lineLower.includes('inclue')) {
        issues.push({ type: 'error', message: 'C/C++ preprocessor directive typo', line: i + 1, suggestion: 'Did you mean "#include <...>"?' });
      }
    }

    if (parenCount !== 0) {
      issues.push({ type: 'error', message: `Unmatched parentheses '(' or ')' (${Math.abs(parenCount)} unclosed)`, suggestion: 'Ensure every open ( has a corresponding closing ).' });
    }
    if (braceCount !== 0) {
      issues.push({ type: 'error', message: `Unmatched curly braces '{' or '}' (${Math.abs(braceCount)} unclosed)`, suggestion: 'Check your code block scope pairs { }.' });
    }
    if (bracketCount !== 0) {
      issues.push({ type: 'error', message: `Unmatched square brackets '[' or ']' (${Math.abs(bracketCount)} unclosed)`, suggestion: 'Check array index bracket pairs [ ].' });
    }

    return issues;
  };

  const syntaxIssues = analyzeSyntax(code, language);

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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '0.75rem' }}>
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

      {/* Real-time Syntax Notification Badges */}
      {syntaxIssues.length > 0 ? (
        <div style={{
          background: 'rgba(239, 68, 68, 0.12)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          padding: '0.75rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
        }}>
          {syntaxIssues.map((issue, idx) => (
            <div key={idx} style={{ fontSize: '0.85rem', color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 700 }}>⚠️ Syntax Notification {issue.line ? `(Line ${issue.line})` : ''}:</span>
              <span>{issue.message}</span>
              {issue.suggestion && (
                <span style={{ color: '#93c5fd', fontStyle: 'italic', marginLeft: 'auto' }}>👉 {issue.suggestion}</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div style={{
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.25)',
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          fontSize: '0.85rem',
          color: '#86efac',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span>✅ Real-Time Syntax Validation: No typos or unmatched brackets detected.</span>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleRunCode} disabled={isRunning} variant="primary">
          {isRunning ? t('running') : t('runCode')}
        </Button>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '8px', border: '1px solid var(--glass-border)', padding: '1rem', height: '140px', overflowY: 'auto' }}>
        <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('outputTerminal')}</h4>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'var(--text-primary)' }}>
          {output}
        </pre>
      </div>
    </div>
  );
}
