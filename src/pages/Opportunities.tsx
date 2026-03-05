import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Users, Building2, Clock, DollarSign, ChevronRight, Star } from 'lucide-react';
import { careerPaths } from '../data/careerPaths';
import type { CareerPath } from '../types';

const fieldColors: Record<string, string> = { finance: 'var(--gold)', consulting: '#8B5CF6', quant: '#3D6FE8', tech: 'var(--teal)', realestate: '#F97316', entrepreneurship: '#E85D5D', economics: '#10B981', law: '#6D3B8C', both: '#6366F1', all: 'var(--gold)' };

const sections = [
  { key: 'description', label: 'Overview' },
  { key: 'dayInLife', label: 'Day in Life' },
  { key: 'howToBreakIn', label: 'Break In' },
  { key: 'interviewTips', label: 'Interview Tips' },
];

export default function Opportunities() {
  const [activePath, setActivePath] = useState<CareerPath | null>(null);
  const [activeSection, setActiveSection] = useState('description');
  const [filterField, setFilterField] = useState<string | null>(null);

  const filtered = filterField ? careerPaths.filter((p) => p.field === filterField || p.field === 'both') : careerPaths;

  return (
    <div className="flex h-full" style={{ animation: 'fadeUp 0.4s ease-out' }}>

      {/* Left: career list */}
      <div
        style={{
          width: activePath ? '360px' : '100%',
          minWidth: activePath ? '360px' : undefined,
          borderRight: activePath ? '1px solid var(--border)' : 'none',
          transition: 'width 0.3s ease',
        }}
        className="flex flex-col"
      >
        <div className="px-6 py-6 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="section-label mb-1">OPPORTUNITIES</div>
          <h1
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Career Paths
          </h1>
          <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
            Detailed guides to every major career in Finance and Consulting — salaries, requirements, and exactly how to get in.
          </p>

          <div className="flex gap-2">
            {[
              { id: null, label: 'All' },
              { id: 'finance', label: 'Finance' },
              { id: 'consulting', label: 'Consulting' },
            ].map((f) => (
              <button
                key={String(f.id)}
                onClick={() => setFilterField(f.id)}
                className="badge cursor-pointer transition-all"
                style={filterField === f.id
                  ? { background: 'rgba(232,168,62,0.15)', color: 'var(--gold)', border: '1px solid rgba(232,168,62,0.3)' }
                  : { background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border)' }
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {filtered.map((path) => {
            const color = fieldColors[path.field];
            const isActive = activePath?.id === path.id;

            return (
              <button
                key={path.id}
                onClick={() => { setActivePath(path); setActiveSection('description'); }}
                className="w-full text-left p-4 rounded-xl transition-all group"
                style={{
                  background: isActive ? 'var(--bg-elevated)' : 'var(--bg-card)',
                  border: `1px solid ${isActive ? color + '40' : 'var(--border)'}`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="badge capitalize"
                        style={{ background: color + '12', color: color, border: `1px solid ${color}25` }}
                      >
                        {path.field}
                      </span>
                    </div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ color: isActive ? color : 'var(--text-primary)' }}
                    >
                      {path.title}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {path.description.slice(0, 75)}...
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <DollarSign size={11} color="var(--gold)" />
                      <span className="text-xs font-mono" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>
                        {path.salaryRange.split('→')[0].trim()}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    color={isActive ? color : 'var(--text-muted)'}
                    className="flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform"
                  />
                </div>

                {/* Top firms */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {path.topFirms.slice(0, 4).map((firm) => (
                    <span
                      key={firm}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                    >
                      {firm}
                    </span>
                  ))}
                  {path.topFirms.length > 4 && (
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>+{path.topFirms.length - 4} more</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: career detail */}
      <AnimatePresence>
        {activePath && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div
              className="px-6 py-5 border-b flex-shrink-0"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="badge capitalize"
                      style={{
                        background: fieldColors[activePath.field] + '15',
                        color: fieldColors[activePath.field],
                        border: `1px solid ${fieldColors[activePath.field]}25`,
                      }}
                    >
                      {activePath.field}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                  >
                    {activePath.title}
                  </h2>
                </div>
                <button className="btn-icon ml-4" onClick={() => setActivePath(null)}>
                  <X size={16} />
                </button>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: DollarSign, label: 'Salary Range', value: activePath.salaryRange, color: 'var(--gold)' },
                  { icon: Clock, label: 'Career Timeline', value: activePath.timeline.split('→')[0].trim() + '...', color: '#3D6FE8' },
                  { icon: Building2, label: 'Top Firms', value: activePath.topFirms.slice(0, 2).join(', '), color: 'var(--teal)' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-3 rounded-xl"
                      style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon size={12} color={item.color} />
                        <span className="section-label text-xs" style={{ color: 'var(--text-muted)' }}>{item.label.toUpperCase()}</span>
                      </div>
                      <p className="text-xs font-medium leading-tight" style={{ color: item.color }}>{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section nav */}
            <div
              className="flex gap-0 border-b px-6 flex-shrink-0"
              style={{ borderColor: 'var(--border)' }}
            >
              {sections.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className="px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-all"
                  style={{
                    borderColor: activeSection === key ? fieldColors[activePath.field] : 'transparent',
                    color: activeSection === key ? fieldColors[activePath.field] : 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {label.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeSection === 'description' && (
                      <div className="space-y-5">
                        <div>
                          <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                            {activePath.description}
                          </p>
                        </div>

                        <div>
                          <div className="section-label mb-3">REQUIRED SKILLS</div>
                          <div className="flex flex-wrap gap-2">
                            {activePath.requiredSkills.map((skill) => (
                              <span
                                key={skill}
                                className="badge"
                                style={{
                                  background: fieldColors[activePath.field] + '10',
                                  color: fieldColors[activePath.field],
                                  border: `1px solid ${fieldColors[activePath.field]}20`,
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="section-label mb-3">CAREER TIMELINE</div>
                          <div
                            className="p-4 rounded-xl text-sm"
                            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                          >
                            {activePath.timeline}
                          </div>
                        </div>

                        <div>
                          <div className="section-label mb-3">TOP FIRMS</div>
                          <div className="flex flex-wrap gap-2">
                            {activePath.topFirms.map((firm) => (
                              <div
                                key={firm}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
                                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                              >
                                <Star size={11} color="var(--gold)" />
                                <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{firm}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === 'dayInLife' && (
                      <div>
                        <div className="section-label mb-3">A DAY IN THE LIFE</div>
                        <div
                          className="p-5 rounded-xl text-sm leading-relaxed"
                          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                        >
                          {activePath.dayInLife}
                        </div>
                      </div>
                    )}

                    {activeSection === 'howToBreakIn' && (
                      <div>
                        <div className="section-label mb-3">HOW TO BREAK IN</div>
                        <div className="space-y-3">
                          {activePath.howToBreakIn.map((tip, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-4 rounded-xl"
                              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                            >
                              <div
                                className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                                style={{ background: fieldColors[activePath.field] + '20', color: fieldColors[activePath.field], fontFamily: 'var(--font-mono)' }}
                              >
                                {i + 1}
                              </div>
                              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection === 'interviewTips' && (
                      <div>
                        <div className="section-label mb-3">INTERVIEW PREPARATION</div>
                        <div className="space-y-3">
                          {activePath.interviewTips.map((tip, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-4 rounded-xl"
                              style={{
                                background: 'rgba(232,168,62,0.04)',
                                border: '1px solid rgba(232,168,62,0.12)',
                              }}
                            >
                              <TrendingUp size={14} color="var(--gold)" className="flex-shrink-0 mt-0.5" />
                              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!activePath && (
        <div className="flex-1 flex items-center justify-center" style={{ background: 'var(--bg-base)' }}>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>
              Select a career path
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Detailed breakdowns of salaries, required skills, and how to land the role
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
