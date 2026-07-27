'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error caught by ErrorBoundary:', error);
  }, [error]);

  return (
    <div style={{ padding: '3rem 1.5rem', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ maxWidth: '540px', width: '100%', textAlign: 'center', padding: '2.5rem' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(239,68,68,0.12)', borderRadius: '50%', marginBottom: '1.25rem' }}>
          <AlertTriangle size={36} color="var(--accent-danger)" />
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Something Went Wrong
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          An unexpected error occurred while loading this view. You can retry loading or return to the main dashboard.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button variant="primary" onClick={() => reset()} style={{ gap: '0.5rem' }}>
            <RefreshCw size={16} /> Try Again
          </Button>
          <Link href="/dashboard">
            <Button variant="secondary" style={{ gap: '0.5rem' }}>
              <Home size={16} /> Go to Dashboard
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
