import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Clock, Book, Trophy } from 'lucide-react';
import Link from 'next/link';

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  
  // Mock data for now
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Course Header */}
        <section style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '3rem', textAlign: 'center' }}>
          <Badge variant="primary" style={{ marginBottom: '1rem' }}>Programming</Badge>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Comprehensive guide to mastering the fundamentals and advanced concepts.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={20} color="var(--accent-info)" /> <span>10 Hours</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Book size={20} color="var(--accent-primary)" /> <span>15 Lessons</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Trophy size={20} color="var(--accent-warning)" /> <span>Certificate</span>
            </div>
          </div>
          <Link href={`/learn/${slug}/lesson-1`}>
            <Button size="lg">Start Course</Button>
          </Link>
        </section>

        {/* Syllabus */}
        <section>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Syllabus</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[1, 2, 3].map((mod) => (
              <Card key={mod}>
                <h3 style={{ marginBottom: '1rem' }}>Module {mod}: Introduction</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1rem' }}>
                  <li style={{ color: 'var(--text-secondary)' }}>Lesson 1: Getting Started</li>
                  <li style={{ color: 'var(--text-secondary)' }}>Lesson 2: Basic Syntax</li>
                  <li style={{ color: 'var(--text-secondary)' }}>Lesson 3: First Project</li>
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
