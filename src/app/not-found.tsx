import Link from 'next/link';
import { Home, BookOpen, Search, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className="layout-with-sidebar">
      <Sidebar />
      <div className="main-content">
        <Navbar />

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

        <Footer />
      </div>
    </div>
  );
}
