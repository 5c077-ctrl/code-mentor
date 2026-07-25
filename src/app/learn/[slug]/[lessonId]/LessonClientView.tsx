'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, Code2, HelpCircle, FileText, X, Lock, CheckCircle2 } from 'lucide-react';
import CodeEditor from '@/components/learn/CodeEditor';
import AiChatPanel from '@/components/learn/AiChatPanel';
import QuizEngine from '@/components/learn/QuizEngine';
import NotesPanel from '@/components/learn/NotesPanel';
import ReactMarkdown from 'react-markdown';
import CertificateModal from '@/components/learn/CertificateModal';
import styles from './LessonView.module.css';

type ActiveTool = 'editor' | 'notes' | 'quiz' | 'ai' | null;

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
  const [activeTool, setActiveTool] = useState<ActiveTool>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [isQuizPassed, setIsQuizPassed] = useState<boolean>(false);

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

  const hasQuiz = quizQuestions && quizQuestions.length > 0;

  const handleQuizComplete = async (score: number, passed: boolean) => {
    if (passed) {
      setIsQuizPassed(true);
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

  const toggleTool = (tool: 'editor' | 'notes' | 'quiz' | 'ai') => {
    if (activeTool === tool) {
      setActiveTool(null);
    } else {
      setActiveTool(tool);
    }
  };

  const isNextUnlocked = !hasQuiz || isQuizPassed;

  return (
    <div className={styles.container}>
      {/* Top Header & Tool Buttons */}
      <div className={styles.topBar}>
        <div className={styles.breadcrumbs}>
          <Link href={`/courses/${courseSlug}`}>
            <Button variant="secondary" style={{ padding: '0.4rem 0.6rem' }}>
              <ArrowLeft size={18} />
            </Button>
          </Link>
          <span>{courseTitle} / <strong>{lesson.title}</strong></span>
        </div>

        {/* Action Buttons */}
        <div className={styles.toolButtons}>
          {lesson.starterCode && (
            <button
              className={`${styles.actionBtn} ${activeTool === 'editor' ? styles.active : ''}`}
              onClick={() => toggleTool('editor')}
            >
              <Code2 size={16} /> Code Editor
            </button>
          )}

          <button
            className={`${styles.actionBtn} ${activeTool === 'notes' ? styles.active : ''}`}
            onClick={() => toggleTool('notes')}
          >
            <FileText size={16} /> My Notes
          </button>

          {hasQuiz && (
            <button
              className={`${styles.actionBtn} ${activeTool === 'quiz' ? styles.active : ''} ${isQuizPassed ? styles.passedBtn : ''}`}
              onClick={() => toggleTool('quiz')}
            >
              {isQuizPassed ? <CheckCircle2 size={16} color="#10b981" /> : <PlayCircle size={16} />}
              {isQuizPassed ? 'Quiz Passed ✓' : 'Take Quiz'}
            </button>
          )}

          <button
            className={`${styles.actionBtn} ${activeTool === 'ai' ? styles.active : ''}`}
            onClick={() => toggleTool('ai')}
          >
            <HelpCircle size={16} /> AI Tutor
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className={`${styles.mainLayout} ${activeTool ? styles.split : styles.full}`}>
        {/* Full Course Lesson Content */}
        <div className={`glass-panel ${styles.contentCard}`}>
          <div className={styles.lessonHeader}>
            <h1 className={styles.lessonTitle}>{lesson.title}</h1>
            <Badge variant="success">+{lesson.xpReward} XP</Badge>
          </div>
          
          <div className={styles.markdownBody}>
            <ReactMarkdown>{lesson.contentMarkdown}</ReactMarkdown>
          </div>

          {/* Locked Notice if Quiz not completed */}
          {hasQuiz && !isQuizPassed && (
            <div style={{
              margin: '1.5rem 0',
              padding: '1rem 1.25rem',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#fbbf24',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.925rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                <Lock size={18} /> Complete and pass the Lesson Quiz to unlock the Next Lesson!
              </div>
              <Button size="sm" variant="secondary" onClick={() => setActiveTool('quiz')}>
                Take Quiz Now
              </Button>
            </div>
          )}

          <div className={styles.navigationFooter}>
            {prevLesson ? (
              <Link href={`/learn/${courseSlug}/${prevLesson.slug}`}>
                <Button variant="secondary">← Previous Lesson</Button>
              </Link>
            ) : (
              <Button variant="secondary" disabled>← Previous Lesson</Button>
            )}

            {nextLesson ? (
              isNextUnlocked ? (
                <Link href={`/learn/${courseSlug}/${nextLesson.slug}`}>
                  <Button variant="primary">Next Lesson →</Button>
                </Link>
              ) : (
                <Button variant="secondary" onClick={() => setActiveTool('quiz')} style={{ gap: '0.35rem', opacity: 0.8 }}>
                  <Lock size={16} /> Complete Quiz to Unlock
                </Button>
              )
            ) : (
              <Button variant="primary" onClick={() => setShowCertificate(true)}>Complete Course 🎓</Button>
            )}
          </div>
        </div>

        {/* Optional Interactive Panel (Editor / Notes / Quiz / AI) */}
        {activeTool && (
          <div className={`glass-panel ${styles.panelCard}`}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>
                {activeTool === 'editor' && <><Code2 size={18} color="#8b5cf6" /> Code Editor</>}
                {activeTool === 'notes' && <><FileText size={18} color="#10b981" /> My Notes</>}
                {activeTool === 'quiz' && <><PlayCircle size={18} color="#f59e0b" /> Lesson Quiz</>}
                {activeTool === 'ai' && <><HelpCircle size={18} color="#3b82f6" /> AI Tutor</>}
              </div>

              <button className={styles.closeBtn} onClick={() => setActiveTool(null)} title="Close Panel">
                <X size={18} />
              </button>
            </div>
            
            <div style={{ flex: 1, padding: activeTool === 'editor' || activeTool === 'notes' ? '0' : '1rem', overflowY: 'auto' }}>
              {activeTool === 'editor' && (
                <CodeEditor initialCode={lesson.starterCode || ''} language={lesson.codeLanguage || 'javascript'} />
              )}
              {activeTool === 'notes' && (
                <NotesPanel lessonId={lesson.id} lessonTitle={lesson.title} />
              )}
              {activeTool === 'ai' && (
                <AiChatPanel currentCode={lesson.starterCode || ''} lessonContext={`${courseTitle} - ${lesson.title}`} />
              )}
              {activeTool === 'quiz' && quizQuestions && (
                <QuizEngine 
                  questions={quizQuestions} 
                  onComplete={handleQuizComplete} 
                />
              )}
            </div>
          </div>
        )}
      </div>

      <CertificateModal 
        isOpen={showCertificate}
        onClose={() => setShowCertificate(false)}
        courseId={lesson.module?.course?.id || ''}
        courseTitle={courseTitle}
      />
    </div>
  );
}
