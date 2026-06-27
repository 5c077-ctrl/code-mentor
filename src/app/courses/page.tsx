import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Clock, BookOpen, Award } from 'lucide-react';
import { getAllCourses, getAllCategories } from '@/lib/db';

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const [courses, categories] = await Promise.all([
    getAllCourses(category),
    getAllCategories(),
  ]);

  const getDifficultyVariant = (d: string) => {
    if (d === 'beginner') return 'success' as const;
    if (d === 'intermediate') return 'warning' as const;
    return 'danger' as const;
  };

  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Course Catalog
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Explore our {courses.length} interactive courses and start learning.
        </p>
      </header>

      {/* Category Filter */}
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/courses">
          <Badge
            variant={!category ? 'primary' : 'default'}
            style={{ cursor: 'pointer', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
          >
            All Courses
          </Badge>
        </Link>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/courses?category=${cat.slug}`}>
            <Badge
              variant={category === cat.slug ? 'primary' : 'default'}
              style={{ cursor: 'pointer', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
            >
              {cat.name} ({cat._count.courses})
            </Badge>
          </Link>
        ))}
      </div>

      {/* Course Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {courses.map((course) => (
          <Card
            key={course.id}
            hover
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {/* Category color bar */}
            <div
              style={{
                height: '4px',
                background: course.category.color,
                borderRadius: '4px',
                marginBottom: '1rem',
              }}
            />

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <Badge variant={getDifficultyVariant(course.difficulty)}>
                {course.difficulty}
              </Badge>
              <Badge variant="secondary">{course.category.name}</Badge>
            </div>

            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
              {course.title}
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                flexGrow: 1,
                lineHeight: 1.5,
              }}
            >
              {course.description}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                marginBottom: '1.5rem',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
              }}
            >
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <Clock size={14} /> {course.estimatedHours}h
              </span>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <BookOpen size={14} /> {course.totalLessons} lessons
              </span>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <Award size={14} /> Certificate
              </span>
            </div>

            <Link href={`/courses/${course.slug}`}>
              <Button fullWidth>View Course</Button>
            </Link>
          </Card>
        ))}
      </div>

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
