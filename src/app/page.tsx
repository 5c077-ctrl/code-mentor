'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { BookOpen, Terminal, Trophy, Code2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AuthorBanner from '@/components/ui/AuthorBanner';
import CourseUpdatesBanner from '@/components/ui/CourseUpdatesBanner';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/lib/translations';

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
  const language = useLanguageStore((state) => state.language);
  const t = useTranslation(language);

  const CATEGORIES_HIGHLIGHT = [
    { name: t('cat_basics'), icon: '⚙️', count: `3 ${t('coursesCount')}`, color: '#3b82f6', slug: 'basics' },
    { name: t('cat_main_prog'), icon: '💻', count: `13 ${t('cat_main_prog')}`, color: '#8b5cf6', slug: 'programming' },
    { name: t('cat_web_dev'), icon: '🌐', count: `4 ${t('coursesCount')}`, color: '#3b82f6', slug: 'web-development' },
    { name: t('cat_frontend'), icon: '🎨', count: `5 Frameworks`, color: '#ec4899', slug: 'main-front-end-frameworks' },
    { name: t('cat_backend'), icon: '⚡', count: `7 Frameworks`, color: '#10b981', slug: 'main-back-end-frameworks' },
    { name: t('cat_tools'), icon: '💡', count: `5 Tools`, color: '#84cc16', slug: 'good-to-know-tools' },
    { name: t('cat_databases'), icon: '🗄️', count: `6 DBs`, color: '#06b6d4', slug: 'databases' },
    { name: t('cat_mobile'), icon: '📱', count: `4 Frameworks`, color: '#f59e0b', slug: 'learn-mobile-apps-development' },
  ];

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
          {t('heroTitle')} <br/><span style={{ color: 'var(--accent-primary)', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>{t('heroSubTitle')}</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
          {t('heroDesc')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/courses">
            <Button size="lg">{t('exploreCatalog')}</Button>
          </Link>
          <Link href="/compilers">
            <Button size="lg" variant="secondary">{t('openCompilers')}</Button>
          </Link>
        </div>
      </motion.section>

      {/* Compiler Selection Grid Preview */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code2 size={24} color="var(--accent-primary)" /> {t('multiLangCompilers')}
          </h2>
          <Link href="/compilers" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
            {t('launchCompilersIDE')} <ArrowRight size={16} />
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

      {/* Main Categories Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={24} color="var(--accent-info)" /> {t('learningPathsCat')}
          </h2>
          <Link href="/courses" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
            {t('viewAllCategories')} <ArrowRight size={16} />
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
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>{t('seqSublessonsTitle')}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
              {t('seqSublessonsDesc')}
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card hover style={{ height: '100%' }}>
            <Terminal size={36} color="var(--accent-primary)" style={{ marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>{t('multiLangPlaygroundTitle')}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
              {t('multiLangPlaygroundDesc')}
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card hover style={{ height: '100%' }}>
            <Trophy size={36} color="var(--accent-warning)" style={{ marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>{t('quizzesCertTitle')}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
              {t('quizzesCertDesc')}
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
