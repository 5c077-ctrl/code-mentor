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

import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/lib/translations';

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

  const language = useLanguageStore((state) => state.language);
  const t = useTranslation(language);

  // Generate deep technical FAANG-level questions if quiz is missing or basic
  const generateTechnicalQuestions = (title: string, lang: string) => {
    const titleLower = (title || '').toLowerCase();
    const langLower = (lang || '').toLowerCase();

    if (titleLower.includes('python') || langLower.includes('python')) {
      return [
        {
          id: 'q1',
          text: 'In Python 3, what is the memory & performance implication of using a Generator expression `(x*x for x in range(10**6))` vs a List comprehension `[x*x for x in range(10**6)]`?',
          options: [
            { id: 'a', text: 'Generators allocate memory lazily on-demand using $O(1)$ space, whereas list comprehensions allocate all 10^6 elements in memory upfront using $O(N)$ space.' },
            { id: 'b', text: 'List comprehensions are strictly faster and consume less RAM than generator expressions in Python.' },
            { id: 'c', text: 'Generators execute synchronously on multiple CPU threads by default.' },
            { id: 'd', text: 'Both expressions consume identical RAM because Python GIL flattens memory allocation.' }
          ],
          correctId: 'a',
        },
        {
          id: 'q2',
          text: 'What happens when modifying a mutable default argument in a Python function definition `def append_item(val, target=[])` across multiple function invocations?',
          options: [
            { id: 'a', text: 'Python throws a TypeError because default arguments are frozen.' },
            { id: 'b', text: 'The default list `target` is bound at function definition time and mutated persistently across all calls.' },
            { id: 'c', text: 'A new empty list is instantiated fresh on every single function call.' },
            { id: 'd', text: 'The function automatically copies `target` using `copy.deepcopy()`.' }
          ],
          correctId: 'b',
        },
        {
          id: 'q3',
          text: 'Which of the following describes the GIL (Global Interpreter Lock) behavior in CPython during multithreaded I/O-bound vs CPU-bound tasks?',
          options: [
            { id: 'a', text: 'GIL releases thread execution locks during I/O operations (network/disk), but restricts true parallel thread execution on multi-core CPUs for CPU-bound tasks.' },
            { id: 'b', text: 'GIL allows 100% parallel execution across all CPU cores for pure mathematical loops.' },
            { id: 'c', text: 'GIL prevents `asyncio` event loops from scheduling asynchronous coroutines.' },
            { id: 'd', text: 'GIL is only active when compiling C++ extensions for Python.' }
          ],
          correctId: 'a',
        }
      ];
    }

    if (titleLower.includes('hack') || titleLower.includes('security') || titleLower.includes('ctf') || titleLower.includes('web')) {
      return [
        {
          id: 'q1',
          text: 'Which defensive mechanism prevents Time-of-Check to Time-of-Use (TOCTOU) race conditions in web authorization logic?',
          options: [
            { id: 'a', text: 'Atomic database transactions using row-level locking (`SELECT ... FOR UPDATE`) or optimistic concurrency control.' },
            { id: 'b', text: 'Sanitizing HTML output using DOMPurify on the frontend.' },
            { id: 'c', text: 'Enabling HTTPS TLS 1.3 certificates on the reverse proxy.' },
            { id: 'd', text: 'Increasing cookie maxAge expiration timestamps.' }
          ],
          correctId: 'a',
        },
        {
          id: 'q2',
          text: 'What is the primary difference between Blind Time-Based SQL Injection and Union-Based SQL Injection?',
          options: [
            { id: 'a', text: 'Blind Time-Based SQLi infers data bit-by-bit by measuring server delay (e.g. `SLEEP(5)`), whereas Union-Based SQLi appends results directly to the visible HTTP response.' },
            { id: 'b', text: 'Union-Based SQLi requires root database admin privileges, while Time-Based does not.' },
            { id: 'c', text: 'Blind Time-Based SQLi only works on Microsoft SQL Server.' },
            { id: 'd', text: 'Union-Based SQLi cannot extract database schema table names.' }
          ],
          correctId: 'a',
        },
        {
          id: 'q3',
          text: 'How does SameSite=Strict cookie attribute mitigate Cross-Site Request Forgery (CSRF) attacks?',
          options: [
            { id: 'a', text: 'It prevents the browser from sending the session cookie in cross-site requests originating from external third-party origins.' },
            { id: 'b', text: 'It encrypts the payload using RSA 4096-bit public keys.' },
            { id: 'c', text: 'It blocks JavaScript from accessing `document.cookie`.' },
            { id: 'd', text: 'It automatically generates a unique Anti-CSRF token per HTTP request header.' }
          ],
          correctId: 'a',
        }
      ];
    }

    // Default deep technical engineering questions
    return [
      {
        id: 'q1',
        text: `In production systems implementing "${title}", what is the primary cause of memory leaks in long-running processes?`,
        options: [
          { id: 'a', text: 'Uncleaned event listeners, unclosed network streams, or lingering global references preventing Garbage Collection.' },
          { id: 'b', text: 'Executing loops with high number of iterations.' },
          { id: 'c', text: 'Using JSON.stringify() on large objects.' },
          { id: 'd', text: 'Declaring immutable variables inside function scope.' }
        ],
        correctId: 'a',
      },
      {
        id: 'q2',
        text: 'What is the time complexity difference between searching an unsorted array ($O(N)$) vs searching a balanced Binary Search Tree ($O(\\log N)$)?',
        options: [
          { id: 'a', text: 'Balanced BST divides the search space in half on every step, scaling logarithmically, while unsorted array requires scanning elements sequentially.' },
          { id: 'b', text: 'Unsorted arrays perform faster lookups due to contiguous L1 CPU cache alignment.' },
          { id: 'c', text: 'Both data structures require $O(N)$ operations in worst-case scenarios.' },
          { id: 'd', text: 'BST lookups require $O(1)$ constant time execution.' }
        ],
        correctId: 'a',
      },
      {
        id: 'q3',
        text: 'Why is Idempotency critical when designing RESTful API POST vs PUT/DELETE HTTP methods under distributed retries?',
        options: [
          { id: 'a', text: 'Idempotent methods (PUT/DELETE) produce identical server side state regardless of how many times duplicate requests are retried.' },
          { id: 'b', text: 'POST requests automatically retry failed network requests at the TCP layer.' },
          { id: 'c', text: 'Idempotency is only required for CORS preflight OPTIONS requests.' },
          { id: 'd', text: 'PUT endpoints cannot accept JSON payload bodies.' }
        ],
        correctId: 'a',
      }
    ];
  };

  const quiz = lesson.quizzes?.[0];
  const existingQuestions = quiz?.questions.map((q: any) => {
    const correctAns = q.answers.find((a: any) => a.isCorrect);
    return {
      id: q.id,
      text: q.questionText,
      options: q.answers.map((a: any) => ({ id: a.id, text: a.answerText })),
      correctId: correctAns?.id,
    };
  });

  const quizQuestions = (existingQuestions && existingQuestions.length > 0)
    ? existingQuestions
    : generateTechnicalQuestions(lesson.title || courseTitle, lesson.codeLanguage || '');


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
              <Code2 size={16} /> {t('codeEditor')}
            </button>
          )}

          <button
            className={`${styles.actionBtn} ${activeTool === 'notes' ? styles.active : ''}`}
            onClick={() => toggleTool('notes')}
          >
            <FileText size={16} /> {t('settings')}
          </button>

          {hasQuiz && (
            <button
              className={`${styles.actionBtn} ${activeTool === 'quiz' ? styles.active : ''} ${isQuizPassed ? styles.passedBtn : ''}`}
              onClick={() => toggleTool('quiz')}
            >
              {isQuizPassed ? <CheckCircle2 size={16} color="#10b981" /> : <PlayCircle size={16} />}
              {isQuizPassed ? 'Quiz Passed ✓' : t('quizzesTab')}
            </button>
          )}

          <button
            className={`${styles.actionBtn} ${activeTool === 'ai' ? styles.active : ''}`}
            onClick={() => toggleTool('ai')}
          >
            <HelpCircle size={16} /> {t('aiTutor')}
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
                {t('quizzesTab')}
              </Button>
            </div>
          )}

          <div className={styles.navigationFooter}>
            {prevLesson ? (
              <Link href={`/learn/${courseSlug}/${prevLesson.slug}`}>
                <Button variant="secondary">← {t('backToCourses')}</Button>
              </Link>
            ) : (
              <Button variant="secondary" disabled>← {t('backToCourses')}</Button>
            )}

            {nextLesson ? (
              isNextUnlocked ? (
                <Link href={`/learn/${courseSlug}/${nextLesson.slug}`}>
                  <Button variant="primary">{t('nextQuestion')} →</Button>
                </Link>
              ) : (
                <Button variant="secondary" onClick={() => setActiveTool('quiz')} style={{ gap: '0.35rem', opacity: 0.8 }}>
                  <Lock size={16} /> {t('quizzesTab')}
                </Button>
              )
            ) : (
              <Button variant="primary" onClick={() => setShowCertificate(true)}>{t('cert')} 🎓</Button>
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
