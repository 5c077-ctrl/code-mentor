import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Clock, BookOpen, Award, ChevronRight, Sparkles } from 'lucide-react';
import { getAllCourses, getAllCategories } from '@/lib/db';

export default async function CoursesPage({
  searchParams,
}: {
  searchParams?: { category?: string } | Promise<{ category?: string }>;
}) {
  const resolvedParams = searchParams ? await Promise.resolve(searchParams) : {};
  const category = resolvedParams?.category;
  const [courses, categories] = await Promise.all([
    getAllCourses(category),
    getAllCategories(),
  ]);

  const getDifficultyVariant = (d: string) => {
    if (d === 'beginner') return 'success' as const;
    if (d === 'intermediate') return 'warning' as const;
    return 'danger' as const;
  };

  // Group courses by category when viewing all
  const coursesByCategory = categories.map((cat) => ({
    ...cat,
    categoryCourses: courses.filter((c) => c.categoryId === cat.id),
  })).filter((cat) => cat.categoryCourses.length > 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>
          Course Catalog & Learning Paths
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Explore structured interactive courses across {categories.length} categories with step-by-step sublessons.
        </p>
      </header>

      {/* Live Curriculum Sync & Continuous Updates Banner */}
      <Card style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.08))',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        padding: '1.25rem 1.5rem',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'rgba(99, 102, 241, 0.2)',
            color: 'var(--accent-primary)',
          }}>
            <Sparkles size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Continuous Curriculum Sync</h3>
              <span style={{
                background: 'rgba(34, 197, 94, 0.15)',
                color: '#4ade80',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                padding: '0.15rem 0.5rem',
                borderRadius: '10px',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }}></span>
                Live 2026 Auto-Updated
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0.2rem 0 0 0' }}>
              Courses and sublessons automatically sync and update progressively as industry standards evolve.
            </p>
          </div>
        </div>
      </Card>

      {/* Category Pills Filter */}
      <div
        style={{
          display: 'flex',
          gap: '0.6rem',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/courses">
          <Badge
            variant={!category ? 'primary' : 'default'}
            style={{ cursor: 'pointer', padding: '0.4rem 0.85rem', fontSize: '0.825rem' }}
          >
            All Categories ({courses.length})
          </Badge>
        </Link>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/courses?category=${cat.slug}`}>
            <Badge
              variant={category === cat.slug ? 'primary' : 'default'}
              style={{ cursor: 'pointer', padding: '0.4rem 0.85rem', fontSize: '0.825rem' }}
            >
              {cat.icon} {cat.name} ({cat._count?.courses ?? 0})
            </Badge>
          </Link>
        ))}
      </div>

      {/* Accordion / Category Section View */}
      {category ? (
        // Filtered category view
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} getDifficultyVariant={getDifficultyVariant} />
          ))}
        </div>
      ) : (
        // Categorized Sections View
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {coursesByCategory.map((catSection) => (
            <section key={catSection.id} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{catSection.icon}</span>
                  <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>{catSection.name}</h2>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      {catSection.description}
                    </span>
                  </div>
                </div>
                <Badge variant="secondary">{catSection.categoryCourses.length} Courses</Badge>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {catSection.categoryCourses.map((course: any) => (
                  <CourseCard key={course.id} course={course} getDifficultyVariant={getDifficultyVariant} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {courses.length === 0 && (
        <Card style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
            No courses found in this category.
          </p>
          <Link href="/courses" style={{ marginTop: '1rem', display: 'inline-block' }}>
            <Button variant="secondary">View All Courses</Button>
          </Link>
        </Card>
      )}
    </div>
  );
}

function CourseCard({ course, getDifficultyVariant }: { course: any; getDifficultyVariant: any }) {
  return (
    <Card hover style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
      {/* Category color top bar */}
      <div
        style={{
          height: '4px',
          background: course.category?.color || '#3b82f6',
          borderRadius: '4px',
          marginBottom: '1rem',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <Badge variant={getDifficultyVariant(course.difficulty)}>
          {course.difficulty}
        </Badge>
        {/* Lecture count badge */}
        <span style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <span style={{ fontSize: '1.2rem', lineHeight: 0 }}>•</span> {course.totalLessons} Lectures
        </span>
      </div>

      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>
        {course.title}
      </h3>
      <p
        style={{
          color: 'var(--text-secondary)',
          marginBottom: '1.25rem',
          flexGrow: 1,
          lineHeight: 1.5,
          fontSize: '0.9rem'
        }}
      >
        {course.description}
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '1.25rem',
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Clock size={14} /> {course.estimatedHours}h
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <BookOpen size={14} /> {course.totalLessons} Sublessons
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Award size={14} /> Cert
        </span>
      </div>

      <Link href={`/courses/${course.slug}`}>
        <Button fullWidth variant="secondary" style={{ justifyContent: 'space-between' }}>
          <span>Explore Curriculum</span>
          <ChevronRight size={16} />
        </Button>
      </Link>
    </Card>
  );
}
