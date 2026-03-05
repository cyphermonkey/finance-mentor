export type Field = 'finance' | 'consulting' | 'quant' | 'tech' | 'realestate' | 'economics' | 'law' | 'accounting' | 'entrepreneurship' | 'both' | 'all';
export type Track = 'finance' | 'consulting' | 'quant' | 'tech' | 'realestate' | 'economics' | 'skills' | 'entrepreneurship' | 'accounting' | 'law';
export type Level = 'beginner' | 'intermediate' | 'advanced';
export type AIProvider = 'gemini' | 'claude';

export interface UserProfile {
  id: string;
  name: string;
  background: 'student' | 'professional' | 'career-changer' | 'entrepreneur';
  field: Field;
  level: Level;
  goals: string[];
  hoursPerWeek: number;
  apiKey: string;
  aiProvider: AIProvider;
  createdAt: string;
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  realWorldExample: string;
  tools?: string[];
  practiceQuestions: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  track: Track;
  level: Level;
  topics: Topic[];
  estimatedHours: number;
  icon: string;
  color: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  type: 'ma' | 'ipo' | 'turnaround' | 'strategy' | 'consulting' | 'valuation' | 'crisis' | 'startup' | 'quant';
  difficulty: 'easy' | 'medium' | 'hard';
  year: string;
  dealSize?: string;
  description: string;
  background: string;
  keyQuestion: string;
  framework: string;
  analysis: string;
  solution: string;
  keyLessons: string[];
  tags: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  provider?: AIProvider;
}

export interface UserProgress {
  completedTopics: string[];
  completedModules: string[];
  completedCases: string[];
  totalHoursStudied: number;
  streak: number;
  lastActive: string;
  skills: Record<string, number>;
  xp: number;
}

export interface CareerPath {
  id: string;
  title: string;
  field: Field;
  description: string;
  salaryRange: string;
  topFirms: string[];
  requiredSkills: string[];
  timeline: string;
  dayInLife: string;
  howToBreakIn: string[];
  interviewTips: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}
