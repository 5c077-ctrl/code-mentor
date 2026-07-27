'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/store/useAuthStore';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { LogIn, Lock, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const checkAuth = useAuthStore(state => state.checkAuth);

  const performLogin = async (loginEmail: string, loginPass: string) => {
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPass }),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (res.ok) {
        await checkAuth();
        // Redirect directly to courses page smoothly across Mobile & PC
        window.location.href = '/courses';
      } else {
        setError(data.error || 'Invalid email or password');
        setLoading(false);
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected connection error occurred');
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performLogin(email, password);
  };

  const handleDemoLogin = () => {
    setEmail('student@codementor.pro');
    setPassword('demo123456');
    performLogin('student@codementor.pro', 'demo123456');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '75vh',
      padding: '1rem',
    }}>
      <Card style={{
        width: '100%',
        maxWidth: '420px',
        padding: '2.25rem 1.75rem',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{
            display: 'inline-flex',
            padding: '0.85rem',
            background: 'rgba(99, 102, 241, 0.15)',
            borderRadius: '16px',
            marginBottom: '0.75rem',
            color: 'var(--accent-primary)',
          }}>
            <LogIn size={28} />
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.35rem 0' }}>Welcome Back</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
            Sign in to access all interactive courses & live compilers
          </p>
        </div>

        {error && (
          <div style={{
            color: '#ef4444',
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            padding: '0.85rem',
            borderRadius: '12px',
            marginBottom: '1.25rem',
            fontSize: '0.875rem',
            textAlign: 'center',
            fontWeight: 500,
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600 }}>
              Email or Username
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Mail size={18} style={{ position: 'absolute', left: '0.85rem', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="e.g. scottyann2020@gmail.com"
                style={{
                  width: '100%',
                  padding: '0.85rem 0.85rem 0.85rem 2.6rem',
                  borderRadius: '12px',
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600 }}>
              Password
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Lock size={18} style={{ position: 'absolute', left: '0.85rem', color: 'var(--text-muted)' }} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.85rem 0.85rem 0.85rem 2.6rem',
                  borderRadius: '12px',
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <Button type="submit" fullWidth disabled={loading} style={{ marginTop: '0.5rem', padding: '0.85rem', fontSize: '1rem', fontWeight: 700 }}>
            {loading ? 'Logging in & Redirecting...' : 'Sign In'}
          </Button>

          {/* Quick Demo Access for Mobile & PC Users */}
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={loading}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem',
              borderRadius: '12px',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: 'var(--accent-primary)',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
          >
            <Sparkles size={16} /> Quick 1-Tap Demo Login
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '1.75rem 0 0 0' }}>
          Don't have an account? <Link href="/register" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Create Account</Link>
        </p>
      </Card>
    </div>
  );
}

