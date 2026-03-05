import type Anthropic from '@anthropic-ai/sdk';
import type { UserProfile, UserProgress } from '../types';

let client: Anthropic | null = null;

export async function initClaude(apiKey: string) {
  const { default: AnthropicSDK } = await import('@anthropic-ai/sdk');
  client = new AnthropicSDK({ apiKey, dangerouslyAllowBrowser: true });
}

export function getClient() {
  return client;
}

function buildSystemPrompt(user: UserProfile, progress: UserProgress, context?: string): string {
  const levelDescriptions = {
    beginner: 'has no prior knowledge and is starting from scratch',
    intermediate: 'has some foundational knowledge and wants to deepen expertise',
    advanced: 'is experienced and wants to master advanced concepts',
  };
  const backgroundContext = {
    student: 'currently a student',
    professional: 'already working as a professional',
    'career-changer': 'transitioning into this field from another industry',
    entrepreneur: 'an entrepreneur looking to apply these skills in business',
  };

  return `You are FinanceMentor AI — an elite personal tutor and career coach for Finance and Management Consulting.

USER PROFILE:
- Name: ${user.name}
- Background: ${backgroundContext[user.background]}
- Level: ${user.level} — ${levelDescriptions[user.level]}
- Field focus: ${user.field}
- Goals: ${user.goals.join(', ')}
- Study time: ${user.hoursPerWeek} hours/week
- Topics completed: ${progress.completedTopics.length}

TEACHING PHILOSOPHY:
1. Real-world first — Anchor every concept to real companies, actual deals, real numbers
2. Zero to hero — Build from absolute foundations to advanced mastery systematically
3. Practical application — Explain how concepts apply in actual job performance and interviews
4. Story-based — Use narratives around real cases (Disney, Apple, Goldman Sachs, McKinsey, etc.)
5. Adaptive — Match complexity to user's level, then stretch them just beyond their comfort zone

For BEGINNERS: Simple analogies, no jargon, explain from first principles
For INTERMEDIATE: Build on knowledge, introduce technical terms with context
For ADVANCED: Peer-level discussion, nuanced analysis, challenge assumptions

ALWAYS:
- Give concrete examples with real numbers and real company names
- Connect each concept to career impact (how it helps in interviews and on the job)
- End with a quick quiz question or "try this" exercise
- Be encouraging, direct, and efficient — teach in the minimum words needed
- Use **bold** for key terms, bullet points for lists

${context ? `CURRENT CONTEXT: ${context}` : ''}`;
}

export async function streamChat(
  messages: { role: 'user' | 'assistant'; content: string }[],
  user: UserProfile,
  progress: UserProgress,
  onChunk: (chunk: string) => void,
  onDone: () => void,
  context?: string
) {
  if (!client) throw new Error('API key not set. Go to Settings to add your Anthropic API key.');

  const stream = client.messages.stream({
    model: 'claude-opus-4-6',
    max_tokens: 2048,
    system: buildSystemPrompt(user, progress, context),
    messages,
  });

  stream.on('text', onChunk);
  stream.on('finalMessage', onDone);
  await stream.finalMessage();
}

export async function generateDailyInsight(user: UserProfile, progress: UserProgress): Promise<string> {
  if (!client) return getStaticInsight(user);
  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 250,
      system: buildSystemPrompt(user, progress),
      messages: [{
        role: 'user',
        content: `Give ${user.name} one powerful insight or real-world fact for studying ${user.field} at ${user.level} level. Under 70 words, actionable, tied to a real company or deal. Start directly — no preamble.`,
      }],
    });
    return response.content[0].type === 'text' ? response.content[0].text : getStaticInsight(user);
  } catch {
    return getStaticInsight(user);
  }
}

export async function generateQuiz(topic: string, level: string): Promise<{ question: string; options: string[]; answer: number; explanation: string }[]> {
  if (!client) return [];
  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1500,
      messages: [{
        role: 'user',
        content: `Create 3 multiple-choice quiz questions about "${topic}" for a ${level} level learner. Return ONLY a valid JSON array: [{"question":"...","options":["A) ...","B) ...","C) ...","D) ..."],"answer":0,"explanation":"..."}]. Use real company examples. answer is the 0-indexed correct option index.`,
      }],
    });
    const text = response.content[0].type === 'text' ? response.content[0].text : '[]';
    const match = text.match(/\[[\s\S]*\]/);
    return match ? JSON.parse(match[0]) : [];
  } catch {
    return [];
  }
}

function getStaticInsight(user: UserProfile): string {
  const insights: Record<string, string[]> = {
    finance: [
      "Goldman Sachs survived 2008 because they had hedged mortgage exposure with credit default swaps while competitors doubled down. Risk management separates good bankers from great ones.",
      "Warren Buffett paid 12x earnings for Coca-Cola in 1988 when everyone said it was expensive. He was valuing the brand moat. Intangible asset valuation is your edge.",
      "The RJR Nabisco LBO ($25B, 1988) proved financial engineering could unlock value in traditional companies. PE firms still use the same playbook — learn it cold.",
    ],
    consulting: [
      "BCG's Growth-Share Matrix (1970) is still used in Fortune 500 boardrooms today. Mastering 5 frameworks deeply beats knowing 20 superficially.",
      "McKinsey advised Apple in the 1990s to kill 70% of its product line. The best consulting insight is often the hardest one to deliver. Clarity over comfort.",
      "Bain's mantra: 'Results, not reports.' Every slide you build should answer the 'So what?' before the client asks it.",
    ],
    both: [
      "The 80/20 principle is universal: 80% of interview success comes from 20% of frameworks. In finance, 80% of returns come from 20% of positions. Focus is the strategy.",
      "Goldman Sachs' analysts and McKinsey consultants both master the same core skill: structuring ambiguous problems into clear, quantifiable frameworks.",
    ],
  };
  const list = insights[user.field] || insights.finance;
  return list[Math.floor(Math.random() * list.length)];
}
