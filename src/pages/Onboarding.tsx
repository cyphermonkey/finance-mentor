import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, Check, TrendingUp, Users, Briefcase, Code, Calculator, Building2, Scale, Rocket, Zap, Eye, EyeOff } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { initClaude } from '../lib/claude';
import { initGemini } from '../lib/gemini';
import type { UserProfile, Field } from '../types';

const steps = ['Welcome', 'Background', 'Focus', 'Goals', 'AI Setup', 'Ready'];

const fieldOptions = [
  { id: 'finance', label: 'Finance', desc: 'Investment Banking, Private Equity, Hedge Funds, Asset Management, Valuation', icon: TrendingUp, color: '#E8A83E' },
  { id: 'consulting', label: 'Consulting', desc: 'McKinsey, BCG, Bain — Strategy & Management Consulting', icon: Users, color: '#8B5CF6' },
  { id: 'quant', label: 'Quant Finance', desc: 'Algorithmic Trading, ML for Finance, Two Sigma, Citadel, Jane Street', icon: Calculator, color: '#3D6FE8' },
  { id: 'tech', label: 'Technology', desc: 'Software Engineering, System Design, Data Science, Product — FAANG', icon: Code, color: '#00C4B4' },
  { id: 'realestate', label: 'Real Estate', desc: 'Real Estate Finance, REPE, REITs, Property Development', icon: Building2, color: '#F97316' },
  { id: 'entrepreneurship', label: 'Entrepreneurship', desc: 'Startups, Fundraising, Unit Economics, Go-to-Market Strategy', icon: Rocket, color: '#E85D5D' },
  { id: 'economics', label: 'Economics & Macro', desc: 'Macro Analysis, Policy, Financial Markets, Fed Research', icon: Scale, color: '#10B981' },
  { id: 'both', label: 'Finance + Consulting', desc: 'Complete coverage of both finance and consulting careers', icon: Briefcase, color: '#6366F1' },
];

const backgroundOptions = [
  { id: 'student', label: 'Student', desc: 'Undergraduate or graduate student' },
  { id: 'professional', label: 'Working Professional', desc: 'Currently employed' },
  { id: 'career-changer', label: 'Career Changer', desc: 'Transitioning from another field' },
  { id: 'entrepreneur', label: 'Entrepreneur', desc: 'Building or running a business' },
];

const levelOptions = [
  { id: 'beginner', label: 'Beginner', desc: 'Starting from scratch — no prior knowledge needed', emoji: '🌱' },
  { id: 'intermediate', label: 'Intermediate', desc: 'Know the basics, want to go deeper', emoji: '📈' },
  { id: 'advanced', label: 'Advanced', desc: 'Experienced, mastering advanced topics', emoji: '🏆' },
];

const goalsByField: Record<string, string[]> = {
  finance: [
    'Land an IB analyst role at a bulge bracket (Goldman, Morgan Stanley, JPM)',
    'Break into Private Equity or Hedge Funds',
    'Master financial modeling and valuation (DCF, LBO, Comps)',
    'Pass CFA Level 1/2/3',
    'Get an MBA and transition to finance',
    'Build a startup with strong financial fundamentals',
    'Understand M&A and corporate transactions',
    'Become a better investor (stocks, funds)',
  ],
  consulting: [
    'Land an offer at McKinsey, BCG, or Bain (MBB)',
    'Ace case interviews and behavioral rounds',
    'Get into a top MBA program (HBS, Wharton, Stanford)',
    'Move from industry into consulting',
    'Build problem-solving and frameworks expertise',
    'Develop executive communication skills',
  ],
  quant: [
    'Get a quant role at Two Sigma, Citadel, or Jane Street',
    'Build algorithmic trading strategies',
    'Master stochastic calculus and derivatives pricing',
    'Apply ML/AI to financial markets',
    'Get a PhD in quantitative finance / math',
    'Build a systematic hedge fund',
  ],
  tech: [
    'Get a software engineering role at Google/Meta/Amazon',
    'Ace FAANG-style coding and system design interviews',
    'Transition into data science or ML engineering',
    'Become a Product Manager at a top tech company',
    'Build and launch a tech product or startup',
    'Master system design for senior roles',
  ],
  realestate: [
    'Break into Real Estate Private Equity (Blackstone, Brookfield)',
    'Understand real estate modeling and underwriting',
    'Develop real estate projects from scratch',
    'Analyze REITs and real estate investment',
    'Work in commercial real estate finance',
  ],
  entrepreneurship: [
    'Launch and grow a successful startup',
    'Raise venture capital funding',
    'Understand unit economics and startup finance',
    'Build a strong go-to-market strategy',
    'Exit through M&A or IPO',
  ],
  economics: [
    'Work at a central bank, IMF, or World Bank',
    'Become a macro analyst at a hedge fund',
    'Pursue a PhD in economics',
    'Work in government policy or think tanks',
    'Understand how macro drives financial markets',
  ],
  both: [
    'Land roles at both top banks AND consulting firms',
    'Get an MBA and keep all options open',
    'Build holistic business expertise',
    'Understand strategy and finance together',
  ],
};

