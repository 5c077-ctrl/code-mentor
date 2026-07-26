import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Clock, BookOpen, Award, ChevronRight } from 'lucide-react';
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
              {cat.icon} {cat.name} ({cat._count.courses})
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
          background: course.category.color,
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
