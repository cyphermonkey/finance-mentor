import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Clock, BookOpen, CheckCircle2, Circle, X, ArrowRight, Lightbulb } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useAppStore } from '../store/appStore';
import { curriculum, getModulesByTrack } from '../data/curriculum';
import type { Module, Topic } from '../types';

const trackTabs = [
  { id: 'finance', label: 'Finance', icon: '📈', color: 'var(--gold)' },
  { id: 'consulting', label: 'Consulting', icon: '🎯', color: '#8B5CF6' },
  { id: 'quant', label: 'Quant', icon: '📐', color: '#7C3AED' },
  { id: 'tech', label: 'Technology', icon: '💻', color: '#3776AB' },
  { id: 'entrepreneurship', label: 'Startups', icon: '🚀', color: '#E85D5D' },
  { id: 'skills', label: 'Skills', icon: '⚡', color: 'var(--teal)' },
  { id: 'realestate', label: 'Real Estate', icon: '🏢', color: '#E8572A' },
  { id: 'economics', label: 'Economics', icon: '🌐', color: '#2A9D8F' },
  { id: 'accounting', label: 'Accounting', icon: '🧾', color: '#457B9D' },
  { id: 'law', label: 'Law', icon: '⚖️', color: '#6D3B8C' },
];

type ActiveTrack = 'finance' | 'consulting' | 'quant' | 'tech' | 'entrepreneurship' | 'skills' | 'realestate' | 'economics' | 'accounting' | 'law';

