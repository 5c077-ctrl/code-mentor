'use client';

import { useState } from 'react';
import { Trophy, Flame } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/lib/translations';
import styles from './Leaderboard.module.css';

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  streak: number;
  level: number;
  badge?: string;
}

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<'all' | 'weekly' | 'monthly'>('all');
  const language = useLanguageStore((state) => state.language);
  const t = useTranslation(language);

  const top3: LeaderboardUser[] = [
    { rank: 1, name: 'Elena Rostova', avatar: '👩‍💻', xp: 14250, streak: 42, level: 24, badge: '🥇' },
    { rank: 2, name: 'Marcus Chen', avatar: '👨‍💻', xp: 12800, streak: 28, level: 21, badge: '🥈' },
    { rank: 3, name: 'Sarah Jenkins', avatar: '👩‍🔬', xp: 11400, streak: 35, level: 19, badge: '🥉' },
  ];

  const rankings: LeaderboardUser[] = [
    { rank: 4, name: 'Alex Developer', avatar: '👨‍🚀', xp: 9850, streak: 14, level: 16 },
    { rank: 5, name: 'David Kim', avatar: '🥷', xp: 8900, streak: 21, level: 15 },
    { rank: 6, name: 'Aisha Khan', avatar: '🦸‍♀️', xp: 8200, streak: 9, level: 14 },
    { rank: 7, name: 'Lucas Silva', avatar: '🧙‍♂️', xp: 7650, streak: 18, level: 13 },
    { rank: 8, name: 'Emma Watson', avatar: '👩‍🎨', xp: 7100, streak: 12, level: 12 },
    { rank: 9, name: 'Liam O\'Connor', avatar: '👨‍✈️', xp: 6800, streak: 7, level: 11 },
    { rank: 10, name: 'Zoe Martinez', avatar: '🕵️‍♀️', xp: 6400, streak: 15, level: 10 },
  ];

  return (
    <div className="layout-with-sidebar">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        <main className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <Trophy size={36} color="#f59e0b" /> {t('globalLeaderboard')}
            </h1>
            <p className={styles.subtitle}>{t('leaderboardSubtitle')}</p>
          </div>

          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${timeframe === 'all' ? styles.active : ''}`}
              onClick={() => setTimeframe('all')}
            >
              {t('allTime')}
            </button>
            <button
              className={`${styles.tab} ${timeframe === 'monthly' ? styles.active : ''}`}
              onClick={() => setTimeframe('monthly')}
            >
              {t('thisMonth')}
            </button>
            <button
              className={`${styles.tab} ${timeframe === 'weekly' ? styles.active : ''}`}
              onClick={() => setTimeframe('weekly')}
            >
              {t('thisWeek')}
            </button>
          </div>

          {/* Podium */}
          <div className={styles.podium}>
            {/* 2nd Place */}
            <div className={`glass-panel ${styles.podiumCard} ${styles.secondPlace}`}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>{top3[1].avatar}</div>
                <span className={styles.badgeIcon}>🥈</span>
              </div>
              <div className={styles.userName}>{top3[1].name}</div>
              <div className={styles.userXp}>{top3[1].xp.toLocaleString()} XP</div>
              <div className={styles.userStreak}>
                <Flame size={16} color="#f59e0b" /> {top3[1].streak} {t('dayStreak')}
              </div>
            </div>

            {/* 1st Place */}
            <div className={`glass-panel ${styles.podiumCard} ${styles.firstPlace}`}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>{top3[0].avatar}</div>
                <span className={styles.badgeIcon}>👑</span>
              </div>
              <div className={styles.userName}>{top3[0].name}</div>
              <div className={styles.userXp}>{top3[0].xp.toLocaleString()} XP</div>
              <div className={styles.userStreak}>
                <Flame size={16} color="#f59e0b" /> {top3[0].streak} {t('dayStreak')}
              </div>
            </div>

            {/* 3rd Place */}
            <div className={`glass-panel ${styles.podiumCard} ${styles.thirdPlace}`}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>{top3[2].avatar}</div>
                <span className={styles.badgeIcon}>🥉</span>
              </div>
              <div className={styles.userName}>{top3[2].name}</div>
              <div className={styles.userXp}>{top3[2].xp.toLocaleString()} XP</div>
              <div className={styles.userStreak}>
                <Flame size={16} color="#f59e0b" /> {top3[2].streak} {t('dayStreak')}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className={`glass-panel ${styles.tableCard}`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t('rank')}</th>
                  <th>{t('learner')}</th>
                  <th>{t('streak')}</th>
                  <th>{t('totalXp')}</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((user) => (
                  <tr key={user.rank}>
                    <td className={styles.rankNum}>#{user.rank}</td>
                    <td>
                      <div className={styles.userCell}>
                        <div className={styles.smallAvatar}>{user.avatar}</div>
                        <div className={styles.userInfo}>
                          <span className={styles.name}>{user.name}</span>
                          <span className={styles.level}>Level {user.level}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.userStreak}>
                        <Flame size={16} color="#f59e0b" /> {user.streak} days
                      </div>
                    </td>
                    <td>
                      <strong style={{ color: 'var(--accent-primary)' }}>
                        {user.xp.toLocaleString()} XP
                      </strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

