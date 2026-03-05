# FinanceMentor AI — Complete Project Documentation

> Personal AI-powered learning platform for Finance, Consulting, Quant, Tech, Real Estate, Economics, Law & Entrepreneurship. Zero to hero, built for real-world performance.

---

## Quick Start

```bash
cd ~/finance-mentor
npm install
npm run dev
# Open http://localhost:5173
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS + custom CSS variables |
| State | Zustand (persisted to localStorage) |
| Routing | React Router v6 |
| Animation | Framer Motion |
| AI — Primary | Google Gemini 2.0 Flash (built-in, free) |
| AI — Secondary | Anthropic Claude Opus 4 (user's own API key) |
| Markdown | react-markdown |
| Icons | Lucide React |
| Fonts | Playfair Display · IBM Plex Mono · DM Sans |

---

## Design System

### Color Palette
```css
--bg-base:       #060A13   /* App background */
--bg-card:       #0C1220   /* Card backgrounds */
--bg-elevated:   #131D2E   /* Elevated surfaces */
--border:        #1E2D45   /* Default borders */
--border-light:  #263650   /* Light borders */
--gold:          #E8A83E   /* Primary accent */
--gold-bright:   #F5C75A   /* Hover gold */
--blue:          #3D6FE8   /* Secondary accent */
--teal:          #00C4B4   /* Success / online */
--red:           #E85D5D   /* Error / danger */
--text-primary:  #EDF2F7
--text-secondary:#8B99B5
--text-muted:    #3D4F6B
```

### Typography
- **Headlines**: Playfair Display (editorial, authoritative)
- **Data/Numbers**: IBM Plex Mono (terminal feel)
- **Body/UI**: DM Sans (clean, modern)

### Aesthetic
Bloomberg Terminal × Linear × Stripe — surgical dark navy, gold accents, subtle dot-grid background, noise texture overlay, animated progress fills, live pulse indicators.

---

## Project Structure

```
finance-mentor/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── FINANCEMENTOR.md          ← this file
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css             ← full design system
    ├── types.ts              ← all TypeScript interfaces
    ├── store/
    │   └── appStore.ts       ← Zustand store (persisted)
    ├── lib/
    │   ├── claude.ts         ← Anthropic Claude SDK
    │   └── gemini.ts         ← Google Gemini SDK (key built-in)
    ├── data/
    │   ├── curriculum.ts     ← all learning modules & topics
    │   ├── newModules.ts     ← advanced finance modules (agent-generated)
    │   ├── caseStudies.ts    ← real-world case studies
    │   ├── newCaseStudies.ts ← new cases (agent-generated)
    │   └── careerPaths.ts    ← career path guides
    ├── components/
    │   ├── Layout.tsx        ← app shell
    │   └── Sidebar.tsx       ← navigation + user stats
    └── pages/
        ├── Onboarding.tsx    ← 6-step personalization flow
        ├── Dashboard.tsx     ← home with stats + insights
        ├── LearningHub.tsx   ← curriculum browser + topic reader
        ├── AITutor.tsx       ← Gemini/Claude chat
        ├── CaseStudies.tsx   ← case library + deep reader
        ├── Opportunities.tsx ← career path explorer
        ├── Skills.tsx        ← skill tracker + XP system
        └── Settings.tsx      ← profile + API keys
