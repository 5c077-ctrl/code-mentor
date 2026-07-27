'use client';

import { useLanguageStore, SUPPORTED_LANGUAGES, AppLanguage } from '@/store/useLanguageStore';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore();

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid var(--glass-border)',
          borderRadius: '20px',
          padding: '0.35rem 0.75rem',
          fontSize: '0.85rem',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        <Globe size={15} color="var(--accent-primary)" />
        <span>{currentLang.flag}</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as AppLanguage)}
          aria-label="Select default app language"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontWeight: 600,
            fontSize: '0.85rem',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option
              key={lang.code}
              value={lang.code}
              style={{ background: '#12131C', color: 'white' }}
            >
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
