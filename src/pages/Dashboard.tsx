import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Briefcase, Zap, Clock, Target, ChevronRight, ArrowUpRight, Lightbulb, BarChart3 } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { geminiGenerateInsight } from '../lib/gemini';
import { curriculum } from '../data/curriculum';
import { caseStudies } from '../data/caseStudies';

import type { UserProgress, UserProfile } from '../types';

const quickStats = (progress: UserProgress, user: UserProfile) => [
  {
    label: 'Topics Completed',
    value: progress.completedTopics.length,
    total: curriculum.reduce((acc, m) => acc + m.topics.length, 0),
    icon: BookOpen,
    color: 'var(--gold)',
    bg: 'rgba(232,168,62,0.08)',
    border: 'rgba(232,168,62,0.15)',
  },
  {
    label: 'Cases Solved',
    value: progress.completedCases.length,
    total: caseStudies.length,
    icon: Briefcase,
    color: '#3D6FE8',
    bg: 'rgba(61,111,232,0.08)',
    border: 'rgba(61,111,232,0.15)',
  },
  {
    label: 'Study Hours',
    value: progress.totalHoursStudied,
    total: user.hoursPerWeek * 52,
    icon: Clock,
    color: 'var(--teal)',
    bg: 'rgba(0,196,180,0.08)',
    border: 'rgba(0,196,180,0.15)',
  },
  {
    label: 'Total XP',
    value: progress.xp,
    total: null,
    icon: Zap,
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.15)',
  },
];

const quickActions = [
  { label: 'Continue Learning', desc: 'Pick up where you left off', to: '/learn', icon: BookOpen, color: 'var(--gold)' },
  { label: 'Solve a Case', desc: 'Practice real-world scenarios', to: '/cases', icon: Briefcase, color: '#3D6FE8' },
  { label: 'Career Paths', desc: 'Explore opportunities', to: '/opportunities', icon: Target, color: '#8B5CF6' },
  { label: 'Skills Tracker', desc: 'Track your progress', to: '/skills', icon: BarChart3, color: 'var(--teal)' },
];

