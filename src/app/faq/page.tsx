'use client';

import { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, Mail, MessageSquare } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import styles from './Faq.module.css';

interface FaqItem {
  id: string;
  category: 'general' | 'courses' | 'xp' | 'account';
  question: string;
  answer: string;
}

export default function FaqPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('1');

  const faqs: FaqItem[] = [
    {
      id: '1',
      category: 'general',
      question: 'What is Code-Mentor and how does it work?',
      answer: 'Code-Mentor is an interactive learning platform for developers. We offer comprehensive courses across 8 major domains (Programming, Web Dev, DevOps, Databases, Ethical Hacking, AI/ML, Mobile Dev, and Cloud). Each course consists of theory, interactive code exercises, and quizzes to test your understanding.',
    },
    {
      id: '2',
      category: 'courses',
      question: 'Are all courses included with a free account?',
      answer: 'Yes! All courses, modules, lessons, interactive code playgrounds, and quizzes are 100% free for all registered users.',
    },
    {
      id: '3',
      category: 'xp',
      question: 'How do XP points and Streaks work?',
      answer: 'You earn XP by completing lessons, passing quizzes, and submitting code solutions. Maintaining a daily streak unlocks achievement badges and boosts your position on the global Leaderboard.',
    },
    {
      id: '4',
      category: 'courses',
      question: 'Can I write and run real code in the browser?',
      answer: 'Absolutely! Our interactive lesson exercises feature an embedded code editor supporting Python, JavaScript, TypeScript, HTML/CSS, SQL, C++, Java, Rust, Go, Bash, Swift, and Dart.',
    },
    {
      id: '5',
      category: 'account',
      question: 'How do I change my password or profile settings?',
      answer: 'Navigating to the Settings page allows you to update your display name, bio, learning goals, theme, notification preferences, and account security.',
    },
    {
      id: '6',
      category: 'general',
      question: 'Is Code-Mentor suitable for complete beginners?',
      answer: 'Yes! Every category starts with beginner-friendly courses (e.g., Python Basics, HTML & CSS Masterclass, Git Mastery, SQL Fundamentals) equipped with step-by-step installation setup guides.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="layout-with-sidebar">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        <main className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <HelpCircle size={36} color="#6366f1" /> Frequently Asked Questions
            </h1>
            <p className={styles.subtitle}>Have questions? We\'ve got answers. Everything you need to know about Code-Mentor.</p>
          </div>

          <div className={styles.searchBar}>
            <Search size={20} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.categories}>
            <button
              className={`${styles.catBtn} ${activeCategory === 'all' ? styles.active : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button
              className={`${styles.catBtn} ${activeCategory === 'general' ? styles.active : ''}`}
              onClick={() => setActiveCategory('general')}
            >
              General
            </button>
            <button
              className={`${styles.catBtn} ${activeCategory === 'courses' ? styles.active : ''}`}
              onClick={() => setActiveCategory('courses')}
            >
              Courses
            </button>
            <button
              className={`${styles.catBtn} ${activeCategory === 'xp' ? styles.active : ''}`}
              onClick={() => setActiveCategory('xp')}
            >
              XP & Streaks
            </button>
            <button
              className={`${styles.catBtn} ${activeCategory === 'account' ? styles.active : ''}`}
              onClick={() => setActiveCategory('account')}
            >
              Account
            </button>
          </div>

          <div className={styles.accordion}>
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className={`glass-panel ${styles.item}`}>
                  <button
                    className={styles.question}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && <div className={styles.answer}>{faq.answer}</div>}
                </div>
              );
            })}
          </div>

          <div className={`glass-panel ${styles.supportCard}`}>
            <h2 className={styles.supportTitle}>Still have questions?</h2>
            <p className={styles.supportDesc}>Can\'t find what you\'re looking for? Reach out to our team!</p>
            <a href="mailto:support@code-mentor.dev" className={styles.contactBtn}>
              <Mail size={18} /> Contact Support
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
