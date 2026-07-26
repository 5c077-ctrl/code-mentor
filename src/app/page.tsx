'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { BookOpen, Terminal, Trophy, Code2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AuthorBanner from '@/components/ui/AuthorBanner';
import CourseUpdatesBanner from '@/components/ui/CourseUpdatesBanner';

const CATEGORIES_HIGHLIGHT = [
  { name: 'Basics', icon: '⚙️', count: '3 Courses (63 Lectures)', color: '#3b82f6', slug: 'basics' },
  { name: 'Main Programming Languages', icon: '💻', count: '13 Languages', color: '#8b5cf6', slug: 'programming' },
  { name: 'Web Development Essentials', icon: '🌐', count: '4 Courses', color: '#3b82f6', slug: 'web-development' },
  { name: 'Main Front-End Frameworks', icon: '🎨', count: '5 Frameworks', color: '#ec4899', slug: 'frontend-frameworks' },
  { name: 'Main Back-End Frameworks', icon: '⚡', count: '7 Frameworks', color: '#10b981', slug: 'backend-frameworks' },
  { name: 'Good to Know Tools', icon: '💡', count: '5 Core Tools', color: '#84cc16', slug: 'good-to-know' },
  { name: 'Databases & Storage', icon: '🗄️', count: 'MongoDB (39 Lectures) + 5 DBs', color: '#06b6d4', slug: 'databases' },
  { name: 'Learn Mobile Apps Development', icon: '📱', count: 'Ionic, RN, Flutter, NativeScript', color: '#f59e0b', slug: 'mobile-dev' },
];

const COMPILERS_PREVIEW = [
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'Java', icon: '☕', color: '#e76f51' },
  { name: 'C++', icon: '⚙️', color: '#00599c' },
  { name: 'PHP', icon: '🐘', color: '#777bb4' },
  { name: 'Kotlin', icon: '🟪', color: '#7f52ff' },
  { name: 'Go', icon: '🦫', color: '#00add8' },
  { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
  { name: 'Ruby', icon: '💎', color: '#cc342d' },
  { name: 'Database (SQL)', icon: '🗄️', color: '#06b6d4' },
  { name: 'Swift', icon: '🕊️', color: '#f05138' },
  { name: 'TypeScript', icon: '🔷', color: '#3178c6' },
  { name: 'Rust', icon: '🦀', color: '#dea584' },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ textAlign: 'center', padding: '4rem 0 2rem 0' }}
      >
        <Badge variant="primary" style={{ marginBottom: '1rem', display: 'inline-block' }}>Code Mentor PRO Edition</Badge>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.25rem', fontWeight: 800, lineHeight: 1.2 }}>
          Master Software & Frameworks with <br/><span style={{ color: 'var(--accent-primary)', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>Interactive Sublessons</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
          Structured courses, sequential 2-digit numbered lectures, 15+ in-browser code compilers, and an AI mentor to accelerate your career.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/courses">
            <Button size="lg">Explore Course Catalog</Button>
          </Link>
          <Link href="/compilers">
            <Button size="lg" variant="secondary">Open Compilers Playground</Button>
          </Link>
        </div>
      </motion.section>

      {/* Compiler Selection Grid Preview inspired by CodeHut PRO */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code2 size={24} color="var(--accent-primary)" /> Multi-Language Online Compilers
          </h2>
          <Link href="/compilers" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
            Launch Compilers IDE <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: '1rem',
        }}>
          {COMPILERS_PREVIEW.map((c) => (
            <Link key={c.name} href="/compilers" style={{ textDecoration: 'none' }}>
              <Card hover style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem 0.5rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{c.icon}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{c.name}</div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Categories Section inspired by CodeHut PRO image 4 */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={24} color="var(--accent-info)" /> Learning Paths & Categories
          </h2>
          <Link href="/courses" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
            View All Categories <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {CATEGORIES_HIGHLIGHT.map((cat) => (
            <Link key={cat.slug} href={`/courses?category=${cat.slug}`} style={{ textDecoration: 'none' }}>
              <Card hover style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
                <span style={{ fontSize: '2rem' }}>{cat.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>
                    {cat.name}
                  </h3>
                  <span style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <span style={{ fontSize: '1rem', lineHeight: 0 }}>•</span> {cat.count}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Cards */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
      >
        <motion.div variants={itemVariants}>
          <Card hover style={{ height: '100%' }}>
            <BookOpen size={36} color="var(--accent-info)" style={{ marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>Sequential 2-Digit Sublessons</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
              Every course is divided into numbered lectures (`01`, `02`, `03`...) ensuring clear step-by-step progress tracking.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card hover style={{ height: '100%' }}>
            <Terminal size={36} color="var(--accent-primary)" style={{ marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>In-Browser Multi-Lang Playground</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
              Compile and run Python, Java, C++, Go, Rust, Ruby, PHP, and SQL directly inside your browser.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card hover style={{ height: '100%' }}>
            <Trophy size={36} color="var(--accent-warning)" style={{ marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>Quizzes & Mastery Certificates</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
              Complete end-of-lesson quizzes to earn XP, maintain daily login streaks, and claim verifiable certificates.
            </p>
          </Card>
        </motion.div>
      </motion.section>

      {/* Live Curriculum Updates Banner */}
      <CourseUpdatesBanner />

      {/* About the Author Section */}
      <AuthorBanner />
    </div>
  );
}
