import Link from 'next/link';
import { Search, Bell, User, Menu } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={`glass-panel ${styles.navbar}`}>
      <div className={styles.left}>
        <button className={styles.menuBtn}>
          <Menu size={24} />
        </button>
        <Link href="/" className={styles.logo}>
          <span className={styles.icon}>🎓</span>
          <span className={styles.brand}>Code-Mentor</span>
        </Link>
      </div>

      <div className={styles.center}>
        <div className={styles.searchBar}>
          <Search size={18} className={styles.searchIcon} />
          <input type="text" placeholder="Search courses, lessons..." />
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn}>
          <Bell size={20} />
        </button>
        <button className={styles.profileBtn}>
          <User size={20} />
        </button>
      </div>
    </header>
  );
}
