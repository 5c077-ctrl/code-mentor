'use client';

import { useAuthStore } from '@/store/useAuthStore';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { User, Award, Shield, Download } from 'lucide-react';
import { useState } from 'react';

export default function ProfileClientView({
  stats,
  certificates,
  username,
  email
}: {
  stats: any;
  certificates: any[];
  username: string;
  email: string;
}) {
  const { logout } = useAuthStore();
  const [downloadingCertId, setDownloadingCertId] = useState<string | null>(null);

  const handleDownload = async (courseId: string, courseTitle: string, certId: string) => {
    setDownloadingCertId(certId);
    try {
      const res = await fetch('/api/certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId }),
      });

      if (!res.ok) throw new Error('Failed to generate certificate');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `certificate-${courseTitle.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert('Failed to download certificate.');
    } finally {
      setDownloadingCertId(null);
    }
  };

  return (
    <div>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Profile</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your personal details and view achievements.</p>
        </div>
        <Button variant="secondary" onClick={() => logout()}>Logout</Button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--glass-bg)', border: '2px solid var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <User size={64} color="var(--text-secondary)" />
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{username}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{email}</p>
          <Badge variant="primary" style={{ marginBottom: '1.5rem' }}>Level {stats?.level || 1} Developer</Badge>
          
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Total XP</span>
              <span style={{ fontWeight: 'bold' }}>{stats?.totalXp || 0}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Current Streak</span>
              <span style={{ fontWeight: 'bold', color: 'var(--accent-warning)' }}>{stats?.currentStreak || 0} Days</span>
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <section>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={24} color="var(--accent-warning)" /> Certificates
            </h3>
            {certificates.length === 0 ? (
              <Card>
                <p style={{ color: 'var(--text-secondary)' }}>No certificates earned yet. Complete a course to earn one!</p>
              </Card>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {certificates.map((cert) => (
                  <Card key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{cert.course.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Issued: {new Date(cert.issuedAt).toLocaleDateString()} · Score: {cert.finalScore}%
                      </p>
                    </div>
                    <Button 
                      variant="secondary" 
                      onClick={() => handleDownload(cert.courseId, cert.course.title, cert.id)}
                      disabled={downloadingCertId === cert.id}
                    >
                      <Download size={18} style={{ marginRight: '0.5rem' }} />
                      {downloadingCertId === cert.id ? '...' : 'Download'}
                    </Button>
                  </Card>
                ))}
              </div>
            )}
          </section>

          <section>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={24} color="var(--accent-success)" /> Security
            </h3>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Password</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Last changed 30 days ago</p>
                </div>
                <Button variant="secondary">Change Password</Button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
