import { create } from 'zustand';

interface LearnState {
  currentLessonId: string | null;
  lessonStatus: Record<string, string>; // lessonId -> 'completed' | 'in_progress'
  setCurrentLesson: (lessonId: string) => void;
  markLessonComplete: (lessonId: string) => void;
}

export const useLearnStore = create<LearnState>((set) => ({
  currentLessonId: null,
  lessonStatus: {},
  setCurrentLesson: (lessonId) => set({ currentLessonId: lessonId }),
  markLessonComplete: (lessonId) => set((state) => ({
    lessonStatus: { ...state.lessonStatus, [lessonId]: 'completed' }
  }))
}));
