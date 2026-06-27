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
} from 'lucide-react';
import Link from 'next/link';
import { getCourseWithModules } from '@/lib/db';
import { notFound } from 'next/navigation';

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourseWithModules(slug);

  if (!course) return notFound();

  const totalLessons = course.modules.reduce(
    (sum, m) => sum + m.lessons.length,
    0
  );
  const totalMinutes = course.modules.reduce(
    (sum, m) =>
      sum + m.lessons.reduce((ls, l) => ls + l.estimatedMinutes, 0),
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
            gap: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          <Badge variant={getDifficultyVariant(course.difficulty)}>
            {course.difficulty}
          </Badge>
          <Badge variant="secondary">{course.category.name}</Badge>
        </div>

        <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
          {course.title}
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.125rem',
            maxWidth: '600px',
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
            <span>{totalLessons} Lessons</span>
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
            <Button size="lg">Start Course</Button>
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
        {/* ── Left: Syllabus ── */}
        <section>
          <h2
            style={{
              fontSize: '1.75rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <BookOpen size={24} color="var(--accent-primary)" /> Course Syllabus
          </h2>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {course.modules.map((mod, modIdx) => (
              <Card key={mod.id}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <h3 style={{ fontSize: '1.15rem' }}>
                    <span
                      style={{
                        color: 'var(--accent-primary)',
                        marginRight: '0.5rem',
                      }}
                    >
                      {String(modIdx + 1).padStart(2, '0')}
                    </span>
                    {mod.title}
                  </h3>
                  <Badge variant="default">
                    {mod.lessons.length} lesson
                    {mod.lessons.length !== 1 ? 's' : ''}
                  </Badge>
                </div>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    listStyle: 'none',
                    padding: 0,
                  }}
                >
                  {mod.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <Link
                        href={`/learn/${course.slug}/${lesson.slug}`}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.6rem 0.75rem',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid transparent',
                          transition: 'all 0.2s',
                        }}
                      >
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          <CheckCircle size={16} color="var(--text-muted)" />
                          {lesson.title}
                        </span>
                        <span
                          style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.8rem',
                          }}
                        >
                          {lesson.estimatedMinutes}min · +{lesson.xpReward}XP
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Right Sidebar: Resources & Requirements ── */}
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
              <Wrench size={18} color="var(--accent-warning)" /> Course Info
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
                <span>Modules</span>
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
                <span>Lessons</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  {totalLessons}
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
                <span>Duration</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  ~{Math.round(totalMinutes / 60)}h {totalMinutes % 60}min
                </span>
              </div>
            </div>
          </Card>

          {/* YouTube & Resources */}
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
                <Video size={18} color="var(--accent-danger)" /> Learning
                Resources
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                {course.resources.map((res) => (
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
                    }}
                  >
                    {getResourceIcon(res.resourceType)}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500 }}>{res.title}</div>
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
    </div>
  );
}
