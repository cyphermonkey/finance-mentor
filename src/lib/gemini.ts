import { GoogleGenerativeAI } from '@google/generative-ai';
import type { UserProfile, UserProgress } from '../types';

let geminiClient: GoogleGenerativeAI | null = null;

export function initGemini() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  geminiClient = new GoogleGenerativeAI(apiKey);
}

export function getGeminiClient() {
  return geminiClient;
}

function buildGeminiSystemPrompt(user: UserProfile, progress: UserProgress): string {
  return `You are FinanceMentor AI powered by Google Gemini — an elite personal tutor for Finance, Consulting, Quantitative Finance, Engineering, and Business careers.

USER: ${user.name} | Level: ${user.level} | Focus: ${user.field} | Background: ${user.background}
Goals: ${user.goals.join(', ')} | Topics completed: ${progress.completedTopics.length} | XP: ${progress.xp}

TEACHING STYLE:
- Real-world first: anchor every answer to real companies, deals, numbers
- Level-appropriate: ${user.level === 'beginner' ? 'Simple analogies, no jargon, first principles' : user.level === 'intermediate' ? 'Build on foundations, introduce technical terms' : 'Peer-level, nuanced, challenge assumptions'}
- Always connect to career impact
- Use **bold** for key terms, structured markdown
- End with a practical exercise or quiz question`;
}

export async function geminiChat(
  messages: { role: 'user' | 'assistant'; content: string }[],
  user: UserProfile,
  progress: UserProgress,
  onChunk: (chunk: string) => void,
  onDone: () => void
): Promise<void> {
  if (!geminiClient) {
    initGemini();
  }

  const model = geminiClient!.getGenerativeModel({
    model: 'gemini-2.0-flash-exp',
    systemInstruction: buildGeminiSystemPrompt(user, progress),
  });

  // Convert history (all but last user message) to Gemini format
  const history = messages.slice(0, -1).map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const lastMessage = messages[messages.length - 1];

  const chat = model.startChat({ history });
  const result = await chat.sendMessageStream(lastMessage.content);

  for await (const chunk of result.stream) {
    const text = chunk.text();
    if (text) onChunk(text);
  }

  onDone();
}

export async function geminiGenerateInsight(user: UserProfile, progress: UserProgress): Promise<string> {
  if (!geminiClient) initGemini();

  const model = geminiClient!.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
  const result = await model.generateContent(
    `Give ${user.name} one powerful, actionable insight for someone studying ${user.field} at ${user.level} level. Under 70 words. Tied to a real company or deal. Start directly — no preamble.`
  );
  return result.response.text();
}

export async function geminiGenerateQuiz(
  topic: string,
  level: string
): Promise<{ question: string; options: string[]; answer: number; explanation: string }[]> {
  if (!geminiClient) initGemini();

  const model = geminiClient!.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
  const result = await model.generateContent(
    `Create 3 multiple-choice quiz questions about "${topic}" for a ${level} level learner. Return ONLY a valid JSON array: [{"question":"...","options":["A) ...","B) ...","C) ...","D) ..."],"answer":0,"explanation":"..."}]. Use real company examples. answer is the 0-indexed correct option.`
  );

  try {
    const text = result.response.text();
    const match = text.match(/\[[\s\S]*\]/);
    return match ? JSON.parse(match[0]) : [];
  } catch {
    return [];
  }
}

export async function geminiExplainTopic(
  topic: string,
  user: UserProfile
): Promise<string> {
  if (!geminiClient) initGemini();

  const model = geminiClient!.getGenerativeModel({
    model: 'gemini-2.0-flash-exp',
    systemInstruction: buildGeminiSystemPrompt(user, { completedTopics: [], completedModules: [], completedCases: [], totalHoursStudied: 0, streak: 0, lastActive: '', skills: {}, xp: 0 }),
  });

  const result = await model.generateContent(
    `Explain "${topic}" for a ${user.level} level learner in ${user.field}. Use real examples with actual numbers and company names. Format with markdown. Include a "Try This" exercise at the end. 300-400 words.`
  );
  return result.response.text();
}
