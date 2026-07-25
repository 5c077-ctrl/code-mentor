'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

  const mainLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { href: '/courses', label: 'All Courses', icon: <BookOpen size={18} /> },
    { href: '/career', label: 'Big Tech Career Hub', icon: <Briefcase size={18} color="#10b981" /> },
    { href: '/leaderboard', label: 'Leaderboard', icon: <Trophy size={18} /> },
    { href: '/faq', label: 'FAQ', icon: <HelpCircle size={18} /> },
    { href: '/settings', label: 'Settings', icon: <Settings size={18} /> },
  ];

  const categoryLinks = [
    { href: '/courses?category=programming', label: 'Programming', icon: <Code2 size={16} /> },
    { href: '/courses?category=web-development', label: 'Web Development', icon: <Globe size={16} /> },
    { href: '/courses?category=devops', label: 'DevOps & Tools', icon: <GitBranch size={16} /> },
    { href: '/courses?category=databases', label: 'Databases', icon: <Database size={16} /> },
    { href: '/courses?category=ethical-hacking', label: 'Ethical Hacking', icon: <Shield size={16} /> },
    { href: '/courses?category=ai-ml', label: 'AI & Machine Learning', icon: <Brain size={16} /> },
    { href: '/courses?category=mobile-dev', label: 'Mobile Dev', icon: <Smartphone size={16} /> },
    { href: '/courses?category=cloud', label: 'Cloud Computing', icon: <Cloud size={16} /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoArea}>
        <Link href="/" className={styles.logo}>
          <span className={styles.icon}>🎓</span>
          <span className={styles.brand}>Code-Mentor</span>
        </Link>
      </div>
      
      <nav className={styles.nav}>
        <div className={styles.sectionTitle}>Menu</div>
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

        <div className={styles.sectionTitle}>Categories</div>
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
          <span>3 Day Streak!</span>
        </div>
      </div>
    </aside>
  );
}
