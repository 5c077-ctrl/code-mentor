'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

interface Question {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correctId: string;
}

interface QuizEngineProps {
  questions: Question[];
  onComplete: (score: number, passed: boolean) => void;
}

export default function QuizEngine({ questions, onComplete }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (optionId: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion.id]: optionId });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate score
      let correct = 0;
      questions.forEach(q => {
        if (selectedAnswers[q.id] === q.correctId) correct++;
      });
      const finalScore = Math.round((correct / questions.length) * 100);
      setScore(finalScore);
      setIsFinished(true);
      onComplete(finalScore, finalScore >= 70);
    }
  };

  if (isFinished) {
    return (
      <Card style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Quiz Completed!</h2>
        <Badge variant={score >= 70 ? 'success' : 'danger'} style={{ fontSize: '1.25rem', padding: '0.5rem 1rem', marginBottom: '1.5rem', display: 'inline-block' }}>
          Score: {score}%
        </Badge>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          {score >= 70 ? 'Congratulations, you passed!' : 'Keep practicing and try again.'}
        </p>
        <Button onClick={() => window.location.reload()}>Retake Quiz</Button>
      </Card>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--text-secondary)' }}>Question {currentIndex + 1} of {questions.length}</span>
        <div style={{ background: 'var(--glass-bg)', width: '200px', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${((currentIndex + 1) / questions.length) * 100}%`, height: '100%', background: 'var(--accent-primary)', transition: 'width 0.3s ease' }}></div>
        </div>
      </div>

      <Card>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', lineHeight: 1.4 }}>
          {currentQuestion.text}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {currentQuestion.options.map(opt => {
            const isSelected = selectedAnswers[currentQuestion.id] === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                style={{
                  padding: '1rem',
                  textAlign: 'left',
                  background: isSelected ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                  borderRadius: '8px',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontSize: '1rem'
                }}
              >
                {opt.text}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <Button onClick={handleNext} disabled={!selectedAnswers[currentQuestion.id]}>
            {currentIndex < questions.length - 1 ? 'Next Question' : 'Submit Quiz'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
