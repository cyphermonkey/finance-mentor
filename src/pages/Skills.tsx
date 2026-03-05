import { useState } from 'react';
import { BarChart3, TrendingUp, Award, Zap, Edit3, Check } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { curriculum } from '../data/curriculum';

const skillCategories = {
  'Finance Core': ['Financial Modeling', 'Valuation', 'Accounting', 'Python'],
  'Consulting Core': ['Case Interviews', 'Strategy', 'Communication'],
  'Tools': ['Excel'],
};

const skillDescriptions: Record<string, { desc: string; color: string; resources: string[] }> = {
  'Financial Modeling': {
    desc: '3-statement models, DCF, LBO, M&A — the core quantitative skill of investment banking and PE',
    color: 'var(--gold)',
    resources: ['Build a 3-statement model from scratch', 'Complete a DCF on a real company', 'Build an LBO model'],
  },
  'Valuation': {
    desc: 'DCF, comparable company analysis, precedent transactions — how bankers and analysts price companies',
    color: '#F97316',
    resources: ['Value Apple using all three methods', 'Build a merger model', 'Analyze a PE deal thesis'],
  },
  'Accounting': {
    desc: 'Income statement, balance sheet, cash flow — the language of every financial analysis',
    color: '#3D6FE8',
    resources: ['Read three 10-K annual reports', 'Reconstruct Apple\'s cash flow statement', 'Do ratio analysis on two competitors'],
  },
  'Excel': {
    desc: 'The universal tool of finance — from basic formulas to complex financial models',
    color: 'var(--teal)',
    resources: ['Complete a modeling challenge without mouse', 'Build a dynamic dashboard', 'Master VLOOKUP, INDEX/MATCH, SUMIF'],
  },
  'Case Interviews': {
    desc: 'McKinsey, BCG, Bain case methodology — profitability, market entry, strategy cases',
    color: '#8B5CF6',
    resources: ['Complete 10 practice cases with a partner', 'Master the profitability framework', 'Record yourself solving a case'],
  },
  'Strategy': {
    desc: 'Competitive strategy, moats, growth frameworks — how top executives and consultants think',
    color: '#E85D5D',
    resources: ['Write a competitive analysis of Netflix vs. Disney', 'Apply Porter\'s 5 Forces to 3 industries', 'Develop a market entry strategy'],
  },
  'Communication': {
    desc: 'Pyramid Principle, executive presentations, slide writing — how to communicate like a McKinsey partner',
    color: '#06B6D4',
    resources: ['Write a one-page executive summary', 'Build a 5-slide board presentation', 'Practice "So what?" discipline for 30 days'],
  },
  'Python': {
    desc: 'Python for financial analysis, data manipulation, and quantitative modeling',
    color: '#10B981',
    resources: ['Analyze stock returns with pandas', 'Build a simple DCF model in Python', 'Create a portfolio backtester'],
  },
};

const levelLabels = ['None', 'Learning', 'Developing', 'Proficient', 'Advanced', 'Expert'];

