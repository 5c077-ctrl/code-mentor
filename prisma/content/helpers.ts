import type { LessonDef, QuizDef, QuizQuestionDef } from './types';

export function mcq(
  questionText: string,
  correct: string,
  wrong: [string, string],
  explanation?: string
): QuizQuestionDef {
  return {
    questionText,
    questionType: 'multiple_choice',
    explanation,
    answers: [
      { text: wrong[0], isCorrect: false },
      { text: correct, isCorrect: true },
      { text: wrong[1], isCorrect: false },
    ],
  };
}

export function trueFalse(
  questionText: string,
  isTrue: boolean,
  explanation?: string
): QuizQuestionDef {
  return {
    questionText,
    questionType: 'true_false',
    explanation,
    answers: [
      { text: 'True', isCorrect: isTrue },
      { text: 'False', isCorrect: !isTrue },
    ],
  };
}

export function quiz(title: string, questions: QuizQuestionDef[]): QuizDef {
  return { title, questions };
}

export function setupLesson(
  courseTitle: string,
  courseSlug: string,
  lang: string,
  installSteps: string,
  verifyCode: string,
  verifySolution: string,
  extraRequirements?: string
): LessonDef {
  return {
    title: 'Installation & Setup',
    slug: `installation-setup-${courseSlug}`,
    contentMarkdown: `# Welcome to ${courseTitle}

Before writing code, set up your development environment.

## Requirements
- A modern computer (Windows, macOS, or Linux)
- A text editor — [VS Code](https://code.visualstudio.com/) is recommended
- Terminal / command-line access
${extraRequirements ? `\n${extraRequirements}` : ''}

## Installation Steps
${installSteps}

## Verify Your Setup
Run the starter code in the editor to confirm everything works.

## Next Steps
Once installation succeeds, continue to the first core lesson.`,
    starterCode: verifyCode,
    solutionCode: verifySolution,
    codeLanguage: lang,
    estimatedMinutes: 15,
    xpReward: 20,
    quiz: quiz(`Setup Quiz — ${courseTitle}`, [
      mcq(
        `What is the first step before starting ${courseTitle}?`,
        'Install the required tools and verify they work',
        ['Skip setup and start coding immediately', 'Deploy to production first'],
        'Always verify your toolchain before learning.'
      ),
      trueFalse(
        'A text editor and terminal are essential development tools.',
        true
      ),
    ]),
  };
}

export function lesson(
  title: string,
  slug: string,
  contentMarkdown: string,
  opts: {
    starterCode?: string;
    solutionCode?: string;
    codeLanguage?: string;
    estimatedMinutes?: number;
    xpReward?: number;
    quiz: QuizDef;
  }
): LessonDef {
  return {
    title,
    slug,
    contentMarkdown,
    starterCode: opts.starterCode,
    solutionCode: opts.solutionCode,
    codeLanguage: opts.codeLanguage,
    estimatedMinutes: opts.estimatedMinutes ?? 20,
    xpReward: opts.xpReward ?? 50,
    quiz: opts.quiz,
  };
}

export function countLessons(modules: { lessons: LessonDef[] }[]): number {
  return modules.reduce((sum, m) => sum + m.lessons.length, 0);
}
