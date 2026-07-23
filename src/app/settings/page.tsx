'use client';

import { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Save, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import styles from './Settings.module.css';

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    username: 'alex_developer',
    email: 'alex@example.com',
    bio: 'Full-stack developer passionate about building scalable web applications and learning new technologies.',
    dailyGoal: '30',
    theme: 'dark',
    emailNotifications: true,
    streakReminders: true,
    soundEffects: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="layout-with-sidebar">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        <main className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <SettingsIcon size={32} color="#6366f1" /> Account Settings
            </h1>
            <p className={styles.subtitle}>Manage your profile, learning preferences, and notifications.</p>
          </div>

          {saved && (
            <div className={styles.successBanner}>
              <CheckCircle2 size={20} /> Settings saved successfully!
            </div>
          )}

          <form onSubmit={handleSave} className={styles.grid}>
            {/* Profile Card */}
            <div className={`glass-panel ${styles.card}`}>
              <div className={styles.cardHeader}>
                <User size={22} color="#6366f1" />
                <div>
                  <h2 className={styles.cardTitle}>Profile Information</h2>
                  <p className={styles.cardDesc}>Update your personal information and bio.</p>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Username</label>
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Bio</label>
                <textarea
                  rows={3}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className={styles.textarea}
                />
              </div>
            </div>

            {/* Learning & Theme Card */}
            <div className={`glass-panel ${styles.card}`}>
              <div className={styles.cardHeader}>
                <Palette size={22} color="#3b82f6" />
                <div>
                  <h2 className={styles.cardTitle}>Preferences & Theme</h2>
                  <p className={styles.cardDesc}>Customize your learning environment.</p>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Daily Learning Goal</label>
                <select
                  value={profile.dailyGoal}
                  onChange={(e) => setProfile({ ...profile, dailyGoal: e.target.value })}
                  className={styles.select}
                >
                  <option value="15">15 minutes / day (Casual)</option>
                  <option value="30">30 minutes / day (Regular)</option>
                  <option value="60">60 minutes / day (Serious)</option>
                  <option value="120">120 minutes / day (Intensive)</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Theme</label>
                <select
                  value={profile.theme}
                  onChange={(e) => setProfile({ ...profile, theme: e.target.value })}
                  className={styles.select}
                >
                  <option value="dark">Dark Glass (Default)</option>
                  <option value="cyberpunk">Cyberpunk Neon</option>
                  <option value="light">Light Mode</option>
                </select>
              </div>
            </div>

            {/* Notifications Card */}
            <div className={`glass-panel ${styles.card}`}>
              <div className={styles.cardHeader}>
                <Bell size={22} color="#f59e0b" />
                <div>
                  <h2 className={styles.cardTitle}>Notifications</h2>
                  <p className={styles.cardDesc}>Manage how you receive alerts and reminders.</p>
                </div>
              </div>

              <div className={styles.toggleGroup}>
                <div className={styles.toggleLabel}>
                  <span className={styles.toggleTitle}>Email Notifications</span>
                  <span className={styles.toggleSub}>Receive course updates and new lesson announcements</span>
                </div>
                <div
                  className={`${styles.toggleSwitch} ${profile.emailNotifications ? styles.active : ''}`}
                  onClick={() => setProfile({ ...profile, emailNotifications: !profile.emailNotifications })}
                >
                  <div className={styles.toggleHandle} />
                </div>
              </div>

              <div className={styles.toggleGroup}>
                <div className={styles.toggleLabel}>
                  <span className={styles.toggleTitle}>Streak Reminders</span>
                  <span className={styles.toggleSub}>Get daily reminders to keep your learning streak alive</span>
                </div>
                <div
                  className={`${styles.toggleSwitch} ${profile.streakReminders ? styles.active : ''}`}
                  onClick={() => setProfile({ ...profile, streakReminders: !profile.streakReminders })}
                >
                  <div className={styles.toggleHandle} />
                </div>
              </div>

              <div className={styles.toggleGroup}>
                <div className={styles.toggleLabel}>
                  <span className={styles.toggleTitle}>Sound Effects</span>
                  <span className={styles.toggleSub}>Play celebratory sounds when completing quizzes</span>
                </div>
                <div
                  className={`${styles.toggleSwitch} ${profile.soundEffects ? styles.active : ''}`}
                  onClick={() => setProfile({ ...profile, soundEffects: !profile.soundEffects })}
                >
                  <div className={styles.toggleHandle} />
                </div>
              </div>
            </div>

            <button type="submit" className={styles.saveBtn}>
              <Save size={18} /> Save Settings
            </button>
          </form>
        </main>

        <Footer />
      </div>
    </div>
  );
}
