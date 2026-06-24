import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { BookOpen, Terminal, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section Placeholder */}
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <Badge variant="primary" className="mb-4">v1.0 Now Live</Badge>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>
          Master Code with an <span style={{ color: 'var(--accent-primary)' }}>AI Mentor</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Interactive lessons, real-time code execution, and an AI tutor that helps you when you're stuck.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button size="lg">Start Learning Free</Button>
          <Button size="lg" variant="secondary">Browse Catalog</Button>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <Card hover>
          <BookOpen size={32} color="var(--accent-info)" style={{ marginBottom: '1rem' }} />
          <h3>30+ Interactive Courses</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            From Python basics to advanced Ethical Hacking, learn by doing.
          </p>
        </Card>
        <Card hover>
          <Terminal size={32} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
          <h3>In-Browser Coding</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Write and run Python, JS, and more directly in your browser. No setup required.
          </p>
        </Card>
        <Card hover>
          <Trophy size={32} color="var(--accent-warning)" style={{ marginBottom: '1rem' }} />
          <h3>Earn Certificates</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Complete courses, pass quizzes, and earn verifiable certificates.
          </p>
        </Card>
      </section>
    </div>
  );
}
