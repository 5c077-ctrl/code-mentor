import Link from 'next/link';
import { Home, BookOpen } from 'lucide-react';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={`glass-panel ${styles.card}`}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.desc}>
          Oops! The page or lesson you are looking for doesn't exist, has been moved, or is currently under maintenance.
        </p>

        <div className={styles.btnGroup}>
          <Link href="/dashboard" className={styles.homeBtn}>
            <Home size={18} /> Go to Dashboard
          </Link>
          <Link href="/courses" className={styles.secondaryBtn}>
            <BookOpen size={18} /> Explore Courses
          </Link>
        </div>
      </div>
    </main>
  );
}
