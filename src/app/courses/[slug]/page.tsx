import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import {
  Clock,
  BookOpen,
  Trophy,
  ExternalLink,
  Video,
  FileText,
  CheckCircle,
  Download,
  Wrench,
  PlayCircle
} from 'lucide-react';
import Link from 'next/link';
import { getCourseWithModules } from '@/lib/db';
import { notFound } from 'next/navigation';
import AuthorBanner from '@/components/ui/AuthorBanner';
import CourseUpdatesBanner from '@/components/ui/CourseUpdatesBanner';

export default async function CourseDetailPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const course = await getCourseWithModules(slug);

  if (!course) return notFound();

  const totalLessons = course.modules.reduce(
    (sum: number, m: any) => sum + m.lessons.length,
    0
  );
  const totalMinutes = course.modules.reduce(
    (sum: number, m: any) =>
      sum + m.lessons.reduce((ls: number, l: any) => ls + l.estimatedMinutes, 0),
    0
  );

  // Find the first lesson to link "Start Course"
  const firstLesson =
    course.modules.length > 0 && course.modules[0].lessons.length > 0
      ? course.modules[0].lessons[0]
      : null;

  const getDifficultyVariant = (d: string) => {
    if (d === 'beginner') return 'success' as const;
    if (d === 'intermediate') return 'warning' as const;
    return 'danger' as const;
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'youtube':
        return <Video size={18} color="var(--accent-danger)" />;
      case 'video':
        return <Video size={18} color="var(--accent-info)" />;
      case 'ebook':
        return <BookOpen size={18} color="var(--accent-primary)" />;
      case 'article':
        return <FileText size={18} color="var(--accent-success)" />;
      case 'cheatsheet':
        return <Download size={18} color="var(--accent-warning)" />;
      default:
        return <ExternalLink size={18} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* ── Course Header ── */}
      <section
        style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Color accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: course.category.color,
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <Badge variant={getDifficultyVariant(course.difficulty)}>
            {course.difficulty}
          </Badge>
          <Badge variant="secondary">{course.category.name}</Badge>
          {/* Lecture count badge matching CodeHut PRO format */}
          <span style={{ color: '#ef4444', fontSize: '0.875rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span style={{ fontSize: '1.25rem', lineHeight: 0 }}>•</span> {totalLessons} Lectures
          </span>
        </div>

        <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem', fontWeight: 800 }}>
          {course.title}
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.125rem',
            maxWidth: '650px',
            margin: '0 auto 2rem',
            lineHeight: 1.6,
          }}
        >
          {course.description}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Clock size={20} color="var(--accent-info)" />
            <span>{course.estimatedHours} Hours</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
            }}
          >
            <BookOpen size={20} color="var(--accent-primary)" />
            <span>{totalLessons} Sublessons</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Trophy size={20} color="var(--accent-warning)" />
            <span>Certificate</span>
          </div>
        </div>

        {firstLesson && (
          <Link href={`/learn/${course.slug}/${firstLesson.slug}`}>
            <Button size="lg">Start Course ({totalLessons} Lessons)</Button>
          </Link>
        )}
      </section>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        {/* ── Left: Sections & Sublessons ── */}
        <section>
          <h2
            style={{
              fontSize: '1.75rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 800,
            }}
          >
            <BookOpen size={24} color="var(--accent-primary)" /> Course Sections & Sublessons
          </h2>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {course.modules.map((mod: any, modIdx: number) => (
              <Card key={mod.id} style={{ padding: '1.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.25rem',
                    borderBottom: '1px solid var(--glass-border)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                    <span
                      style={{
                        color: 'var(--accent-primary)',
                        marginRight: '0.6rem',
                        fontWeight: 800,
                      }}
                    >
                      {String(modIdx + 1).padStart(2, '0')}
                    </span>
                    {mod.title}
                  </h3>
                  <Badge variant="default">
                    {mod.lessons.length} sublesson
                    {mod.lessons.length !== 1 ? 's' : ''}
                  </Badge>
                </div>

                {/* Sublesson List view inspired by CodeHut PRO with 2-digit formatted numbers */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {mod.lessons.map((lesson: any, lessonIdx: number) => {
                    const paddedNum = String(lessonIdx + 1).padStart(2, '0');
                    return (
                      <Link
                        key={lesson.id}
                        href={`/learn/${course.slug}/${lesson.slug}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1rem',
                          borderRadius: '12px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--glass-border)',
                          transition: 'all 0.2s ease',
                          textDecoration: 'none',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          {/* 2-Digit Formatted Number (01, 02, 03...) matching CodeHut PRO style */}
                          <div
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 800,
                              color: 'var(--accent-primary)',
                              minWidth: '32px',
                              fontFamily: 'monospace',
                            }}
                          >
                            {paddedNum}
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                              {lesson.title}
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.775rem', marginTop: '0.15rem' }}>
                              Interactive Lesson · {lesson.estimatedMinutes} mins
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)' }}>
                          <PlayCircle size={18} />
                          <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Start</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Right Sidebar: Resources & Info ── */}
        <aside
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'sticky',
            top: 'calc(var(--navbar-height) + 2rem)',
          }}
        >
          {/* Course Stats */}
          <Card>
            <h3
              style={{
                fontSize: '1.1rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Wrench size={18} color="var(--accent-warning)" /> Course Overview
            </h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                }}
              >
                <span>Difficulty</span>
                <Badge variant={getDifficultyVariant(course.difficulty)}>
                  {course.difficulty}
                </Badge>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                }}
              >
                <span>Sections</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  {course.modules.length}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                }}
              >
                <span>Total Lectures</span>
                <span style={{ color: '#ef4444', fontWeight: 700 }}>
                  {totalLessons} Lectures
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                }}
              >
                <span>Estimated Time</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  ~{Math.round(totalMinutes / 60)}h {totalMinutes % 60}min
                </span>
              </div>
            </div>
          </Card>

          {/* Resources */}
          {course.resources.length > 0 && (
            <Card>
              <h3
                style={{
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Video size={18} color="var(--accent-danger)" /> Reference Resources ({course.resources.length})
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  maxHeight: '400px',
                  overflowY: 'auto',
                }}
              >
                {course.resources.map((res: any) => (
                  <a
                    key={res.id}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.5rem 0.6rem',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.03)',
                      transition: 'background 0.2s',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                    }}
                  >
                    {getResourceIcon(res.resourceType)}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{res.title}</div>
                      {res.author && (
                        <div
                          style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.75rem',
                          }}
                        >
                          {res.author}
                          {res.platform ? ` · ${res.platform}` : ''}
                        </div>
                      )}
                    </div>
                    <ExternalLink size={14} color="var(--text-muted)" />
                  </a>
                ))}
              </div>
            </Card>
          )}
        </aside>
      </div>

      {/* Curriculum Updates */}
      <CourseUpdatesBanner />

      {/* About the Author Banner */}
      <AuthorBanner />
    </div>
  );
}
