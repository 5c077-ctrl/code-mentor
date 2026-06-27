import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Award, Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  courseTitle: string;
}

export default function CertificateModal({ isOpen, onClose, courseId, courseTitle }: CertificateModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
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
      alert('Failed to download certificate. Make sure you have fully completed the course.');
    } finally {
      setIsDownloading(false);
    }
  };

  const triggerConfetti = () => {
    if (isOpen) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#10b981', '#f59e0b', '#3b82f6'],
      });
    }
  };

  return (
    <AnimatePresence onExitComplete={() => {}}>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
        }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onAnimationComplete={triggerConfetti}
          >
            <Card style={{ width: '450px', position: 'relative', textAlign: 'center', padding: '3rem 2rem' }}>
              <button 
                onClick={onClose}
                style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--text-secondary)' }}
              >
                <X size={24} />
              </button>
              
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)',
                border: '2px solid var(--accent-warning)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <Award size={40} color="var(--accent-warning)" />
              </div>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Course Completed!</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Congratulations on finishing <strong>{courseTitle}</strong>. You've earned a certificate of completion!
              </p>
              
              <Button size="lg" fullWidth onClick={handleDownload} disabled={isDownloading}>
                <Download size={20} />
                {isDownloading ? 'Generating PDF...' : 'Download Certificate'}
              </Button>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