const hoursOptions = [2, 5, 10, 20];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [field, setField] = useState<Field>('finance');
  const [background, setBackground] = useState<UserProfile['background']>('student');
  const [level, setLevel] = useState<UserProfile['level']>('beginner');
  const [goals, setGoals] = useState<string[]>([]);
  const [hours, setHours] = useState(5);
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const setUser = useAppStore((s) => s.setUser);

  function toggleGoal(g: string) {
    setGoals((prev) => prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]);
  }

  // Reset goals when field changes
  function selectField(f: Field) {
    setField(f);
    setGoals([]);
  }

  function handleFinish() {
    const user: UserProfile = {
      id: crypto.randomUUID(),
      name,
      field,
      background,
      level,
      goals: goals.length > 0 ? goals : [`Build expertise in ${field}`],
      hoursPerWeek: hours,
      apiKey,
      aiProvider: 'gemini',
      createdAt: new Date().toISOString(),
    };
    initGemini();
    if (apiKey) initClaude(apiKey);
    setUser(user);
  }

  const canNext = step === 0 ? name.trim().length >= 2 : step === 3 ? goals.length > 0 : true;
  const currentGoals = goalsByField[field] || goalsByField.both;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div className="absolute pointer-events-none"
        style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,168,62,0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      {/* Progress */}
      <div className="w-full max-w-2xl mb-6 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>STEP {step + 1} / {steps.length}</span>
          <span className="text-xs font-mono" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>{steps[step].toUpperCase()}</span>
        </div>
        <div className="progress-track" style={{ height: 3 }}>
          <div className="progress-fill-gold" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl relative z-10"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 16, boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }} className="p-8">

            {/* Step 0: Welcome */}
            {step === 0 && (
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                    style={{ background: 'linear-gradient(135deg,#E8A83E,#F5C75A)', boxShadow: '0 8px 24px rgba(232,168,62,0.3)' }}>📈</div>
                  <h1 className="text-3xl font-bold mb-2 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                    Welcome to<br /><span className="gradient-text-gold">FinanceMentor AI</span>
                  </h1>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Your personal AI tutor across Finance, Consulting, Quant, Tech, Real Estate, and more. Zero to hero — with real-world examples and a path built for you.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    '8 career tracks: Finance, Consulting, Quant, Tech, Real Estate & more',
                    'AI tutoring powered by Google Gemini (free) or Claude Opus',
                    'Real case studies: Goldman, McKinsey, Apple, Two Sigma, Airbnb',
                    'Exact career roadmaps: how to land Goldman, McKinsey, Google',
                    'From zero to interview-ready with real numbers and real deals',
                    'Interactive quizzes, skill tracker, and XP progression system',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl"
                      style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(0,196,180,0.15)', border: '1px solid rgba(0,196,180,0.25)' }}>
                        <Check size={10} color="var(--teal)" />
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>What should we call you?</label>
                <input className="input-field" placeholder="Your first name" value={name} onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && canNext && setStep(1)} autoFocus />
              </div>
            )}

            {/* Step 1: Background */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>Your Background</h2>
                <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>This calibrates complexity, examples, and tone.</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {backgroundOptions.map((opt) => (
                    <button key={opt.id} onClick={() => setBackground(opt.id as UserProfile['background'])}
                      className="p-3.5 rounded-xl text-left transition-all"
                      style={{ background: background === opt.id ? 'rgba(232,168,62,0.08)' : 'var(--bg-elevated)', border: `1px solid ${background === opt.id ? 'rgba(232,168,62,0.25)' : 'var(--border)'}` }}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold" style={{ color: background === opt.id ? 'var(--gold)' : 'var(--text-primary)' }}>{opt.label}</div>
                          <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{opt.desc}</div>
                        </div>
                        {background === opt.id && <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--gold)' }}><Check size={11} color="#060A13" /></div>}
                      </div>
                    </button>
                  ))}
                </div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Current knowledge level</label>
                <div className="grid grid-cols-3 gap-2">
                  {levelOptions.map((opt) => (
                    <button key={opt.id} onClick={() => setLevel(opt.id as UserProfile['level'])}
                      className="p-3 rounded-xl text-center transition-all"
                      style={{ background: level === opt.id ? 'rgba(232,168,62,0.08)' : 'var(--bg-elevated)', border: `1px solid ${level === opt.id ? 'rgba(232,168,62,0.25)' : 'var(--border)'}` }}>
                      <div className="text-xl mb-1">{opt.emoji}</div>
                      <div className="text-xs font-semibold" style={{ color: level === opt.id ? 'var(--gold)' : 'var(--text-secondary)' }}>{opt.label}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)', fontSize: 10 }}>{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Focus Field */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>Your Focus Area</h2>
                <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>Choose your primary track. All tracks share essential skills curriculum.</p>
                <div className="grid grid-cols-2 gap-2">
                  {fieldOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = field === opt.id;
                    return (
                      <button key={opt.id} onClick={() => selectField(opt.id as Field)}
                        className="p-3.5 rounded-xl text-left transition-all group"
                        style={{ background: isSelected ? opt.color + '10' : 'var(--bg-elevated)', border: `1px solid ${isSelected ? opt.color + '35' : 'var(--border)'}` }}>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: isSelected ? opt.color + '20' : 'var(--bg-card)', border: `1px solid ${isSelected ? opt.color + '30' : 'var(--border)'}` }}>
                            <Icon size={16} color={isSelected ? opt.color : 'var(--text-muted)'} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold mb-0.5" style={{ color: isSelected ? opt.color : 'var(--text-primary)' }}>{opt.label}</div>
                            <div className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)', fontSize: 11 }}>{opt.desc}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>Your Goals</h2>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Select all that apply — your AI tutor focuses on what matters most to you.</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {currentGoals.map((goal) => {
                    const selected = goals.includes(goal);
                    return (
                      <button key={goal} onClick={() => toggleGoal(goal)}
                        className="px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-all text-left"
                        style={{ background: selected ? 'rgba(232,168,62,0.08)' : 'var(--bg-elevated)', border: `1px solid ${selected ? 'rgba(232,168,62,0.25)' : 'var(--border)'}` }}>
                        <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                          style={{ background: selected ? 'var(--gold)' : 'transparent', border: `1.5px solid ${selected ? 'var(--gold)' : 'var(--border-light)'}` }}>
                          {selected && <Check size={10} color="#060A13" />}
                        </div>
                        <span className="text-xs leading-snug" style={{ color: selected ? 'var(--gold)' : 'var(--text-secondary)' }}>{goal}</span>
                      </button>
                    );
                  })}
                </div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Hours available per week</label>
                <div className="grid grid-cols-4 gap-2">
                  {hoursOptions.map((h) => (
                    <button key={h} onClick={() => setHours(h)}
                      className="py-2.5 rounded-xl text-center transition-all"
                      style={{ background: hours === h ? 'rgba(232,168,62,0.08)' : 'var(--bg-elevated)', border: `1px solid ${hours === h ? 'rgba(232,168,62,0.25)' : 'var(--border)'}` }}>
                      <div className="font-bold text-sm" style={{ color: hours === h ? 'var(--gold)' : 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{h}h</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>/ week</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: AI Setup */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>AI Tutor Setup</h2>
                <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>Gemini 2.0 Flash is built-in and free. Optionally add Claude Opus for a second AI perspective.</p>

                {/* Gemini (always available) */}
                <div className="p-4 rounded-xl mb-3"
                  style={{ background: 'rgba(66,133,244,0.06)', border: '1px solid rgba(66,133,244,0.2)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="live-dot" style={{ background: '#4285F4', boxShadow: '0 0 6px #4285F4' }} />
                    <span className="text-sm font-semibold" style={{ color: '#4285F4' }}>Gemini 2.0 Flash — Active & Free</span>
                    <span className="badge ml-auto" style={{ background: 'rgba(0,196,180,0.12)', color: 'var(--teal)', border: '1px solid rgba(0,196,180,0.2)' }}>NO KEY NEEDED</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {['Real-time AI tutoring on any topic', 'Personalized daily insights', 'Quiz generation', 'Topic explanations with real examples'].map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <Check size={10} color="var(--teal)" />{f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Claude (optional) */}
                <div className="p-4 rounded-xl mb-4"
                  style={{ background: 'rgba(232,168,62,0.04)', border: '1px solid rgba(232,168,62,0.15)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={14} color="var(--gold)" />
                    <span className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>Claude Opus 4 — Optional</span>
                    <span className="badge ml-auto" style={{ background: 'rgba(232,168,62,0.1)', color: 'var(--gold-dim)', border: '1px solid rgba(232,168,62,0.2)' }}>REQUIRES KEY</span>
                  </div>
                  <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                    A second AI perspective. More nuanced for complex financial analysis. Get your key at console.anthropic.com
                  </p>
                  <div className="relative">
                    <input type={showKey ? 'text' : 'password'} className="input-field pr-10"
                      placeholder="sk-ant-api03-..." value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
                    <button onClick={() => setShowKey(!showKey)} className="absolute right-3 top-1/2 -translate-y-1/2"
                      style={{ color: 'var(--text-muted)' }}>
                      {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Ready */}
            {step === 5 && (
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg,#E8A83E,#F5C75A)', boxShadow: '0 12px 32px rgba(232,168,62,0.35)' }}>🚀</div>
                <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                  You're set, {name}!
                </h2>
                <p className="text-sm mb-7" style={{ color: 'var(--text-secondary)' }}>
                  Your personalized learning path is ready. Gemini 2.0 Flash is active — start learning immediately.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-7 text-left">
                  {[
                    { label: 'Track', value: fieldOptions.find(f => f.id === field)?.label || field },
                    { label: 'Level', value: level.charAt(0).toUpperCase() + level.slice(1) },
                    { label: 'Study Time', value: `${hours} hrs/week` },
                    { label: 'AI Tutor', value: 'Gemini 2.0 Flash ✓' + (apiKey ? ' + Claude ✓' : '') },
                    { label: 'Goals Set', value: `${goals.length} goals` },
                    { label: 'Background', value: background.replace('-', ' ') },
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                      <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{item.label.toUpperCase()}</div>
                      <div className="text-sm font-semibold capitalize" style={{ color: 'var(--text-primary)' }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <button className="btn-gold w-full py-3 text-base" onClick={handleFinish}>
                  Enter FinanceMentor →
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {step < 5 && (
          <div className="flex items-center justify-between px-8 py-4 border-t" style={{ borderColor: 'var(--border)' }}>
            {step > 0
              ? <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}><ChevronLeft size={16} />Back</button>
              : <div />}
            <button onClick={() => setStep(step + 1)} disabled={!canNext}
              className="btn-gold flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
              {step === 4 ? (apiKey ? 'Connect & Continue' : 'Skip — Use Gemini') : 'Continue'}
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>

      {/* Ticker */}
      <div className="fixed bottom-0 left-0 right-0 py-2 border-t ticker-tape"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="ticker-inner">
          {Array(2).fill(['Goldman Sachs', 'McKinsey & Company', 'Two Sigma', 'Google', 'Blackstone', 'Citadel', 'Jane Street', 'BCG', 'Andreessen Horowitz', 'Morgan Stanley', 'Bain & Company', 'DE Shaw', 'Amazon', 'Sequoia Capital', 'JP Morgan', 'Bridgewater']).flat().map((f, i) => (
            <span key={i} className="mx-8 text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>◆ {f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
