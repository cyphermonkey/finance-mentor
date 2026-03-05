import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProfile, UserProgress, ChatMessage, AIProvider } from '../types';

interface AppState {
  user: UserProfile | null;
  progress: UserProgress;
  chatHistory: ChatMessage[];
  aiProvider: AIProvider;

  setUser: (user: UserProfile) => void;
  updateUser: (updates: Partial<UserProfile>) => void;
  clearUser: () => void;
  setAiProvider: (p: AIProvider) => void;

  completeTopicId: (topicId: string) => void;
  completeModuleId: (moduleId: string) => void;
  completeCaseId: (caseId: string) => void;
  updateSkill: (skill: string, level: number) => void;
  addStudyHours: (hours: number) => void;
  addXP: (xp: number) => void;

  addChatMessage: (msg: ChatMessage) => void;
  clearChat: () => void;
}

const defaultProgress: UserProgress = {
  completedTopics: [],
  completedModules: [],
  completedCases: [],
  totalHoursStudied: 0,
  streak: 0,
  lastActive: new Date().toISOString(),
  skills: {
    'Financial Modeling': 0,
    'Valuation': 0,
    'Excel': 0,
    'Case Interviews': 0,
    'Strategy': 0,
    'Accounting': 0,
    'Communication': 0,
    'Python': 0,
    'Quantitative Methods': 0,
    'Machine Learning': 0,
    'System Design': 0,
    'Data Analysis': 0,
  },
  xp: 0,
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      progress: defaultProgress,
      chatHistory: [],
      aiProvider: 'gemini',

      setUser: (user) => set({ user }),
      updateUser: (updates) =>
        set((s) => ({ user: s.user ? { ...s.user, ...updates } : null })),
      clearUser: () => set({ user: null, progress: defaultProgress, chatHistory: [] }),
      setAiProvider: (p) => set({ aiProvider: p }),

      completeTopicId: (topicId) =>
        set((s) => {
          if (s.progress.completedTopics.includes(topicId)) return s;
          return {
            progress: {
              ...s.progress,
              completedTopics: [...s.progress.completedTopics, topicId],
              xp: s.progress.xp + 50,
              lastActive: new Date().toISOString(),
            },
          };
        }),

      completeModuleId: (moduleId) =>
        set((s) => {
          if (s.progress.completedModules.includes(moduleId)) return s;
          return {
            progress: {
              ...s.progress,
              completedModules: [...s.progress.completedModules, moduleId],
              xp: s.progress.xp + 200,
            },
          };
        }),

      completeCaseId: (caseId) =>
        set((s) => {
          if (s.progress.completedCases.includes(caseId)) return s;
          return {
            progress: {
              ...s.progress,
              completedCases: [...s.progress.completedCases, caseId],
              xp: s.progress.xp + 150,
            },
          };
        }),

      updateSkill: (skill, level) =>
        set((s) => ({
          progress: {
            ...s.progress,
            skills: { ...s.progress.skills, [skill]: Math.min(100, level) },
          },
        })),

      addStudyHours: (hours) =>
        set((s) => ({
          progress: { ...s.progress, totalHoursStudied: s.progress.totalHoursStudied + hours },
        })),

      addXP: (xp) =>
        set((s) => ({ progress: { ...s.progress, xp: s.progress.xp + xp } })),

      addChatMessage: (msg) =>
        set((s) => ({ chatHistory: [...s.chatHistory, msg] })),

      clearChat: () => set({ chatHistory: [] }),
    }),
    {
      name: 'finance-mentor-v2',
      partialize: (state) => ({
        user: state.user,
        progress: state.progress,
        chatHistory: state.chatHistory.slice(-100),
        aiProvider: state.aiProvider,
      }),
    }
  )
);
