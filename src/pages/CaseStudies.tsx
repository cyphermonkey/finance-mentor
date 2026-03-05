import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Briefcase, TrendingUp, CheckCircle2, Filter } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useAppStore } from '../store/appStore';
import { caseStudies } from '../data/caseStudies';
import type { CaseStudy } from '../types';

const typeLabels: Record<string, string> = {
  ma: 'M&A',
  ipo: 'IPO',
  turnaround: 'Turnaround',
  strategy: 'Strategy',
  consulting: 'Consulting',
  valuation: 'Valuation',
};

const typeColors: Record<string, string> = {
  ma: '#3D6FE8',
  ipo: '#8B5CF6',
  turnaround: '#E85D5D',
  strategy: 'var(--gold)',
  consulting: 'var(--teal)',
  valuation: '#F97316',
};

const diffColors = { easy: 'var(--teal)', medium: 'var(--gold)', hard: '#E85D5D' };

const sections: { key: keyof CaseStudy; label: string }[] = [
  { key: 'background', label: 'Background' },
  { key: 'keyQuestion', label: 'The Question' },
  { key: 'framework', label: 'Framework' },
  { key: 'analysis', label: 'Deep Analysis' },
  { key: 'solution', label: 'Solution & Results' },
  { key: 'keyLessons', label: 'Key Lessons' },
];

