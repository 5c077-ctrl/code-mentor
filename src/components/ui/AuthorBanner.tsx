'use client';

import React from 'react';
import { User, Sparkles, Code2, Brain, Mail, Terminal, Award } from 'lucide-react';
import styles from './AuthorBanner.module.css';

export default function AuthorBanner() {
  return (
    <section className={`glass-panel ${styles.authorBanner}`}>
      <div className={styles.container}>
        <div className={styles.avatarSection}>
          <div className={styles.avatarGlow}>
            <div className={styles.avatarBadge}>👨‍💻</div>
          </div>
          <div className={styles.statusChip}>
            <Sparkles size={14} color="#f59e0b" /> Creator & Lead Architect
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.header}>
            <h2 className={styles.name}>Scott Yann</h2>
            <a href="mailto:scottyann2020@gmail.com" className={styles.emailBadge}>
              <Mail size={14} /> scottyann2020@gmail.com
            </a>
          </div>

          <p className={styles.bio}>
            Passionate software engineer, systems architect, and AI enthusiast dedicated to democratizing high-quality tech education. With a deep background in full-stack development, algorithms, and agentic AI systems, Scott built <strong>Code-Mentor</strong> to empower learners worldwide to master modern software development through interactive, hands-on practice.
          </p>

          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <Code2 size={20} color="#8b5cf6" />
              <div>
                <h4>Coding & Tech Background</h4>
                <p>Passionate about clean architecture, scalable backends, full-stack web apps, and automated trading bots.</p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <Brain size={20} color="#3b82f6" />
              <div>
                <h4>AI & Pair-Programming</h4>
                <p>Created in collaborative pair-programming synergy with <strong>Google DeepMind Gemini AI</strong> to build state-of-the-art learning tools.</p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <Terminal size={20} color="#10b981" />
              <div>
                <h4>Interactive Curriculum</h4>
                <p>Crafted 100+ hands-on lessons across 8 domains, equipped with embedded code playgrounds and adaptive quizzes.</p>
              </div>
            </div>
          </div>

          <div className={styles.footerNote}>
            <span>🎓 "Learning to code isn't just about syntax — it's about solving real-world problems and building the future with AI."</span>
          </div>
        </div>
      </div>
    </section>
  );
}
