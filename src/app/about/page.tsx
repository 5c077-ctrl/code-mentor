import Card from '@/components/ui/Card';
import AuthorBanner from '@/components/ui/AuthorBanner';

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '950px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>About Code Mentor</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
          An enterprise-grade, AI-driven learning platform built for the modern developer.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <AuthorBanner />

        <Card>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Code-Mentor is designed to bridge the gap between theory and practice. By combining interactive coding environments, mandatory lesson quizzes, and real-time AI assistance, we enable learners to overcome roadblocks faster, retain knowledge better, and master modern software engineering.
          </p>
        </Card>

        <Card>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technology Stack</h2>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.7, paddingLeft: '1.5rem', fontSize: '1rem' }}>
            <li><strong>Frontend:</strong> Next.js 16 App Router, React 19, Framer Motion</li>
            <li><strong>Backend:</strong> Next.js Route Handlers, Prisma ORM, SQLite/PostgreSQL</li>
            <li><strong>Styling:</strong> Pure CSS Modules with Custom Properties & Glassmorphism</li>
            <li><strong>State Management:</strong> Zustand</li>
            <li><strong>AI Tutor:</strong> Google Gemini & Claude SDK integration</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
