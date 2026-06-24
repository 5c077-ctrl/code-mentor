import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { ExternalLink, BookOpen, Video, FileText } from 'lucide-react';
import Link from 'next/link';

const resources = [
  { id: 1, type: 'video', title: 'Python in 100 Seconds', url: '#', author: 'Fireship' },
  { id: 2, type: 'ebook', title: 'Eloquent JavaScript', url: '#', author: 'Marijn Haverbeke' },
  { id: 3, type: 'article', title: 'A Complete Guide to Flexbox', url: '#', author: 'CSS-Tricks' },
  { id: 4, type: 'cheatsheet', title: 'Git Cheat Sheet', url: '#', author: 'GitHub' },
];

export default function ResourcesPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video size={20} color="var(--accent-info)" />;
      case 'ebook': return <BookOpen size={20} color="var(--accent-primary)" />;
      case 'article': return <FileText size={20} color="var(--accent-success)" />;
      default: return <FileText size={20} color="var(--accent-warning)" />;
    }
  };

  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Resource Hub</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Curated learning materials from around the web.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {resources.map(res => (
          <Card key={res.id} hover style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  {getIcon(res.type)}
                </div>
                <Badge variant="secondary" style={{ textTransform: 'capitalize' }}>{res.type}</Badge>
              </div>
              <Link href={res.url} target="_blank">
                <ExternalLink size={20} color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
              </Link>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{res.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>By {res.author}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
