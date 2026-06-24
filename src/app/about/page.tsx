import Card from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Code Mentor</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
          An enterprise-grade, AI-driven learning platform built for the modern developer.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Code Mentor is designed to bridge the gap between theory and practice. By combining interactive coding environments with real-time AI assistance, we enable learners to overcome roadblocks faster and retain knowledge better.
          </p>
        </Card>

        <Card>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technology Stack</h2>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.5rem' }}>
            <li><strong>Frontend:</strong> Next.js 15 App Router, React 19, Framer Motion</li>
            <li><strong>Backend:</strong> Next.js Route Handlers, Prisma ORM, SQLite/PostgreSQL</li>
            <li><strong>Styling:</strong> Pure CSS Modules with Custom Properties (Glassmorphism)</li>
            <li><strong>State:</strong> Zustand</li>
            <li><strong>AI:</strong> Anthropic Claude SDK (Streaming)</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
