import { useState, useRef, useEffect } from 'react';
import { Send, Trash2, Lightbulb, ChevronRight, User, Bot, AlertCircle, Sparkles, Zap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useAppStore } from '../store/appStore';
import { streamChat } from '../lib/claude';
import { geminiChat } from '../lib/gemini';
import type { ChatMessage, AIProvider } from '../types';

const suggestedPrompts = [
  "Explain DCF valuation like I'm interviewing at Goldman Sachs tomorrow",
  "Walk me through an LBO model step by step with real numbers",
  "How do I crack McKinsey case interviews? Give me a complete framework",
  "What's the difference between Enterprise Value and Equity Value?",
  "Give me a live profitability case to solve right now",
  "How does carry work in private equity? Explain the waterfall",
  "Explain Black-Scholes intuitively — what does each Greek mean?",
  "What makes Jane Street different from other quant firms?",
  "How do I get into Two Sigma / Citadel as a quant analyst?",
  "Explain the Pyramid Principle with a real McKinsey example",
  "What is a leveraged buyout? Explain like I'm 22 with no finance background",
  "Walk me through how to value a SaaS company — which multiples and why?",
  "How does the yield curve predict recessions?",
  "What is CAC:LTV and why do VCs obsess over it?",
  "Explain Monte Carlo simulation for financial modeling",
  "How did Two Sigma use machine learning to beat the market?",
];

const providerConfig = {
  gemini: {
    name: 'Gemini 2.0 Flash',
    label: 'Gemini',
    color: '#4285F4',
    bg: 'rgba(66,133,244,0.08)',
    border: 'rgba(66,133,244,0.2)',
    icon: Sparkles,
    alwaysAvailable: true,
  },
  claude: {
    name: 'Claude Opus 4',
    label: 'Claude',
    color: 'var(--gold)',
    bg: 'rgba(232,168,62,0.08)',
    border: 'rgba(232,168,62,0.2)',
    icon: Zap,
    alwaysAvailable: false,
  },
};