export default function Skills() {
  const { progress, updateSkill } = useAppStore();
  const [editMode, setEditMode] = useState<string | null>(null);
  const [tempLevel, setTempLevel] = useState(0);

  const totalTopics = curriculum.reduce((acc, m) => acc + m.topics.length, 0);
  const completedPct = totalTopics > 0 ? Math.round((progress.completedTopics.length / totalTopics) * 100) : 0;

  const level = Math.floor(progress.xp / 500) + 1;
  const xpInLevel = progress.xp % 500;

  function startEdit(skill: string) {
    setEditMode(skill);
    setTempLevel(progress.skills[skill] || 0);
  }

  function saveSkill(skill: string) {
    updateSkill(skill, tempLevel);
    setEditMode(null);
  }

  const avgSkill = Math.round(
    Object.values(progress.skills).reduce((a, b) => a + b, 0) / Object.keys(progress.skills).length
  );

  return (
    <div className="p-8 max-w-5xl" style={{ animation: 'fadeUp 0.4s ease-out' }}>

      {/* Header */}
      <div className="mb-8">
        <div className="section-label mb-1">SKILLS TRACKER</div>
        <h1
          className="text-3xl font-bold mb-1"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          Your Skill Profile
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Track and self-assess your skills. Update as you learn — your AI tutor adapts to your actual level.
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Current Level', value: `Lv.${level}`, icon: Award, color: 'var(--gold)', bg: 'rgba(232,168,62,0.08)', border: 'rgba(232,168,62,0.15)' },
          { label: 'Total XP', value: progress.xp.toLocaleString(), icon: Zap, color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.15)' },
          { label: 'Avg Skill Level', value: `${avgSkill}%`, icon: BarChart3, color: 'var(--teal)', bg: 'rgba(0,196,180,0.08)', border: 'rgba(0,196,180,0.15)' },
          { label: 'Curriculum Done', value: `${completedPct}%`, icon: TrendingUp, color: '#3D6FE8', bg: 'rgba(61,111,232,0.08)', border: 'rgba(61,111,232,0.15)' },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-4 rounded-xl"
              style={{
                background: stat.bg,
                border: `1px solid ${stat.border}`,
                animation: `fadeUp 0.4s ease-out ${i * 0.07}s both`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.3)' }}
                >
                  <Icon size={14} color={stat.color} />
                </div>
              </div>
              <div className="stat-number text-2xl mb-0.5" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* XP Progress */}
      <div
        className="p-5 rounded-xl mb-8"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="section-label mb-0.5" style={{ color: 'var(--gold)' }}>LEVEL PROGRESSION</div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Level {level} → Level {level + 1}
            </p>
          </div>
          <div className="text-right">
            <div className="stat-number text-xl" style={{ color: 'var(--gold)' }}>{xpInLevel}</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>/ 500 XP</div>
          </div>
        </div>
        <div className="progress-track" style={{ height: 8 }}>
          <div
            className="progress-fill-gold"
            style={{ width: `${(xpInLevel / 500) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>+50 XP per topic · +150 XP per case · +200 XP per module</span>
        </div>
      </div>

      {/* Skills by category */}
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-6">
          <div className="section-label mb-3">{category.toUpperCase()}</div>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => {
              const level = progress.skills[skill] || 0;
              const info = skillDescriptions[skill];
              const isEditing = editMode === skill;

              return (
                <div
                  key={skill}
                  className="p-4 rounded-xl"
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${isEditing ? info.color + '30' : 'var(--border)'}`,
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                        {skill}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {info?.desc}
                      </p>
                    </div>
                    {isEditing ? (
                      <button
                        onClick={() => saveSkill(skill)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ml-3"
                        style={{ background: 'rgba(0,196,180,0.15)', border: '1px solid rgba(0,196,180,0.25)' }}
                      >
                        <Check size={13} color="var(--teal)" />
                      </button>
                    ) : (
                      <button
                        onClick={() => startEdit(skill)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ml-3 opacity-0 group-hover:opacity-100 btn-icon"
                        style={{ opacity: 0.5 }}
                      >
                        <Edit3 size={13} />
                      </button>
                    )}
                  </div>

                  {/* Level bar */}
                  {isEditing ? (
                    <div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        step={5}
                        value={tempLevel}
                        onChange={(e) => setTempLevel(Number(e.target.value))}
                        style={{
                          width: '100%',
                          accentColor: info?.color || 'var(--gold)',
                          marginBottom: 4,
                        }}
                      />
                      <div className="flex justify-between text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                        <span style={{ color: 'var(--text-muted)' }}>0%</span>
                        <span style={{ color: info?.color || 'var(--gold)' }}>
                          {tempLevel}% — {levelLabels[Math.round(tempLevel / 20)]}
                        </span>
                        <span style={{ color: 'var(--text-muted)' }}>100%</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          {levelLabels[Math.round(level / 20)] || 'None'}
                        </span>
                        <span
                          className="text-xs font-bold"
                          style={{ color: info?.color || 'var(--gold)', fontFamily: 'var(--font-mono)' }}
                        >
                          {level}%
                        </span>
                      </div>
                      <div className="progress-track" style={{ height: 6 }}>
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${level}%`,
                            background: info?.color || 'var(--gold)',
                            boxShadow: level > 0 ? `0 0 8px ${info?.color || 'var(--gold)'}50` : 'none',
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Resources */}
                  {info?.resources && !isEditing && (
                    <div className="mt-3 space-y-1">
                      {info.resources.map((r, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: level >= (i + 1) * 33 ? info.color : 'var(--border-light)' }}
                          />
                          {r}
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => startEdit(skill)}
                    className="mt-3 text-xs flex items-center gap-1.5"
                    style={{ color: info?.color || 'var(--gold)', opacity: 0.7 }}
                  >
                    <Edit3 size={11} />
                    Update level
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Completion milestones */}
      <div className="card p-5">
        <div className="section-label mb-3" style={{ color: 'var(--gold)' }}>ACHIEVEMENT MILESTONES</div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'First Topic', icon: '🌱', xp: 50, done: progress.xp >= 50 },
            { label: 'First Module', icon: '📚', xp: 200, done: progress.completedModules.length >= 1 },
            { label: 'First Case', icon: '📋', xp: 150, done: progress.completedCases.length >= 1 },
            { label: 'Level 3', icon: '⭐', xp: 1000, done: progress.xp >= 1000 },
            { label: '5 Cases Solved', icon: '🏆', xp: 750, done: progress.completedCases.length >= 5 },
            { label: 'All Finance', icon: '💰', xp: 2000, done: progress.completedModules.includes('fin-accounting') && progress.completedModules.includes('fin-valuation') },
          ].map((m) => (
            <div
              key={m.label}
              className="p-3 rounded-xl flex items-center gap-3"
              style={{
                background: m.done ? 'rgba(0,196,180,0.08)' : 'var(--bg-elevated)',
                border: `1px solid ${m.done ? 'rgba(0,196,180,0.2)' : 'var(--border)'}`,
                opacity: m.done ? 1 : 0.6,
              }}
            >
              <span className="text-xl">{m.icon}</span>
              <div>
                <div className="text-xs font-semibold" style={{ color: m.done ? 'var(--teal)' : 'var(--text-secondary)' }}>
                  {m.label}
                </div>
                <div className="text-xs font-mono" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {m.xp} XP
                </div>
              </div>
              {m.done && (
                <div className="ml-auto">
                  <Check size={14} color="var(--teal)" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
