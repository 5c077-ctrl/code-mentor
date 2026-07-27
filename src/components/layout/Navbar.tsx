'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Bell, User, Menu, Code2, Home, BookOpen, HelpCircle, Trophy } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/lib/translations';
import LanguageSelector from './LanguageSelector';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const language = useLanguageStore((state) => state.language);
  const t = useTranslation(language);

  const navTabs = [
    { label: t('home'), href: '/', icon: Home },
    { label: t('compilers'), href: '/compilers', icon: Code2 },
    { label: t('courses'), href: '/courses', icon: BookOpen },
    { label: t('quizzes'), href: '/faq', icon: HelpCircle },
    { label: t('leaderboard'), href: '/leaderboard', icon: Trophy },
  ];

  return (
    <header className={`glass-panel ${styles.navbar}`}>
      <div className={styles.left}>
        <button className={styles.menuBtn}>
          <Menu size={24} />
        </button>
        <Link href="/" className={styles.logo}>
          <span className={styles.icon}>⚡</span>
          <span className={styles.brand}>Code-Mentor <span className={styles.proBadge}>PRO</span></span>
        </Link>
      </div>

      {/* Top Tab Bar Inspired by CodeHut PRO */}
      <nav className={styles.navTabs}>
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href || (tab.href !== '/' && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`${styles.navTab} ${isActive ? styles.activeTab : ''}`}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.right}>
        <LanguageSelector />
        <div className={styles.searchBar}>
          <Search size={16} className={styles.searchIcon} />
          <input type="text" placeholder={t('searchPlaceholder')} />
        </div>
        <button className={styles.iconBtn} title="Notifications">
          <Bell size={18} />
        </button>
        <button className={styles.profileBtn} title="User Profile">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
