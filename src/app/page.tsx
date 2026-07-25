'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { BookOpen, Terminal, Trophy } from 'lucide-react';
import Link from 'next/link';
import AuthorBanner from '@/components/ui/AuthorBanner';
import CourseUpdatesBanner from '@/components/ui/CourseUpdatesBanner';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ textAlign: 'center', padding: '5rem 0 3rem 0' }}
      >
        <Badge variant="primary" style={{ marginBottom: '1rem', display: 'inline-block' }}>v2.0 Enhanced Edition</Badge>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.2 }}>
          Master Code with an <br/><span style={{ color: 'var(--accent-primary)', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>AI Mentor</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Interactive lessons, real-time code execution, sequential quiz locks, and an AI tutor that guides your journey.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/register">
            <Button size="lg">Start Learning Free</Button>
          </Link>
          <Link href="/courses">
            <Button size="lg" variant="secondary">Browse Catalog</Button>
          </Link>
        </div>
      </motion.section>

      {/* Feature Cards */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', paddingBottom: '2rem' }}
      >
        <motion.div variants={itemVariants}>
          <Card hover style={{ height: '100%' }}>
            <BookOpen size={36} color="var(--accent-info)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>100+ Interactive Lessons</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              From Python and React to Ethical Hacking and Cloud Computing, master modern tech through structured modules.
            </p>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card hover style={{ height: '100%' }}>
            <Terminal size={36} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>In-Browser Coding</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Write and run Python, JS, and HTML directly in your browser with real-time feedback.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card hover style={{ height: '100%' }}>
            <Trophy size={36} color="var(--accent-warning)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Quizzes & Certificates</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Pass mandatory lesson quizzes to unlock consecutive modules and earn verifiable certificates.
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
