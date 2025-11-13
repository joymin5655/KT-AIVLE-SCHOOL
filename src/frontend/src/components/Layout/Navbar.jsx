import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, LogOut, Settings } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ toggleSidebar }) {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
          <Link to="/" className="navbar-logo">
            🏥 Posture Keeper
          </Link>
        </div>

        <div className="navbar-center">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
        </div>

        <div className="navbar-right">
          <div className="notification-bell">
            <span className="bell-icon">🔔</span>
            <span className="notification-badge">3</span>
          </div>

          <div className="user-menu">
            <button
              className="user-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img src={user?.avatar} alt={user?.nickname} className="user-avatar" />
              <span className="user-nickname">{user?.nickname}</span>
            </button>

            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">
                  👤 Profile
                </Link>
                <Link to="/settings" className="dropdown-item">
                  ⚙️ Settings
                </Link>
                <hr />
                <button className="dropdown-item logout-btn" onClick={handleLogout}>
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