export default function CaseStudies() {
  const { progress, completeCaseId } = useAppStore();
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [activeSection, setActiveSection] = useState<string>('background');
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterDiff, setFilterDiff] = useState<string | null>(null);

  const filtered = caseStudies.filter((c) => {
    if (filterType && c.type !== filterType) return false;
    if (filterDiff && c.difficulty !== filterDiff) return false;
    return true;
  });

  function openCase(c: CaseStudy) {
    setActiveCase(c);
    setActiveSection('background');
  }

  return (
    <div className="flex h-full" style={{ animation: 'fadeUp 0.4s ease-out' }}>

      {/* Left: case list */}
      <div
        style={{
          width: activeCase ? '380px' : '100%',
          minWidth: activeCase ? '380px' : undefined,
          borderRight: activeCase ? '1px solid var(--border)' : 'none',
          transition: 'width 0.3s ease',
        }}
        className="flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-6 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="section-label mb-1">CASE LIBRARY</div>
          <h1
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Real-World Case Studies
          </h1>
          <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
            {progress.completedCases.length}/{caseStudies.length} solved · Learn from the world's greatest business decisions
          </p>

          {/* Filters */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={12} color="var(--text-muted)" />
              <button
                onClick={() => setFilterType(null)}
                className="badge cursor-pointer transition-all"
                style={!filterType ? { background: 'rgba(232,168,62,0.15)', color: 'var(--gold)', border: '1px solid rgba(232,168,62,0.3)' } : {}}
              >
                ALL
              </button>
              {Object.entries(typeLabels).map(([type, label]) => (
                <button
                  key={type}
                  onClick={() => setFilterType(filterType === type ? null : type)}
                  className="badge cursor-pointer transition-all"
                  style={filterType === type
                    ? { background: typeColors[type] + '20', color: typeColors[type], border: `1px solid ${typeColors[type]}40` }
                    : { background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border)' }
                  }
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {(['easy', 'medium', 'hard'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setFilterDiff(filterDiff === d ? null : d)}
                  className="badge cursor-pointer capitalize transition-all"
                  style={filterDiff === d
                    ? { background: diffColors[d] + '15', color: diffColors[d], border: `1px solid ${diffColors[d]}30` }
                    : { background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border)' }
                  }
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case cards */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {filtered.map((c) => {
            const isCompleted = progress.completedCases.includes(c.id);
            const isActive = activeCase?.id === c.id;
            const typeColor = typeColors[c.type];

            return (
              <button
                key={c.id}
                onClick={() => openCase(c)}
                className="w-full text-left p-4 rounded-xl transition-all duration-150 group"
                style={{
                  background: isActive ? 'var(--bg-elevated)' : 'var(--bg-card)',
                  border: `1px solid ${isActive ? typeColor + '40' : isCompleted ? 'rgba(0,196,180,0.2)' : 'var(--border)'}`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="badge"
                        style={{ background: typeColor + '15', color: typeColor, border: `1px solid ${typeColor}25` }}
                      >
                        {typeLabels[c.type]}
                      </span>
                      {c.dealSize && (
                        <span className="text-xs font-mono font-bold" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>
                          {c.dealSize}
                        </span>
                      )}
                      <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {c.year}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold mb-0.5 group-hover:text-white transition-colors" style={{ color: isCompleted ? 'var(--teal)' : 'var(--text-primary)' }}>
                      {c.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {c.description.slice(0, 80)}...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.company}</span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>·</span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.industry}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span
                      className="badge"
                      style={{
                        background: diffColors[c.difficulty] + '12',
                        color: diffColors[c.difficulty],
                        border: `1px solid ${diffColors[c.difficulty]}25`,
                      }}
                    >
                      {c.difficulty}
                    </span>
                    {isCompleted
                      ? <CheckCircle2 size={16} color="var(--teal)" />
                      : <ChevronRight size={16} color="var(--text-muted)" className="group-hover:text-white transition-colors" />
                    }
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {c.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: case reader */}
      <AnimatePresence>
        {activeCase && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            {/* Case header */}
            <div
              className="px-6 py-5 border-b flex-shrink-0"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="badge"
                      style={{
                        background: typeColors[activeCase.type] + '15',
                        color: typeColors[activeCase.type],
                        border: `1px solid ${typeColors[activeCase.type]}25`,
                      }}
                    >
                      {typeLabels[activeCase.type]}
                    </span>
                    <span
                      className="badge"
                      style={{
                        background: diffColors[activeCase.difficulty] + '12',
                        color: diffColors[activeCase.difficulty],
                        border: `1px solid ${diffColors[activeCase.difficulty]}25`,
                      }}
                    >
                      {activeCase.difficulty.toUpperCase()}
                    </span>
                    {activeCase.dealSize && (
                      <span className="text-sm font-bold font-mono" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>
                        {activeCase.dealSize}
                      </span>
                    )}
                    <span className="text-sm font-mono" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {activeCase.year}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                  >
                    {activeCase.title}
                  </h2>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {activeCase.company} · {activeCase.industry}
                  </p>
                </div>
                <button className="btn-icon ml-4" onClick={() => setActiveCase(null)}>
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Section nav */}
            <div
              className="flex gap-0 border-b px-6 overflow-x-auto flex-shrink-0"
              style={{ borderColor: 'var(--border)' }}
            >
              {sections.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className="px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-all"
                  style={{
                    borderColor: activeSection === key ? typeColors[activeCase.type] : 'transparent',
                    color: activeSection === key ? typeColors[activeCase.type] : 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {label.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Section content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeSection === 'keyLessons' ? (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp size={15} color="var(--gold)" />
                          <span className="section-label" style={{ color: 'var(--gold)' }}>KEY LESSONS</span>
                        </div>
                        <div className="space-y-3">
                          {activeCase.keyLessons.map((lesson, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-4 rounded-xl"
                              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                            >
                              <div
                                className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                                style={{ background: 'rgba(232,168,62,0.15)', color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}
                              >
                                {i + 1}
                              </div>
                              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{lesson}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="prose-finance">
                        <ReactMarkdown>{String(activeCase[activeSection.replace('keyQuestion', 'keyQuestion') as keyof CaseStudy] || '')}</ReactMarkdown>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Footer */}
            <div
              className="px-6 py-4 border-t flex items-center justify-between flex-shrink-0"
              style={{ borderColor: 'var(--border)' }}
            >
              {progress.completedCases.includes(activeCase.id) ? (
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} color="var(--teal)" />
                  <span className="text-sm" style={{ color: 'var(--teal)' }}>Case Completed (+150 XP)</span>
                </div>
              ) : (
                <button
                  onClick={() => completeCaseId(activeCase.id)}
                  className="btn-gold flex items-center gap-2"
                >
                  <Briefcase size={14} />
                  Mark Case Complete (+150 XP)
                </button>
              )}
              <div className="flex gap-2">
                {activeSection !== sections[sections.length - 1].key && (
                  <button
                    onClick={() => {
                      const idx = sections.findIndex((s) => s.key === activeSection);
                      if (idx < sections.length - 1) setActiveSection(sections[idx + 1].key);
                    }}
                    className="btn-ghost flex items-center gap-2 text-sm"
                  >
                    Next Section
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeCase && (
        <div className="flex-1 flex items-center justify-center" style={{ background: 'var(--bg-base)' }}>
          <div className="text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>
              Select a case to study
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Each case includes background, framework, analysis, solution, and lessons
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
