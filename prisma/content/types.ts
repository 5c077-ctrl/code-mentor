export interface QuizAnswerDef {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestionDef {
  questionText: string;
  questionType?: 'multiple_choice' | 'true_false' | 'code_completion' | 'code_output';
  codeSnippet?: string;
  explanation?: string;
  answers: QuizAnswerDef[];
}

export interface QuizDef {
  title: string;
  questions: QuizQuestionDef[];
}

export interface LessonDef {
  title: string;
  slug: string;
  contentMarkdown: string;
  starterCode?: string;
  solutionCode?: string;
  codeLanguage?: string;
  estimatedMinutes?: number;
  xpReward?: number;
  quiz: QuizDef;
}

export interface ModuleDef {
  title: string;
  description?: string;
  lessons: LessonDef[];
}

export interface ResourceDef {
  resourceType: 'youtube' | 'ebook' | 'article' | 'cheatsheet';
  title: string;
  url: string;
  author?: string;
  platform?: string;
}

export interface CourseDef {
  title: string;
  slug: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  estimatedHours: number;
  resources?: ResourceDef[];
  modules: ModuleDef[];
}

export interface CategoryDef {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  sortOrder: number;
  courses: CourseDef[];
}
