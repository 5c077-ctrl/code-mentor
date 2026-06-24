import Link from 'next/link';
import { BookOpen, GitBranch, Database, Shield, Brain, LayoutDashboard, Settings } from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { href: '/courses', label: 'All Courses', icon: <BookOpen size={20} /> },
    { href: '/courses?category=programming', label: 'Programming', icon: <BookOpen size={20} /> },
    { href: '/courses?category=git', label: 'Git & Versioning', icon: <GitBranch size={20} /> },
    { href: '/courses?category=databases', label: 'Databases', icon: <Database size={20} /> },
    { href: '/courses?category=hacking', label: 'Ethical Hacking', icon: <Shield size={20} /> },
    { href: '/courses?category=ai', label: 'AI & Machine Learning', icon: <Brain size={20} /> },
    { href: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className={`glass-panel ${styles.sidebar}`}>
      <div className={styles.logoArea}>
        <Link href="/" className={styles.logo}>
          <span className={styles.icon}>🎓</span>
          <span className={styles.brand}>Code-Mentor</span>
        </Link>
      </div>
      
      <nav className={styles.nav}>
        {links.map((link, idx) => (
          <Link key={idx} href={link.href} className={styles.navLink}>
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