```

---

## Features

### Onboarding (6 Steps)
- Name input
- Background: Student / Professional / Career-Changer / Entrepreneur
- Knowledge Level: Beginner / Intermediate / Advanced
- **8 Career Tracks**: Finance, Consulting, Quant Finance, Technology, Real Estate, Entrepreneurship, Economics, Finance+Consulting
- Goals: Track-specific goal selection (6-8 options per track)
- AI Setup: Gemini (free, built-in) + optional Claude API key

### Dashboard
- Personalized greeting with time of day
- Live AI-generated daily insight (Gemini, no key needed)
- 4 stat cards: Topics Completed, Cases Solved, Study Hours, XP
- Level progression bar (500 XP per level)
- Quick action buttons
- Recommended modules with progress bars
- Featured case studies
- Skill radar (8 skills)

### Learning Hub
Multi-track curriculum browser with expandable modules and inline topic reader.

**Finance Track:**
- Accounting Fundamentals (beginner, 8h) — Income Statement, Balance Sheet, Cash Flow, Ratios
- Valuation Masterclass (intermediate, 12h) — DCF, Comparable Companies, LBO Analysis
- Investment Banking (intermediate, 10h) — Deal process, M&A, ECM, DCM
- Advanced Financial Modeling (intermediate, 14h) — 3-Statement, Sensitivity, Monte Carlo
- M&A Deep Dive (advanced) — Synergy analysis, Merger model, Accretion/Dilution
- Fixed Income & Debt Markets (intermediate) — Bond pricing, Yield curves, Credit
- Derivatives & Risk Management (advanced) — Greeks, Black-Scholes, VaR
- Private Credit & Alternatives (advanced) — Direct lending, Distressed, Real estate finance

**Consulting Track:**
- Problem Solving & Frameworks (beginner, 8h) — MECE, Issue Trees, Core Frameworks, Case Interviews
- Corporate Strategy (intermediate, 10h) — Competitive moats, Porter's Five Forces

**Skills Track:**
- Excel & Financial Modeling (beginner, 15h)
- Python for Finance (intermediate, 20h)
- Executive Communication (beginner, 6h) — Pyramid Principle, SCR

Each topic includes:
- Long-form content with real company examples
- Key takeaways (5 per topic)
- Real-world example (famous deal or company scenario)
- Practice questions (3 per topic)
- Tools used (where applicable)
- +50 XP on completion

### AI Tutor
- **Gemini 2.0 Flash** — always available, no API key needed (your key: `AIzaSyAp3ByB-_Gegx6TACnVo6K7Zh2y5Zcj6Ls`)
- **Claude Opus 4** — available when user provides their Anthropic key
- Toggle between providers mid-conversation
- Provider shown per-message in chat
- System prompt dynamically adapts to: user's name, field, level, background, goals, completed topics, XP
- 16 suggested prompts covering all tracks
- Streaming responses with typing indicator
- Full conversation history (last 100 messages persisted)
- Clear conversation button

**Gemini system prompt covers:**
Finance · Consulting · Quant Finance · Engineering · Real Estate · Economics · Law · Entrepreneurship

### Case Studies (6 deep cases + 3 agent-generated)

| Case | Company | Type | Difficulty | Deal Size |
|---|---|---|---|---|
| Disney Acquires Pixar | Disney / Pixar | M&A | Medium | $7.4B |
| Netflix: The Pivot | Netflix | Strategy | Medium | — |
| Apple's Return from the Dead | Apple | Turnaround | Easy | — |
| McKinsey: Retail Bank Profitability | Anonymous Bank | Consulting | Medium | — |
| Amazon Bets the Company on AWS | Amazon | Strategy | Hard | — |
| The Enron Collapse | Enron | Valuation/Fraud | Hard | — |
| KKR / Dollar General LBO | KKR | M&A | Hard | $7.1B |
| Goldman Sachs Survives 2008 | Goldman Sachs | Strategy/Risk | Hard | — |
| Renaissance Medallion Fund | Renaissance | Quant | Hard | — |

Each case has 6 sections: Background → The Question → Framework → Deep Analysis → Solution & Results → Key Lessons
+150 XP on completion

### Opportunities (Career Paths)

| Career | Field | Salary Range (Entry → Senior) |
|---|---|---|
| Investment Banking | Finance | $110K–$160K → $500K–$2M+ (MD) |
| Private Equity | Finance | $150K–$250K → $1M–$50M+ (Partner) |
| Hedge Fund / Asset Management | Finance | $150K–$300K → $5M+ (PM) |
| MBB Management Consulting | Consulting | $95K–$120K → $500K–$1M+ (Partner) |
| Venture Capital | Finance | $80K–$150K → Carry (Partner) |
| Corporate Finance | Finance | $70K–$110K → $250K–$500K+ (CFO) |
| Real Estate Private Equity | Real Estate | $120K–$180K → $1M–$20M+ (Partner) |
| Economist / Policy Analyst | Economics | $70K–$120K → $300K–$500K+ |
| Corporate Attorney / M&A Lawyer | Law | $225K–$250K → $1M–$5M+ (Partner) |

Each path includes: full description, salary range, top firms, required skills, career timeline, day-in-life, 6-7 break-in tips, 4-5 interview tips.

### Skills Tracker
- 8 core skills with self-assessment sliders (0–100%)
- Skill levels: None → Learning → Developing → Proficient → Advanced → Expert
- Level system: 500 XP per level
- Achievements: First Topic, First Module, First Case, Level 3, 5 Cases, All Finance
- XP breakdown: +50 per topic, +150 per case, +200 per module

### Settings
- Profile editing (name, study hours)
- Gemini/Claude toggle
- API key management (Claude)
- Progress stats overview
- Reset all progress

---

## XP System

| Action | XP Earned |
|---|---|
| Complete a topic | +50 XP |
| Complete a case study | +150 XP |
| Complete a module | +200 XP |
| Level threshold | 500 XP per level |

---

## API Keys

| Service | Key | Status |
|---|---|---|
| Google Gemini 2.0 Flash | `AIzaSyAp3ByB-_Gegx6TACnVo6K7Zh2y5Zcj6Ls` | Built-in, always active |
| Anthropic Claude Opus 4 | User-provided in Settings | Optional |

**Gemini models used:**
- Chat: `gemini-2.0-flash-exp`
- Insights: `gemini-2.0-flash-exp`
- Quiz generation: `gemini-2.0-flash-exp`

**Claude models used:**
- Chat: `claude-opus-4-6`
- Insights fallback: `claude-haiku-4-5-20251001`

---

## Key TypeScript Types

```ts
type Field = 'finance' | 'consulting' | 'quant' | 'tech' |
             'realestate' | 'economics' | 'law' |
             'entrepreneurship' | 'both' | 'all';