export default function AITutor() {
  const { user, progress, chatHistory, addChatMessage, clearChat, aiProvider, setAiProvider } = useAppStore();
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, streamingContent]);

  async function handleSend(message?: string) {
    const text = (message || input).trim();
    if (!text || streaming || !user) return;

    if (aiProvider === 'claude' && !user.apiKey) {
      setError('Claude requires your Anthropic API key. Go to Settings to add it, or switch to Gemini (no key needed).');
      return;
    }

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: new Date().toISOString(),
      provider: aiProvider,
    };

    addChatMessage(userMsg);
    setInput('');
    setStreaming(true);
    setStreamingContent('');
    setError('');

    const history = [...chatHistory, userMsg].slice(-20).map((m) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    }));

    let fullContent = '';

    try {
      if (aiProvider === 'gemini') {
        await geminiChat(
          history,
          user,
          progress,
          (chunk) => { fullContent += chunk; setStreamingContent(fullContent); },
          () => {
            addChatMessage({ id: crypto.randomUUID(), role: 'assistant', content: fullContent, timestamp: new Date().toISOString(), provider: 'gemini' });
            setStreamingContent('');
            setStreaming(false);
          }
        );
      } else {
        await streamChat(
          history,
          user,
          progress,
          (chunk) => { fullContent += chunk; setStreamingContent(fullContent); },
          () => {
            addChatMessage({ id: crypto.randomUUID(), role: 'assistant', content: fullContent, timestamp: new Date().toISOString(), provider: 'claude' });
            setStreamingContent('');
            setStreaming(false);
          }
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again.');
      setStreaming(false);
      setStreamingContent('');
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  if (!user) return null;

  const currentProvider = providerConfig[aiProvider];
  const ProviderIcon = currentProvider.icon;

  return (
    <div className="flex flex-col h-full" style={{ background: 'var(--bg-base)' }}>

      {/* Header */}
      <div className="px-6 py-4 border-b flex items-center justify-between flex-shrink-0"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div>
          <div className="section-label mb-0.5">AI TUTOR</div>
          <h1 className="text-xl font-bold flex items-center gap-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            Your Personal Finance Mentor
            <div className="live-dot" />
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {/* AI Provider Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl"
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
            {(['gemini', 'claude'] as AIProvider[]).map((p) => {
              const cfg = providerConfig[p];
              const Icon = cfg.icon;
              const active = aiProvider === p;
              const available = cfg.alwaysAvailable || !!user.apiKey;
              return (
                <button key={p} onClick={() => available && setAiProvider(p)}
                  title={!available ? 'Add API key in Settings' : undefined}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                  style={{
                    background: active ? cfg.bg : 'transparent',
                    color: active ? cfg.color : 'var(--text-muted)',
                    border: active ? `1px solid ${cfg.border}` : '1px solid transparent',
                    opacity: !available ? 0.4 : 1,
                    cursor: !available ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--font-mono)',
                  }}>
                  <Icon size={12} />
                  {cfg.label}
                  {p === 'gemini' && <span style={{ fontSize: 9, color: 'var(--teal)' }}>FREE</span>}
                </button>
              );
            })}
          </div>

          {chatHistory.length > 0 && (
            <button onClick={() => { if (confirm('Clear conversation?')) clearChat(); }} className="btn-icon">
              <Trash2 size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {chatHistory.length === 0 && !streamingContent && (
          <div className="max-w-2xl mx-auto pt-6" style={{ animation: 'fadeUp 0.4s ease-out' }}>
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(66,133,244,0.2), rgba(232,168,62,0.2))', border: '1px solid rgba(66,133,244,0.2)' }}>
                🎓
              </div>
              <h2 className="text-xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                Ask me anything, {user.name}
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Powered by <span style={{ color: '#4285F4', fontWeight: 600 }}>Gemini 2.0 Flash</span> (free, always on) or your Claude key.
                Calibrated to your <strong style={{ color: 'var(--gold)' }}>{user.level}</strong> level in{' '}
                <strong style={{ color: 'var(--gold)' }}>{user.field}</strong>.
              </p>
            </div>

            {/* Active provider banner */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl mb-5"
              style={{ background: currentProvider.bg, border: `1px solid ${currentProvider.border}` }}>
              <ProviderIcon size={13} color={currentProvider.color} />
              <span className="text-xs font-semibold" style={{ color: currentProvider.color, fontFamily: 'var(--font-mono)' }}>
                {currentProvider.name.toUpperCase()} ACTIVE
              </span>
              <span className="text-xs ml-auto" style={{ color: 'var(--text-muted)' }}>
                {aiProvider === 'gemini' ? 'No API key needed' : 'Using your Anthropic key'}
              </span>
            </div>

            <div className="section-label mb-3">SUGGESTED QUESTIONS</div>
            <div className="grid grid-cols-2 gap-2">
              {suggestedPrompts.map((prompt) => (
                <button key={prompt} onClick={() => handleSend(prompt)}
                  className="text-left p-3.5 rounded-xl text-sm group transition-all duration-150"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = currentProvider.color + '40';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                  }}>
                  <div className="flex items-start justify-between gap-2">
                    <span className="leading-relaxed">{prompt}</span>
                    <ChevronRight size={14} className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: currentProvider.color }} />
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 p-3 rounded-xl mt-4"
              style={{ background: 'rgba(0,196,180,0.05)', border: '1px solid rgba(0,196,180,0.12)' }}>
              <Lightbulb size={14} color="var(--teal)" />
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                Covers Finance · Consulting · Quant · Engineering · Real Estate · Economics · Law · Entrepreneurship
              </p>
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto space-y-4">
          {chatHistory.map((msg) => {
            const msgProvider = msg.provider || 'gemini';
            const cfg = providerConfig[msgProvider];
            return (
              <div key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                style={{ animation: 'fadeUp 0.25s ease-out' }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={msg.role === 'user'
                    ? { background: 'linear-gradient(135deg, #3D6FE8, #6366F1)' }
                    : { background: cfg.bg, border: `1px solid ${cfg.border}` }}>
                  {msg.role === 'user'
                    ? <User size={14} color="white" />
                    : <Bot size={14} color={cfg.color} />}
                </div>
                <div className="max-w-lg rounded-2xl px-4 py-3"
                  style={msg.role === 'user'
                    ? { background: 'linear-gradient(135deg, #3D6FE8, #2D5CC8)', color: 'white', borderBottomRightRadius: 6 }
                    : { background: 'var(--bg-card)', border: '1px solid var(--border)', borderBottomLeftRadius: 6 }}>
                  {msg.role === 'user'
                    ? <p className="text-sm leading-relaxed">{msg.content}</p>
                    : <div className="prose-finance text-sm"><ReactMarkdown>{msg.content}</ReactMarkdown></div>}
                  <div className="text-xs mt-1.5 opacity-40 flex items-center gap-1.5"
                    style={{ color: msg.role === 'user' ? 'white' : 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    {msg.role === 'assistant' && (
                      <span style={{ color: cfg.color, opacity: 0.8 }}>· {cfg.label}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {streamingContent && (
            <div className="flex gap-3" style={{ animation: 'fadeUp 0.25s ease-out' }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: currentProvider.bg, border: `1px solid ${currentProvider.border}` }}>
                <Bot size={14} color={currentProvider.color} />
              </div>
              <div className="max-w-lg rounded-2xl px-4 py-3 flex-1"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderBottomLeftRadius: 6 }}>
                <div className="prose-finance text-sm"><ReactMarkdown>{streamingContent}</ReactMarkdown></div>
                <div className="flex gap-1 mt-2">
                  {[0,1,2].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full typing-dot"
                      style={{ background: currentProvider.color, animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {streaming && !streamingContent && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: currentProvider.bg, border: `1px solid ${currentProvider.border}` }}>
                <Bot size={14} color={currentProvider.color} />
              </div>
              <div className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderBottomLeftRadius: 6 }}>
                {[0,1,2].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full typing-dot"
                    style={{ background: currentProvider.color }} />
                ))}
              </div>
            </div>
          )}

          {error && (
            <div className="p-3 rounded-xl flex items-center gap-2"
              style={{ background: 'rgba(232,93,93,0.08)', border: '1px solid rgba(232,93,93,0.2)' }}>
              <AlertCircle size={14} color="#E85D5D" />
              <p className="text-xs" style={{ color: '#F08080' }}>{error}</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t flex-shrink-0"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-3 p-3 rounded-xl"
            style={{
              background: 'var(--bg-elevated)',
              border: `1px solid ${streaming ? currentProvider.color + '40' : 'var(--border-light)'}`,
              transition: 'border-color 0.2s',
            }}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about finance, consulting, quant, engineering, real estate, law, entrepreneurship..."
              disabled={streaming}
              rows={1}
              style={{
                flex: 1, background: 'none', border: 'none', outline: 'none',
                color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
                fontSize: '0.875rem', resize: 'none', maxHeight: '120px', overflowY: 'auto',
              }} />
            <button onClick={() => handleSend()}
              disabled={!input.trim() || streaming}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all flex-shrink-0 self-end disabled:opacity-30"
              style={{
                background: input.trim() && !streaming
                  ? `linear-gradient(135deg, ${currentProvider.color}, ${currentProvider.color}cc)`
                  : 'var(--bg-card)',
                border: input.trim() && !streaming ? 'none' : '1px solid var(--border)',
              }}>
              <Send size={15} color={input.trim() && !streaming ? 'white' : 'var(--text-muted)'} />
            </button>
          </div>
          <p className="text-center text-xs mt-2"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            ENTER to send · Powered by {currentProvider.name}
          </p>
        </div>
      </div>
    </div>
  );
}
