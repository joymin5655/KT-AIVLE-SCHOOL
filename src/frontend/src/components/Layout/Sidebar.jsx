import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Activity,
  BarChart3,
  Zap,
  MessageCircle,
  BookOpen,
  User,
  Settings,
  LogOut,
  ChevronRight,
  Dumbbell,
  Shield,
  FileText
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/posture-analysis', icon: Activity, label: 'Posture Analysis' },
    { path: '/statistics', icon: BarChart3, label: 'Statistics' },
    { path: '/gamification', icon: Zap, label: 'Gamification' },
    { path: '/chatbot', icon: MessageCircle, label: 'Chatbot' },
    { path: '/board', icon: BookOpen, label: 'Community' },
    { path: '/stretching-guide', icon: Dumbbell, label: 'Stretching' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const policyItems = [
    { path: '/privacy', icon: Shield, label: 'Privacy Policy' },
    { path: '/terms', icon: FileText, label: 'Terms of Service' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="sidebar-close" onClick={toggleSidebar}>
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={toggleSidebar}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {isActive(item.path) && <ChevronRight size={16} />}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-policies">
            <div className="sidebar-policy-label">Policies</div>
            {policyItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-item policy-item ${isActive(item.path) ? 'active' : ''}`}
                onClick={toggleSidebar}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          <Link to="/settings" className="sidebar-item" onClick={toggleSidebar}>
            <Settings size={20} />
            <span>Settings</span>
          </Link>
          <button className="sidebar-item logout" onClick={logout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
