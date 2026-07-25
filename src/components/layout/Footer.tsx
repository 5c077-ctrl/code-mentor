import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          &copy; {new Date().getFullYear()} <strong>Code-Mentor</strong>. Created by{' '}
          <Link href="/about" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
            Scott Yann
          </Link>{' '}
          with Gemini AI. All rights reserved.
        </p>
        <div className={styles.links}>
          <Link href="/about">About the Author</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
