import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import Button from '@/components/ui/Button';

// Mock data until we hook up DB seeding
const courses = [
  { id: '1', title: 'Python for Beginners', slug: 'python-for-beginners', difficulty: 'beginner', category: 'Programming', color: '#3b82f6', desc: 'Learn the basics of Python programming from scratch.' },
  { id: '2', title: 'Advanced JavaScript', slug: 'advanced-javascript', difficulty: 'advanced', category: 'Web Dev', color: '#eab308', desc: 'Deep dive into closures, async/await, and prototypes.' },
  { id: '3', title: 'Git Mastery', slug: 'git-mastery', difficulty: 'intermediate', category: 'DevOps', color: '#f97316', desc: 'Master version control, rebasing, and workflows.' }
];

export default function CoursesPage() {
  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Course Catalog</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Explore our interactive courses and start learning.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {courses.map(course => (
          <Card key={course.id} hover style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <Badge variant={course.difficulty === 'beginner' ? 'success' : course.difficulty === 'intermediate' ? 'warning' : 'danger'}>
                {course.difficulty}
              </Badge>
              <Badge variant="secondary">{course.category}</Badge>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{course.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{course.desc}</p>
            <Link href={`/courses/${course.slug}`}>
              <Button fullWidth>View Course</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
