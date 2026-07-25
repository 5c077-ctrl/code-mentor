'use client';

import React, { useState } from 'react';
import { Bell, Sparkles, ChevronRight, CheckCircle2, Flame, Clock } from 'lucide-react';
import styles from './CourseUpdatesBanner.module.css';

interface UpdateItem {
  id: string;
  category: string;
  title: string;
  date: string;
  description: string;
  tag: 'NEW' | 'UPDATE' | 'ENHANCED';
}

export default function CourseUpdatesBanner() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'NEW' | 'UPDATE'>('all');

  const updates: UpdateItem[] = [
    {
      id: '1',
      category: 'Web Development',
      title: 'React 19 & Next.js App Router Deep Dive',
      date: 'July 2026',
      description: 'Added 5 new lessons covering React Server Components, Server Actions, useActionState, and Turbopack optimizations.',
      tag: 'NEW',
    },
    {
      id: '2',
      category: 'AI & Machine Learning',
      title: 'PyTorch 2.2 & Transformer Architecture',
      date: 'July 2026',
      description: 'Updated PyTorch module with hands-on attention mechanism exercises and LLM fine-tuning setup guides.',
      tag: 'ENHANCED',
    },
    {
      id: '3',
      category: 'Programming',
      title: 'Python 3.12 Syntax & Performance Upgrades',
      date: 'July 2026',
      description: 'Refactored Python starter code exercises to use modern f-string improvements and type hinting annotations.',
      tag: 'UPDATE',
    },
    {
      id: '4',
      category: 'DevOps & Tools',
      title: 'Docker Compose v2 & Kubernetes Helm Charts',
      date: 'June 2026',
      description: 'Added 4 new hands-on deployment lessons with interactive terminal snippets and multi-stage container builds.',
      tag: 'NEW',
    },
  ];

  const filteredUpdates = activeFilter === 'all'
    ? updates
    : updates.filter(u => u.tag === activeFilter);

  return (
    <div className={`glass-panel ${styles.container}`}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.bellBadge}>
            <Bell size={20} color="#f59e0b" />
          </div>
          <div>
            <h3 className={styles.title}>Live Curriculum Updates & Release Notes</h3>
            <p className={styles.subtitle}>Stay updated with the latest lesson additions, framework upgrades, and new exercises.</p>
          </div>
        </div>

        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Updates
          </button>
          <button
            className={`${styles.filterBtn} ${activeFilter === 'NEW' ? styles.active : ''}`}
            onClick={() => setActiveFilter('NEW')}
          >
            New Lessons
          </button>
          <button
            className={`${styles.filterBtn} ${activeFilter === 'UPDATE' ? styles.active : ''}`}
            onClick={() => setActiveFilter('UPDATE')}
          >
            Upgrades
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredUpdates.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={`${styles.tag} ${styles[item.tag]}`}>{item.tag}</span>
              <span className={styles.catName}>{item.category}</span>
              <span className={styles.date}>
                <Clock size={12} /> {item.date}
              </span>
            </div>
            <h4 className={styles.cardTitle}>{item.title}</h4>
            <p className={styles.cardDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
