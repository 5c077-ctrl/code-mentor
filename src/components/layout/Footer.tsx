'use client';

import Link from 'next/link';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useTranslation } from '@/lib/translations';
import styles from './Footer.module.css';

export default function Footer() {
  const language = useLanguageStore((state) => state.language);
  const t = useTranslation(language);

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          &copy; {new Date().getFullYear()} <strong>Code-Mentor</strong>. Created by{' '}
          <Link href="/about" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
            Scott Yann
          </Link>. All rights reserved.
        </p>
        <div className={styles.links}>
          <Link href="/about">{t('aboutAuthor')}</Link>
          <Link href="/faq">{t('faq')}</Link>
          <Link href="/leaderboard">{t('leaderboard')}</Link>
          <Link href="/settings">{t('settings')}</Link>
          <Link href="/privacy">{t('privacyPolicy')}</Link>
          <Link href="/terms">{t('termsOfService')}</Link>
        </div>
      </div>
    </footer>
  );
}
