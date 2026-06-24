'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, Code2, HelpCircle } from 'lucide-react';
import CodeEditor from '@/components/learn/CodeEditor';
import AiChatPanel from '@/components/learn/AiChatPanel';
import QuizEngine from '@/components/learn/QuizEngine';

export default function LessonViewPage({ params }: { params: Promise<{ slug: string, lessonId: string }> }) {
  const [activeTab, setActiveTab] = useState<'editor' | 'quiz' | 'ai'>('editor');
  const [code, setCode] = useState('print("Hello, World!")');
  
  // Unwrap params using React.use (since it's a promise in Next 15 page props)
  // Mock data for now since we don't have DB integrated yet
  const courseName = "Python for Beginners";

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 450px', gap: '1.5rem', height: 'calc(100vh - 140px)' }}>
      {/* Left Panel: Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Link href="/courses">
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
            <Button onClick={() => setActiveTab('quiz')}>Take Quiz</Button>
          </div>
        </Card>
      </div>

      {/* Right Panel: Interactive (Editor / AI / Quiz) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid var(--glass-border)', padding: '1rem' }}>
            <button 
              onClick={() => setActiveTab('editor')}
              style={{ background: 'none', border: 'none', color: activeTab === 'editor' ? 'var(--accent-primary)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: activeTab === 'editor' ? 'bold' : 'normal' }}>
              <Code2 size={18} /> Editor
            </button>
            <button 
              onClick={() => setActiveTab('quiz')}
              style={{ background: 'none', border: 'none', color: activeTab === 'quiz' ? 'var(--accent-warning)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: activeTab === 'quiz' ? 'bold' : 'normal' }}>
              <PlayCircle size={18} /> Quiz
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              style={{ background: 'none', border: 'none', color: activeTab === 'ai' ? 'var(--accent-info)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: activeTab === 'ai' ? 'bold' : 'normal' }}>
              <HelpCircle size={18} /> AI Tutor
            </button>
          </div>
          
          <div style={{ flex: 1, padding: activeTab === 'editor' ? '0' : '1rem', overflowY: 'auto' }}>
            {activeTab === 'editor' && <CodeEditor initialCode={code} language="python" />}
            {activeTab === 'ai' && <AiChatPanel currentCode={code} lessonContext="Python Hello World" />}
            {activeTab === 'quiz' && (
              <QuizEngine 
                questions={[
                  { id: 'q1', text: 'Which function is used to output text in Python?', options: [{ id: 'a', text: 'echo()' }, { id: 'b', text: 'print()' }, { id: 'c', text: 'write()' }], correctId: 'b' }
                ]} 
                onComplete={(score, passed) => console.log('Quiz finished', score, passed)} 
              />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
