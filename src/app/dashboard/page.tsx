'use client';

import { useAuthStore } from '@/store/useAuthStore';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Award, Zap, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function DashboardPage() {
  const user = useAuthStore(state => state.user);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome back, {user?.username || 'Student'}!</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Ready to continue your learning journey?</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Badge variant="warning">
            <Zap size={14} style={{ marginRight: '4px' }} /> {user?.currentStreak || 0} Day Streak
          </Badge>
          <Badge variant="primary">
            Level {user?.level || 1}
          </Badge>
        </div>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(99,102,241,0.1)', borderRadius: '12px' }}>
              <BookOpen size={24} color="var(--accent-primary)" />
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Courses in Progress</p>
              <h3 style={{ fontSize: '1.5rem' }}>2</h3>
            </div>
          </div>
        </Card>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(234,179,8,0.1)', borderRadius: '12px' }}>
              <Award size={24} color="var(--accent-warning)" />
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Total XP</p>
              <h3 style={{ fontSize: '1.5rem' }}>{user?.totalXp || 0} XP</h3>
            </div>
          </div>
        </Card>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(16,185,129,0.1)', borderRadius: '12px' }}>
              <Clock size={24} color="var(--accent-success)" />
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Hours Learned</p>
              <h3 style={{ fontSize: '1.5rem' }}>14.5</h3>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Continue Learning</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Card hover style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Python for Beginners</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Module 3: Control Flow</p>
            </div>
            <Link href="/learn/python-for-beginners/m3-lesson-1">
              <Button>Resume</Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