type Track = 'finance' | 'consulting' | 'quant' | 'tech' |
             'realestate' | 'economics' | 'skills' |
             'entrepreneurship' | 'accounting' | 'law';

type Level = 'beginner' | 'intermediate' | 'advanced';
type AIProvider = 'gemini' | 'claude';

interface UserProfile {
  id, name, background, field: Field,
  level: Level, goals[], hoursPerWeek,
  apiKey, aiProvider: AIProvider, createdAt
}

interface Module {
  id, title, description,
  track: Track, level: Level,
  topics: Topic[], estimatedHours, icon, color
}

interface Topic {
  id, title, content, keyPoints[],
  realWorldExample, tools?, practiceQuestions[]
}

interface CaseStudy {
  id, title, company, industry,
  type, difficulty, year, dealSize?,
  description, background, keyQuestion,
  framework, analysis, solution,
  keyLessons[], tags[]
}

interface CareerPath {
  id, title, field: Field, description,
  salaryRange, topFirms[], requiredSkills[],
  timeline, dayInLife,
  howToBreakIn[], interviewTips[]
}
```

---

## Parallel Agent Content Generation

4 agents were launched simultaneously to expand content:

| Agent | Focus | Status |
|---|---|---|
| Agent 1 | Advanced Finance modules + KKR/Goldman/Renaissance cases | ✅ Complete → `newModules.ts`, `newCaseStudies.ts` |
| Agent 2 | Quant Finance + Tech/Engineering tracks + career paths | Running → writing quant/tech curriculum |
| Agent 3 | Consulting advanced + Entrepreneurship + MBA prep | Running |
| Agent 4 | Real Estate + Economics + Law + Accounting | ✅ Content in `careerPaths.ts` (REPE, Economist, Corporate Attorney) |

To integrate `newModules.ts` into the curriculum:
```ts
// In curriculum.ts, import and spread:
import { newModules } from './newModules';
export const allCurriculum = [...curriculum, ...newModules];
```

---

## Running the App

```bash
# Install dependencies
cd ~/finance-mentor
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build
npm run preview
```

**On first load:** Complete the 6-step onboarding. Progress is auto-saved to browser localStorage under key `finance-mentor-v2`.

**To reset:** Settings → "Reset All Progress" or clear localStorage.

---

## Curriculum Content Philosophy

Every topic follows this formula:
1. **Real-world anchor** — real company, real deal, real numbers from the first sentence
2. **Structured explanation** — markdown with bold key terms, code blocks for formulas
3. **Key points** — 5 interview-ready bullet points
4. **Famous example** — one famous deal/company scenario (Disney/Pixar, Enron, etc.)
5. **Practice questions** — 3 increasingly difficult questions
6. **Career connection** — how mastering this topic helps in interviews and on the job

---

## Customization

### Add a new module
```ts
// src/data/curriculum.ts
{
  id: 'your-module-id',
  title: 'Module Title',
  description: 'What you will learn...',
  track: 'finance',           // finance | consulting | quant | tech | skills | ...
  level: 'intermediate',      // beginner | intermediate | advanced
  estimatedHours: 8,
  icon: '📊',
  color: '#3D6FE8',
  topics: [ /* Topic[] */ ]
}
```

### Add a new career path
```ts
// src/data/careerPaths.ts
{
  id: 'your-path-id',
  title: 'Role Title',
  field: 'finance',
  description: '...',
  salaryRange: '$X–$Y (Junior) → $A–$B+ (Senior)',
  topFirms: ['Firm A', 'Firm B'],
  requiredSkills: ['Skill 1', 'Skill 2'],
  timeline: '...',
  dayInLife: '...',
  howToBreakIn: ['Tip 1', 'Tip 2'],
  interviewTips: ['Tip 1', 'Tip 2'],
}
```

### Change AI provider default
```ts
// src/store/appStore.ts
aiProvider: 'gemini',   // or 'claude'
```

---

*Built with Claude Code · Powered by Gemini 2.0 Flash + Claude Opus 4*
