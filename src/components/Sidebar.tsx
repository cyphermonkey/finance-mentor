import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, BookOpen, Briefcase,
  Target, BarChart3, Settings, LogOut, Zap
} from 'lucide-react';
import { useAppStore } from '../store/appStore';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/learn', icon: BookOpen, label: 'Learning Hub' },
  { to: '/cases', icon: Briefcase, label: 'Case Studies' },
  { to: '/opportunities', icon: Target, label: 'Opportunities' },
  { to: '/skills', icon: BarChart3, label: 'Skills Tracker' },
];

export default function Sidebar() {
  const { user, progress, clearUser } = useAppStore();
  const navigate = useNavigate();

  const level = Math.floor(progress.xp / 500) + 1;
  const xpInLevel = progress.xp % 500;
  const xpToNext = 500;

  function handleLogout() {
    if (confirm('Reset all progress and start over?')) {
      clearUser();
      navigate('/');
    }
  }

  return (
    <aside
      style={{ width: '220px', minWidth: '220px', background: 'var(--bg-card)', borderRight: '1px solid var(--border)' }}
      className="flex flex-col h-screen sticky top-0 overflow-y-auto"
    >
      {/* Logo */}
      <div className="px-5 py-5 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #E8A83E, #F5C75A)', color: '#060A13' }}
          >
            F
          </div>
          <div>
            <div className="font-display font-bold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>
              FinanceMentor
            </div>
            <div className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              AI
            </div>
          </div>
        </div>
      </div>

      {/* User profile */}
      <div className="px-4 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #3D6FE8, #6366F1)', color: 'white' }}
          >
            {user?.name[0]?.toUpperCase()}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
              {user?.name}
            </div>
            <div className="text-xs flex items-center gap-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>
              <Zap size={10} />
              Level {level}
            </div>
          </div>
        </div>
        {/* XP bar */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {xpInLevel} / {xpToNext} XP
            </span>
            <span className="text-xs" style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>
              Lv.{level + 1}
            </span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill-gold"
              style={{ width: `${(xpInLevel / xpToNext) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-3 space-y-0.5">
        <div className="section-label px-2 mb-2">Menu</div>
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'nav-active' : 'nav-inactive'}`
            }
          >
            <Icon size={15} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Stats strip */}
      <div className="mx-3 mb-3 p-3 rounded-xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Topics', value: progress.completedTopics.length },
            { label: 'Cases', value: progress.completedCases.length },
            { label: 'Hours', value: progress.totalHoursStudied },
            { label: 'XP', value: progress.xp },
          ].map((s) => (
            <div key={s.label}>
              <div className="stat-number text-sm" style={{ color: 'var(--gold)' }}>{s.value}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom actions */}
      <div className="px-3 pb-4 space-y-0.5 border-t pt-3" style={{ borderColor: 'var(--border)' }}>
        <NavLink
          to="/settings"
          className={({ isActive }) => `nav-item ${isActive ? 'nav-active' : 'nav-inactive'}`}
        >
          <Settings size={15} />
          <span>Settings</span>
        </NavLink>
        <button
          onClick={handleLogout}
          className="nav-item nav-inactive w-full text-left"
          style={{ color: '#E85D5D' }}
        >
          <LogOut size={15} />
          <span>Reset</span>
        </button>
      </div>

      {/* Live indicator */}
    </aside>
  );
}
