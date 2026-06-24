import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, Code2, HelpCircle } from 'lucide-react';

export default async function LessonViewPage({ params }: { params: Promise<{ slug: string, lessonId: string }> }) {
  const p = await params;
  const courseName = p.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '1.5rem', height: 'calc(100vh - 140px)' }}>
      {/* Left Panel: Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Link href={`/courses/${p.slug}`}>
            <Button variant="secondary" style={{ padding: '0.5rem' }}><ArrowLeft size={20} /></Button>
          </Link>
          <span style={{ color: 'var(--text-secondary)' }}>{courseName} / Lesson 1</span>
        </div>

        <Card style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2rem' }}>Hello World in Python</h1>
            <Badge variant="success">+50 XP</Badge>
          </div>
          
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.125rem' }}>
            <p style={{ marginBottom: '1rem' }}>Welcome to your first Python lesson! The tradition of programming dictates that your first program should print "Hello, World!" to the screen.</p>
            <p style={{ marginBottom: '1rem' }}>In Python, we use the <code>print()</code> function to output text. Text in Python is called a "string" and is enclosed in quotation marks.</p>
            <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '1rem' }}>
              <code>print("Hello, World!")</code>
            </pre>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="secondary" disabled>Previous Lesson</Button>
            <Button>Next Lesson</Button>
          </div>
        </Card>
      </div>

      {/* Right Panel: Interactive (Editor / AI) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
            <button style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: 'bold' }}>
              <Code2 size={18} /> Editor
            </button>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <PlayCircle size={18} /> Quiz
            </button>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <HelpCircle size={18} /> AI Tutor
            </button>
          </div>
          
          <div style={{ flex: 1, background: 'rgba(0,0,0,0.5)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            [Monaco Editor Placeholder]
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="primary">Run Code</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
