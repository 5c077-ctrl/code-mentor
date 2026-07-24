'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Copy, Download, Check, BookOpen, Sparkles, Code } from 'lucide-react';

interface CourseNotesPanelProps {
  courseTitle: string;
  lessonTitle: string;
  contentMarkdown: string;
  xpReward: number;
}

export default function CourseNotesPanel({
  courseTitle,
  lessonTitle,
  contentMarkdown,
  xpReward,
}: CourseNotesPanelProps) {
  const [copied, setCopied] = useState(false);

  // Extract code snippets from markdown for quick reference
  const codeBlocks: string[] = [];
  const codeRegex = /```[\s\S]*?```/g;
  let match;
  while ((match = codeRegex.exec(contentMarkdown)) !== null) {
    codeBlocks.push(match[0].replace(/```[a-z]*/g, '').trim());
  }

  const handleCopy = () => {
    const formatted = `# ${courseTitle} — ${lessonTitle}\n\n${contentMarkdown}`;
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const formatted = `# ${courseTitle} — ${lessonTitle}\n\n${contentMarkdown}`;
    const blob = new Blob([formatted], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lessonTitle.toLowerCase().replace(/[^a-z0-9]/g, '-')}-notes.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem', padding: '1rem', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {courseTitle} Reference Notes
          </span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
            {lessonTitle}
          </h3>
        </div>
        <Badge variant="success">+{xpReward} XP</Badge>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button
          variant="secondary"
          style={{ flex: 1, padding: '0.45rem', fontSize: '0.85rem', gap: '0.35rem', justifyContent: 'center' }}
          onClick={handleCopy}
        >
          {copied ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
          {copied ? 'Copied!' : 'Copy Notes'}
        </Button>
        <Button
          variant="secondary"
          style={{ flex: 1, padding: '0.45rem', fontSize: '0.85rem', gap: '0.35rem', justifyContent: 'center' }}
          onClick={handleDownload}
        >
          <Download size={15} /> Download .md
        </Button>
      </div>

      {/* Quick Code Snippets Section (if code exists) */}
      {codeBlocks.length > 0 && (
        <div style={{ background: 'rgba(30, 41, 59, 0.5)', borderRadius: '10px', padding: '0.85rem', border: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.85rem' }}>
            <Code size={16} /> Quick Code Cheatsheet ({codeBlocks.length} snippet{codeBlocks.length > 1 ? 's' : ''})
          </div>
          {codeBlocks.slice(0, 3).map((snippet, idx) => (
            <pre
              key={idx}
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                padding: '0.6rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                color: '#e2e8f0',
                overflowX: 'auto',
                marginBottom: idx < codeBlocks.length - 1 ? '0.5rem' : '0',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <code>{snippet}</code>
            </pre>
          ))}
        </div>
      )}

      {/* Full Lesson Notes Markdown */}
      <div style={{ flex: 1, color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.925rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 600 }}>
          <Sparkles size={16} color="#f59e0b" /> Course Material & Explanations
        </div>
        <ReactMarkdown>{contentMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
}
