import { useState } from 'react';
import { Eye, EyeOff, Save, AlertCircle, Check, RefreshCw, Key } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { initClaude } from '../lib/claude';

export default function Settings() {
  const { user, updateUser, progress, clearUser } = useAppStore();
  const [apiKey, setApiKey] = useState(user?.apiKey || '');
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [hours, setHours] = useState(user?.hoursPerWeek || 5);

  function saveSettings() {
    if (!user) return;
    updateUser({ apiKey, name, hoursPerWeek: hours });
    if (apiKey) initClaude(apiKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  if (!user) return null;

  return (
    <div className="p-8 max-w-2xl" style={{ animation: 'fadeUp 0.4s ease-out' }}>
      <div className="section-label mb-1">SETTINGS</div>
      <h1
        className="text-2xl font-bold mb-6"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
      >
        Account & Preferences
      </h1>

      {/* Profile */}
      <div className="card p-5 mb-4">
        <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>Your Name</label>
            <input
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>
              Hours available for studying per week
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[2, 5, 10, 20].map((h) => (
                <button
                  key={h}
                  onClick={() => setHours(h)}
                  className="py-2.5 rounded-xl text-center transition-all"
                  style={{
                    background: hours === h ? 'rgba(232,168,62,0.08)' : 'var(--bg-elevated)',
                    border: `1px solid ${hours === h ? 'rgba(232,168,62,0.25)' : 'var(--border)'}`,
                    color: hours === h ? 'var(--gold)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  {h}h/wk
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Field', value: user.field.charAt(0).toUpperCase() + user.field.slice(1) },
              { label: 'Level', value: user.level.charAt(0).toUpperCase() + user.level.slice(1) },
              { label: 'Background', value: user.background.replace('-', ' ') },
              { label: 'Member Since', value: new Date(user.createdAt).toLocaleDateString() },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {item.label.toUpperCase()}
                </div>
                <div className="text-sm font-medium capitalize" style={{ color: 'var(--text-primary)' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Key */}
      <div className="card p-5 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Key size={16} color="var(--gold)" />
          <h2 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Anthropic API Key</h2>
        </div>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          Required for live AI tutoring with Claude Opus. Your key is stored only in your browser's local storage.
        </p>

        {!user.apiKey && (
          <div
            className="flex items-start gap-3 p-3 rounded-xl mb-4"
            style={{ background: 'rgba(232,168,62,0.06)', border: '1px solid rgba(232,168,62,0.2)' }}
          >
            <AlertCircle size={15} color="var(--gold)" className="flex-shrink-0 mt-0.5" />
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              No API key configured. Add one below to unlock AI tutoring, daily insights, and personalized quizzes.
            </p>
          </div>
        )}

        <div className="relative mb-2">
          <input
            type={showKey ? 'text' : 'password'}
            className="input-field pr-10"
            placeholder="sk-ant-api03-..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button
            onClick={() => setShowKey(!showKey)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: 'var(--text-muted)' }}
          >
            {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Get your API key at console.anthropic.com → API Keys
        </p>
      </div>

      {/* Progress stats */}
      <div className="card p-5 mb-4">
        <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Learning Progress</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Topics Done', value: progress.completedTopics.length, color: 'var(--gold)' },
            { label: 'Cases Solved', value: progress.completedCases.length, color: '#3D6FE8' },
            { label: 'Total XP', value: progress.xp, color: '#8B5CF6' },
            { label: 'Study Hours', value: progress.totalHoursStudied, color: 'var(--teal)' },
            { label: 'Modules Done', value: progress.completedModules.length, color: '#E85D5D' },
            { label: 'Level', value: Math.floor(progress.xp / 500) + 1, color: 'var(--gold)' },
          ].map((s) => (
            <div
              key={s.label}
              className="p-3 rounded-xl text-center"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
            >
              <div
                className="stat-number text-xl mb-0.5"
                style={{ color: s.color, fontFamily: 'var(--font-mono)' }}
              >
                {s.value}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Save button */}
      <div className="flex items-center justify-between">
        <button
          onClick={saveSettings}
          className="btn-gold flex items-center gap-2"
        >
          {saved ? <Check size={15} /> : <Save size={15} />}
          {saved ? 'Saved!' : 'Save Settings'}
        </button>

        <button
          onClick={() => {
            if (confirm('This will delete ALL your progress and start over. Are you absolutely sure?')) {
              clearUser();
            }
          }}
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-all"
          style={{
            color: '#E85D5D',
            background: 'rgba(232,93,93,0.06)',
            border: '1px solid rgba(232,93,93,0.2)',
          }}
        >
          <RefreshCw size={14} />
          Reset All Progress
        </button>
      </div>
    </div>
  );
}
