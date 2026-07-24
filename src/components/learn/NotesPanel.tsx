'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import ReactMarkdown from 'react-markdown';
import { Save, Edit3, Eye, Copy, Check } from 'lucide-react';

interface NotesPanelProps {
  lessonId: string;
  lessonTitle: string;
}

export default function NotesPanel({ lessonId, lessonTitle }: NotesPanelProps) {
  const [noteContent, setNoteContent] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadNote() {
      try {
        const res = await fetch(`/api/notes?lessonId=${lessonId}`);
        if (res.ok) {
          const data = await res.json();
          if (data.note) {
            setNoteContent(data.note);
          }
        }
      } catch (err) {
        console.error('Failed to load note', err);
      }
    }
    loadNote();
  }, [lessonId]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');
    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId, content: noteContent }),
      });
      if (res.ok) {
        setSaveMessage('Note saved!');
        setTimeout(() => setSaveMessage(''), 3000);
      } else {
        setSaveMessage('Failed to save.');
      }
    } catch (err) {
      setSaveMessage('Error saving note.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(noteContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem', padding: '1rem' }}>
      {/* Header controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          My Notes — {lessonTitle}
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button
            variant="secondary"
            style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem', gap: '0.35rem' }}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? <Eye size={16} /> : <Edit3 size={16} />}
            {isEditing ? 'Preview' : 'Edit'}
          </Button>
          {noteContent && (
            <Button
              variant="secondary"
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem', gap: '0.35rem' }}
              onClick={handleCopy}
            >
              {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              {copied ? 'Copied' : 'Copy'}
            </Button>
          )}
        </div>
      </div>

      {/* Editor / Preview Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '300px' }}>
        {isEditing ? (
          <textarea
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Type your study notes here... (Markdown formatting supported, e.g. **bold**, # heading, - list items)"
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              padding: '1rem',
              borderRadius: '8px',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              resize: 'none',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
        ) : (
          <div
            style={{
              flex: 1,
              padding: '1rem',
              borderRadius: '8px',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              overflowY: 'auto',
              lineHeight: 1.6,
            }}
          >
            {noteContent.trim() ? (
              <ReactMarkdown>{noteContent}</ReactMarkdown>
            ) : (
              <p style={{ color: 'var(--text-tertiary)', fontStyle: 'italic' }}>No notes written yet. Click 'Edit' to start writing notes!</p>
            )}
          </div>
        )}
      </div>

      {/* Footer Save Button & Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: saveMessage.includes('saved') ? '#10b981' : 'var(--text-tertiary)' }}>
          {saveMessage || `${noteContent.length} characters`}
        </span>
        <Button onClick={handleSave} disabled={isSaving} variant="primary" style={{ gap: '0.35rem' }}>
          <Save size={16} />
          {isSaving ? 'Saving...' : 'Save Notes'}
        </Button>
      </div>
    </div>
  );
}
