'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, Code2, HelpCircle, FileText, BookOpen, Maximize2, Columns } from 'lucide-react';
import CodeEditor from '@/components/learn/CodeEditor';
import AiChatPanel from '@/components/learn/AiChatPanel';
import QuizEngine from '@/components/learn/QuizEngine';
import NotesPanel from '@/components/learn/NotesPanel';
import CourseNotesPanel from '@/components/learn/CourseNotesPanel';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';
import CertificateModal from '@/components/learn/CertificateModal';

export default function LessonClientView({
  courseSlug,
  courseTitle,
  lesson,
  prevLesson,
  nextLesson,
}: {
  courseSlug: string;
  courseTitle: string;
  lesson: any;
  prevLesson: any;
  nextLesson: any;
}) {
  // Default to course-notes or editor
  const [activeTab, setActiveTab] = useState<'course-notes' | 'editor' | 'notes' | 'quiz' | 'ai'>(
    lesson.starterCode ? 'editor' : 'course-notes'
  );
  const [viewMode, setViewMode] = useState<'split' | 'reading'>('split');
  const [showCertificate, setShowCertificate] = useState(false);
  const router = useRouter();

  const quiz = lesson.quizzes?.[0];
  const quizQuestions = quiz?.questions.map((q: any) => {
    const correctAns = q.answers.find((a: any) => a.isCorrect);
    return {
      id: q.id,
      text: q.questionText,
      options: q.answers.map((a: any) => ({ id: a.id, text: a.answerText })),
      correctId: correctAns?.id,
    };
  });

  const handleQuizComplete = async (score: number, passed: boolean) => {
    if (passed) {
      try {
        await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lessonId: lesson.id, xpEarned: lesson.xpReward }),
        });
      } catch (err) {
        console.error('Failed to save progress', err);
      }
    }
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: viewMode === 'reading' ? '1fr' : '1fr 480px',
      gap: '1.5rem',
      height: 'calc(100vh - 140px)',
      transition: 'all 0.3s ease'
    }}>
      {/* Left Panel: Course Content & Lesson Notes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href={`/courses/${courseSlug}`}>
              <Button variant="secondary" style={{ padding: '0.5rem' }}><ArrowLeft size={20} /></Button>
            </Link>
            <span style={{ color: 'var(--text-secondary)' }}>{courseTitle} / {lesson.title}</span>
          </div>

          {/* View Mode Toggle: Reading Mode vs Split Mode */}
          <Button
            variant="secondary"
            onClick={() => setViewMode(viewMode === 'split' ? 'reading' : 'split')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
          >
            {viewMode === 'split' ? <Maximize2 size={16} /> : <Columns size={16} />}
            {viewMode === 'split' ? 'Full Reading Mode' : 'Split View'}
          </Button>
        </div>

        <Card style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2rem' }}>{lesson.title}</h1>
            <Badge variant="success">+{lesson.xpReward} XP</Badge>
          </div>
          
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.125rem', paddingBottom: '2rem' }}>
            <ReactMarkdown>{lesson.contentMarkdown}</ReactMarkdown>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
            {prevLesson ? (
              <Link href={`/learn/${courseSlug}/${prevLesson.slug}`}>
                <Button variant="secondary">Previous Lesson</Button>
              </Link>
            ) : (
              <Button variant="secondary" disabled>Previous Lesson</Button>
            )}

            {nextLesson ? (
              <Link href={`/learn/${courseSlug}/${nextLesson.slug}`}>
                <Button variant="primary">Next Lesson</Button>
              </Link>
            ) : (
              <Button variant="primary" onClick={() => setShowCertificate(true)}>Complete Course</Button>
            )}
          </div>
        </Card>
      </div>

      <CertificateModal 
        isOpen={showCertificate}
        onClose={() => setShowCertificate(false)}
        courseId={lesson.module?.course?.id || ''}
        courseTitle={courseTitle}
      />

      {/* Right Panel: Interactive Tabs (Course Notes / Editor / My Notes / Quiz / AI) */}
      {viewMode === 'split' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '0.75rem', borderBottom: '1px solid var(--glass-border)', padding: '0.75rem 1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActiveTab('course-notes')}
                style={{ background: 'none', border: 'none', color: activeTab === 'course-notes' ? 'var(--accent-primary)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: activeTab === 'course-notes' ? 'bold' : 'normal', padding: '0.25rem 0.4rem' }}>
                <BookOpen size={18} /> Course Notes
              </button>
              {lesson.starterCode && (
                <button 
                  onClick={() => setActiveTab('editor')}
                  style={{ background: 'none', border: 'none', color: activeTab === 'editor' ? '#8b5cf6' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: activeTab === 'editor' ? 'bold' : 'normal', padding: '0.25rem 0.4rem' }}>
                  <Code2 size={18} /> Code Editor
                </button>
              )}
              <button 
                onClick={() => setActiveTab('notes')}
                style={{ background: 'none', border: 'none', color: activeTab === 'notes' ? '#10b981' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: activeTab === 'notes' ? 'bold' : 'normal', padding: '0.25rem 0.4rem' }}>
                <FileText size={18} /> My Notes
              </button>
              {quizQuestions && quizQuestions.length > 0 && (
                <button 
                  onClick={() => setActiveTab('quiz')}
                  style={{ background: 'none', border: 'none', color: activeTab === 'quiz' ? 'var(--accent-warning)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: activeTab === 'quiz' ? 'bold' : 'normal', padding: '0.25rem 0.4rem' }}>
                  <PlayCircle size={18} /> Quiz
                </button>
              )}
              <button 
                onClick={() => setActiveTab('ai')}
                style={{ background: 'none', border: 'none', color: activeTab === 'ai' ? 'var(--accent-info)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: activeTab === 'ai' ? 'bold' : 'normal', padding: '0.25rem 0.4rem' }}>
                <HelpCircle size={18} /> AI Tutor
              </button>
            </div>
            
            <div style={{ flex: 1, padding: activeTab === 'editor' || activeTab === 'notes' || activeTab === 'course-notes' ? '0' : '1rem', overflowY: 'auto' }}>
              {activeTab === 'course-notes' && (
                <CourseNotesPanel
                  courseTitle={courseTitle}
                  lessonTitle={lesson.title}
                  contentMarkdown={lesson.contentMarkdown}
                  xpReward={lesson.xpReward}
                />
              )}
              {activeTab === 'editor' && (
                <CodeEditor initialCode={lesson.starterCode || ''} language={lesson.codeLanguage || 'javascript'} />
              )}
              {activeTab === 'notes' && (
                <NotesPanel lessonId={lesson.id} lessonTitle={lesson.title} />
              )}
              {activeTab === 'ai' && (
                <AiChatPanel currentCode={lesson.starterCode || ''} lessonContext={`${courseTitle} - ${lesson.title}`} />
              )}
              {activeTab === 'quiz' && quizQuestions && (
                <QuizEngine 
                  questions={quizQuestions} 
                  onComplete={handleQuizComplete} 
                />
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