export default function LearningHub() {
  const { progress, completeTopicId, completeModuleId } = useAppStore();
  const [activeTrack, setActiveTrack] = useState<ActiveTrack>('finance');
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<{ topic: Topic; module: Module } | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const modules = getModulesByTrack(activeTrack);
  const trackColors: Record<ActiveTrack, string> = {
    finance: 'var(--gold)',
    consulting: '#8B5CF6',
    quant: '#7C3AED',
    tech: '#3776AB',
    entrepreneurship: '#E85D5D',
    skills: 'var(--teal)',
    realestate: '#E8572A',
    economics: '#2A9D8F',
    accounting: '#457B9D',
    law: '#6D3B8C',
  };
  const trackColor = trackColors[activeTrack];

  function openTopic(topic: Topic, module: Module) {
    setActiveTopic({ topic, module });
    setShowQuiz(false);
  }

  function markTopicDone(topicId: string, moduleId: string) {
    completeTopicId(topicId);
    const module = curriculum.find((m) => m.id === moduleId);
    if (module) {
      const allDone = module.topics.every(
        (t) => progress.completedTopics.includes(t.id) || t.id === topicId
      );
      if (allDone) completeModuleId(moduleId);
    }
  }

  function moduleCompletionPct(module: Module) {
    const done = module.topics.filter((t) => progress.completedTopics.includes(t.id)).length;
    return Math.round((done / module.topics.length) * 100);
  }

  return (
    <div className="flex h-full" style={{ animation: 'fadeUp 0.4s ease-out' }}>
      {/* Left panel: module list */}
      <div
        className="flex flex-col"
        style={{
          width: activeTopic ? '360px' : '100%',
          minWidth: activeTopic ? '360px' : undefined,
          borderRight: activeTopic ? '1px solid var(--border)' : 'none',
          transition: 'width 0.3s ease',
        }}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="section-label mb-1">LEARNING HUB</div>
          <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            Your Curriculum
          </h1>

          {/* Track tabs — scrollable */}
          <div
            className="flex gap-1.5 overflow-x-auto pb-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {trackTabs.map((tab) => {
              const isActive = activeTrack === tab.id;
              const moduleCount = curriculum.filter(m => m.track === tab.id).length;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTrack(tab.id as ActiveTrack); setExpandedModule(null); setActiveTopic(null); }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 flex-shrink-0"
                  style={{
                    background: isActive ? tab.color + '15' : 'var(--bg-elevated)',
                    color: isActive ? tab.color : 'var(--text-muted)',
                    border: `1px solid ${isActive ? tab.color + '35' : 'var(--border)'}`,
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span
                    className="px-1 rounded text-xs font-mono"
                    style={{
                      background: isActive ? tab.color + '20' : 'var(--bg-card)',
                      color: isActive ? tab.color : 'var(--text-muted)',
                      fontSize: 10,
                    }}
                  >
                    {moduleCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Module list */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          {modules.map((module) => {
            const pct = moduleCompletionPct(module);
            const isExpanded = expandedModule === module.id;
            const isCompleted = progress.completedModules.includes(module.id);

            return (
              <div
                key={module.id}
                className="rounded-xl overflow-hidden transition-all"
                style={{ border: `1px solid ${isCompleted ? trackColor + '30' : 'var(--border)'}` }}
              >
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                  className="w-full text-left p-4 flex items-center gap-3 transition-all"
                  style={{
                    background: isExpanded ? 'var(--bg-elevated)' : 'var(--bg-card)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: module.color + '15', border: `1px solid ${module.color}20` }}
                  >
                    {module.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-sm font-semibold" style={{ color: isCompleted ? trackColor : 'var(--text-primary)' }}>
                        {module.title}
                      </span>
                      <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                        <span className="text-xs font-mono" style={{ color: trackColor, fontFamily: 'var(--font-mono)' }}>
                          {pct}%
                        </span>
                        {isExpanded
                          ? <ChevronDown size={14} color="var(--text-muted)" />
                          : <ChevronRight size={14} color="var(--text-muted)" />}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="badge" style={{
                        background: module.color + '12',
                        color: module.color,
                        border: `1px solid ${module.color}20`,
                      }}>
                        {module.level}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        <Clock size={10} />
                        {module.estimatedHours}h
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {module.topics.length} topics
                      </span>
                    </div>
                    <div className="progress-track" style={{ height: 3 }}>
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: module.color }} />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: 'hidden', borderTop: `1px solid var(--border)` }}
                    >
                      <div className="p-3 space-y-1.5" style={{ background: 'var(--bg-base)' }}>
                        {module.topics.map((topic) => {
                          const done = progress.completedTopics.includes(topic.id);
                          const isActive = activeTopic?.topic.id === topic.id;
                          return (
                            <button
                              key={topic.id}
                              onClick={() => openTopic(topic, module)}
                              className="w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 transition-all"
                              style={{
                                background: isActive ? trackColor + '12' : done ? 'rgba(0,196,180,0.05)' : 'var(--bg-card)',
                                border: `1px solid ${isActive ? trackColor + '30' : done ? 'rgba(0,196,180,0.15)' : 'var(--border)'}`,
                              }}
                            >
                              {done
                                ? <CheckCircle2 size={16} color="var(--teal)" className="flex-shrink-0" />
                                : <Circle size={16} color={isActive ? trackColor : 'var(--text-muted)'} className="flex-shrink-0" />
                              }
                              <span
                                className="text-sm flex-1 text-left"
                                style={{ color: isActive ? trackColor : done ? 'var(--teal)' : 'var(--text-secondary)' }}
                              >
                                {topic.title}
                              </span>
                              {isActive && <ChevronRight size={14} color={trackColor} />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right panel: topic content */}
      <AnimatePresence>
        {activeTopic && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            {/* Topic header */}
            <div
              className="px-6 py-5 flex items-start justify-between border-b flex-shrink-0"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{activeTopic.module.icon}</span>
                  <span className="section-label" style={{ color: trackColor }}>
                    {activeTopic.module.title.toUpperCase()}
                  </span>
                </div>
                <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                  {activeTopic.topic.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveTopic(null)}
                className="btn-icon ml-4 flex-shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            {/* Topic tabs */}
            <div
              className="flex gap-0 border-b px-6 flex-shrink-0"
              style={{ borderColor: 'var(--border)' }}
            >
              {['Content', 'Key Points', 'Real Example', activeTopic.topic.practiceQuestions.length > 0 ? 'Practice' : null].filter(Boolean).map((tab) => (
                <button
                  key={tab!}
                  onClick={() => setShowQuiz(tab === 'Practice')}
                  className="px-4 py-3 text-xs font-semibold border-b-2 transition-all"
                  style={{
                    borderColor: !showQuiz && tab !== 'Practice' || showQuiz && tab === 'Practice' ? trackColor : 'transparent',
                    color: !showQuiz && tab !== 'Practice' || showQuiz && tab === 'Practice' ? trackColor : 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {tab!.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {!showQuiz && (
                <div className="max-w-2xl">
                  <div className="prose-finance mb-8">
                    <ReactMarkdown>{activeTopic.topic.content}</ReactMarkdown>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb size={14} color={trackColor} />
                      <span className="section-label" style={{ color: trackColor }}>KEY TAKEAWAYS</span>
                    </div>
                    <div className="space-y-2">
                      {activeTopic.topic.keyPoints.map((pt, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl"
                          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                        >
                          <div
                            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 font-mono text-xs font-bold"
                            style={{ background: trackColor + '20', color: trackColor, fontFamily: 'var(--font-mono)' }}
                          >
                            {i + 1}
                          </div>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{pt}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="p-5 rounded-xl mb-6"
                    style={{
                      background: 'rgba(61,111,232,0.06)',
                      border: '1px solid rgba(61,111,232,0.15)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base">📰</span>
                      <span className="section-label" style={{ color: '#3D6FE8' }}>REAL WORLD EXAMPLE</span>
                    </div>
                    <div className="prose-finance">
                      <ReactMarkdown>{activeTopic.topic.realWorldExample}</ReactMarkdown>
                    </div>
                  </div>

                  {activeTopic.topic.tools && (
                    <div className="mb-6">
                      <div className="section-label mb-2">TOOLS USED</div>
                      <div className="flex flex-wrap gap-2">
                        {activeTopic.topic.tools.map((tool) => (
                          <span key={tool} className="badge badge-teal">{tool}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {showQuiz && (
                <div className="max-w-2xl">
                  <div className="mb-4">
                    <div className="section-label mb-1">PRACTICE QUESTIONS</div>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Work through these questions to test your understanding. Try them before checking answers.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {activeTopic.topic.practiceQuestions.map((q, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl"
                        style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono"
                            style={{ background: trackColor + '20', color: trackColor, fontFamily: 'var(--font-mono)' }}
                          >
                            {i + 1}
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{q}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-4 p-4 rounded-xl flex items-center gap-3"
                    style={{ background: 'rgba(232,168,62,0.06)', border: '1px solid rgba(232,168,62,0.15)' }}
                  >
                    <Lightbulb size={16} color="var(--gold)" className="flex-shrink-0" />
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Work through each question before checking the answer. Real interview questions are harder — use these to identify gaps, then re-read the topic content.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              className="px-6 py-4 border-t flex items-center justify-between flex-shrink-0"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex items-center gap-2">
                {progress.completedTopics.includes(activeTopic.topic.id) ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} color="var(--teal)" />
                    <span className="text-sm" style={{ color: 'var(--teal)' }}>Completed</span>
                  </div>
                ) : (
                  <button
                    onClick={() => markTopicDone(activeTopic.topic.id, activeTopic.module.id)}
                    className="btn-gold flex items-center gap-2"
                  >
                    <CheckCircle2 size={14} />
                    Mark Complete (+50 XP)
                  </button>
                )}
              </div>
              <button
                className="btn-ghost flex items-center gap-2"
                onClick={() => {
                  const allTopics = activeTopic.module.topics;
                  const idx = allTopics.findIndex((t) => t.id === activeTopic.topic.id);
                  if (idx < allTopics.length - 1) {
                    openTopic(allTopics[idx + 1], activeTopic.module);
                  }
                }}
              >
                Next Topic
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {!activeTopic && (
        <div className="flex-1 flex items-center justify-center" style={{ background: 'var(--bg-base)' }}>
          <div className="text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>
              Select a topic to start learning
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Expand any module on the left to see available topics
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