export default function Dashboard() {
  const { user, progress } = useAppStore();
  const navigate = useNavigate();
  const [insight, setInsight] = useState('');
  const [insightLoading, setInsightLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setInsightLoading(true);
    geminiGenerateInsight(user, progress)
      .then((text) => {
        setInsight(text);
        setInsightLoading(false);
      })
      .catch(() => {
        setInsight("The best investment you can make is in yourself. Every hour studying finance compounds more than any market return.");
        setInsightLoading(false);
      });
  }, []);

  if (!user) return null;

  const stats = quickStats(progress, user);
  const level = Math.floor(progress.xp / 500) + 1;
  const recentModules = curriculum
    .filter((m) => m.track === user.field || user.field === 'both' || m.track === 'skills')
    .slice(0, 4);

  const allTopics = curriculum.reduce((acc, m) => acc + m.topics.length, 0);
  const completionPct = allTopics > 0 ? Math.round((progress.completedTopics.length / allTopics) * 100) : 0;

  return (
    <div className="p-8 max-w-6xl" style={{ animation: 'fadeUp 0.4s ease-out' }}>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="section-label mb-1">DASHBOARD</div>
            <h1 className="text-3xl font-bold leading-tight mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'},{' '}
              <span className="gradient-text-gold">{user.name}</span>
            </h1>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {completionPct}% of your {user.field} curriculum complete · Level {level} · {progress.xp} XP
            </p>
          </div>
          <div
            className="px-3 py-1.5 rounded-lg flex items-center gap-2"
            style={{ background: 'rgba(0,196,180,0.08)', border: '1px solid rgba(0,196,180,0.15)' }}
          >
            <div className="live-dot" />
            <span className="text-xs font-mono" style={{ color: 'var(--teal)', fontFamily: 'var(--font-mono)' }}>
              AI ONLINE
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          const pct = stat.total ? Math.min(100, Math.round((stat.value / stat.total) * 100)) : null;
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
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${stat.border}` }}
                >
                  <Icon size={15} color={stat.color} />
                </div>
                {pct !== null && (
                  <span className="text-xs font-mono" style={{ color: stat.color, fontFamily: 'var(--font-mono)' }}>
                    {pct}%
                  </span>
                )}
              </div>
              <div className="stat-number text-2xl mb-0.5" style={{ color: stat.color }}>
                {stat.value.toLocaleString()}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              {pct !== null && (
                <div className="progress-track mt-2.5">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${pct}%`,
                      background: stat.color,
                      boxShadow: `0 0 8px ${stat.color}60`,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Main grid: Insight + Quick actions */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        {/* Daily insight */}
        <div
          className="col-span-2 p-5 rounded-xl"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={15} color="var(--gold)" />
            <span className="section-label" style={{ color: 'var(--gold)' }}>TODAY'S INSIGHT</span>
            <div className="live-dot-gold ml-1" />
          </div>
          {insightLoading ? (
            <div className="space-y-2">
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-4/5" />
              <div className="skeleton h-4 w-3/5" />
            </div>
          ) : (
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {insight}
            </p>
          )}
          <div className="mt-4 pt-3 flex items-center gap-2 border-t" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={() => navigate('/learn')}
              className="btn-ghost text-xs flex items-center gap-1.5 py-1.5 px-3"
            >
              <BookOpen size={12} />
              Explore curriculum
            </button>
          </div>
        </div>

        {/* Level card */}
        <div
          className="p-5 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(232,168,62,0.08), rgba(232,168,62,0.03))',
            border: '1px solid rgba(232,168,62,0.2)',
          }}
        >
          <div className="section-label mb-3" style={{ color: 'var(--gold)' }}>YOUR PROGRESS</div>
          <div className="text-5xl font-bold mb-1 font-mono" style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)' }}>
            {level}
          </div>
          <div className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Current Level</div>
          <div className="space-y-2">
            {[
              { label: 'Overall', pct: completionPct, color: 'var(--gold)' },
              { label: 'Cases', pct: Math.round((progress.completedCases.length / Math.max(caseStudies.length, 1)) * 100), color: '#3D6FE8' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{item.label}</span>
                  <span style={{ color: item.color, fontFamily: 'var(--font-mono)' }}>{item.pct}%</span>
                </div>
                <div className="progress-track">
                  <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/skills')}
            className="mt-4 w-full btn-ghost text-xs py-1.5 flex items-center justify-center gap-1.5"
          >
            View skill tree
            <ArrowUpRight size={12} />
          </button>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {quickActions.map((action, i) => {
          const Icon = action.icon;
          return (
            <button
              key={action.to}
              onClick={() => navigate(action.to)}
              className="p-4 rounded-xl text-left group transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                animation: `fadeUp 0.4s ease-out ${0.2 + i * 0.07}s both`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = action.color + '40';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: action.color + '15', border: `1px solid ${action.color}25` }}
              >
                <Icon size={16} color={action.color} />
              </div>
              <div className="text-sm font-semibold mb-0.5 flex items-center gap-1" style={{ color: 'var(--text-primary)' }}>
                {action.label}
                <ChevronRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: action.color }} />
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{action.desc}</div>
            </button>
          );
        })}
      </div>

      {/* Curriculum overview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="section-label mb-0.5">LEARNING PATH</div>
              <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Recommended Modules</h3>
            </div>
            <button
              onClick={() => navigate('/learn')}
              className="text-xs flex items-center gap-1"
              style={{ color: 'var(--gold)' }}
            >
              View all <ArrowUpRight size={12} />
            </button>
          </div>
          <div className="space-y-3">
            {recentModules.map((module) => {
              const completedInModule = module.topics.filter((t) =>
                progress.completedTopics.includes(t.id)
              ).length;
              const pct = Math.round((completedInModule / module.topics.length) * 100);
              const trackColors: Record<string, string> = { finance: 'var(--gold)', consulting: '#8B5CF6', skills: 'var(--teal)', quant: '#3D6FE8', tech: '#00C4B4', realestate: '#F97316', entrepreneurship: '#E85D5D', economics: '#10B981', law: '#6D3B8C' };
              const trackColor = trackColors[module.track];
              return (
                <button
                  key={module.id}
                  onClick={() => navigate('/learn')}
                  className="w-full text-left p-3 rounded-xl flex items-center gap-3 group transition-all"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = trackColor + '30';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: trackColor + '15', border: `1px solid ${trackColor}20` }}
                  >
                    {module.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                        {module.title}
                      </span>
                      <span className="text-xs ml-2 flex-shrink-0" style={{ color: trackColor, fontFamily: 'var(--font-mono)' }}>
                        {pct}%
                      </span>
                    </div>
                    <div className="progress-track" style={{ height: 3 }}>
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: trackColor }} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent case studies */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="section-label mb-0.5">CASE LIBRARY</div>
              <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Featured Cases</h3>
            </div>
            <button
              onClick={() => navigate('/cases')}
              className="text-xs flex items-center gap-1"
              style={{ color: '#3D6FE8' }}
            >
              View all <ArrowUpRight size={12} />
            </button>
          </div>
          <div className="space-y-3">
            {caseStudies.slice(0, 4).map((c) => {
              const isCompleted = progress.completedCases.includes(c.id);
              const diffColors = { easy: 'var(--teal)', medium: 'var(--gold)', hard: '#E85D5D' };
              return (
                <button
                  key={c.id}
                  onClick={() => navigate('/cases')}
                  className="w-full text-left p-3 rounded-xl group transition-all"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-medium leading-tight mb-1" style={{ color: isCompleted ? 'var(--teal)' : 'var(--text-primary)' }}>
                        {c.title}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="badge badge-blue">{c.type.toUpperCase()}</span>
                        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.year}</span>
                        {c.dealSize && (
                          <span className="text-xs font-mono" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>
                            {c.dealSize}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className="badge flex-shrink-0"
                      style={{
                        background: diffColors[c.difficulty] + '15',
                        color: diffColors[c.difficulty],
                        border: `1px solid ${diffColors[c.difficulty]}30`,
                      }}
                    >
                      {c.difficulty}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skill highlights */}
      <div className="card p-5 mt-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="section-label mb-0.5">SKILL RADAR</div>
            <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Core Competencies</h3>
          </div>
          <button onClick={() => navigate('/skills')} className="text-xs" style={{ color: 'var(--teal)' }}>
            Update skills →
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {Object.entries(progress.skills).slice(0, 8).map(([skill, level]) => (
            <div key={skill}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>{skill}</span>
                <span className="text-xs font-mono ml-1 flex-shrink-0" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>
                  {level}%
                </span>
              </div>
              <div className="progress-track" style={{ height: 5 }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${level}%`,
                    background: `linear-gradient(90deg, var(--gold-dim), var(--gold-bright))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
