'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/lib/translations';
import LanguageSelector from './LanguageSelector';
import { 
  LayoutDashboard, 
  BookOpen, 
  Trophy, 
  HelpCircle, 
  Settings,
  Briefcase,
  Code2,
  Globe,
  GitBranch,
  Database,
  Shield,
  Brain,
  Smartphone,
  Cloud
} from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const pathname = usePathname();
  const language = useLanguageStore((state) => state.language);
  const t = useTranslation(language);

  const mainLinks = [
    { href: '/dashboard', label: t('dashboard'), icon: <LayoutDashboard size={18} /> },
    { href: '/courses', label: t('allCourses'), icon: <BookOpen size={18} /> },
    { href: '/career', label: t('careerHub'), icon: <Briefcase size={18} color="#10b981" /> },
    { href: '/leaderboard', label: t('leaderboard'), icon: <Trophy size={18} /> },
    { href: '/faq', label: t('faq'), icon: <HelpCircle size={18} /> },
    { href: '/settings', label: t('settings'), icon: <Settings size={18} /> },
  ];

  const categoryLinks = [
    { href: '/courses?category=programming', label: t('programming'), icon: <Code2 size={16} /> },
    { href: '/courses?category=web-development', label: t('webDev'), icon: <Globe size={16} /> },
    { href: '/courses?category=devops', label: t('devops'), icon: <GitBranch size={16} /> },
    { href: '/courses?category=databases', label: t('databases'), icon: <Database size={16} /> },
    { href: '/courses?category=ethical-hacking', label: t('ethicalHacking'), icon: <Shield size={16} /> },
    { href: '/courses?category=ai-ml', label: t('aiMl'), icon: <Brain size={16} /> },
    { href: '/courses?category=mobile-dev', label: t('mobileDev'), icon: <Smartphone size={16} /> },
    { href: '/courses?category=cloud', label: t('cloud'), icon: <Cloud size={16} /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoArea}>
        <Link href="/" className={styles.logo}>
          <span className={styles.icon}>🎓</span>
          <span className={styles.brand}>Code-Mentor</span>
        </Link>
      </div>

      <div style={{ padding: '0 1rem 0.75rem 1rem' }}>
        <LanguageSelector />
      </div>
      
      <nav className={styles.nav}>
        <div className={styles.sectionTitle}>{t('menu')}</div>
        {mainLinks.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={idx} 
              href={link.href} 
              className={`${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          );
        })}

        <div className={styles.sectionTitle}>{t('categories')}</div>
        {categoryLinks.map((link, idx) => (
          <Link 
            key={idx} 
            href={link.href} 
            className={`${styles.navLink} ${styles.subLink}`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.bottom}>
        <div className={styles.streak}>
          <span className={styles.fire}>🔥</span>
          <span>{t('streak')}</span>
        </div>
      </div>
    </aside>
  );
}

