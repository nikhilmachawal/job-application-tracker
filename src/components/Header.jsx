import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sun, Moon, User, Settings, LogOut } from 'lucide-react';
import './Header.css'

function Header({ darkMode, setDarkMode, globalSearch, setGlobalSearch }) {
  // Local state just for opening/closing the profile menu
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="top-header">
      {/* Global Search Bar */}
      <div className="header-search">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search applications..."
          value={globalSearch}
          onChange={(e) => setGlobalSearch(e.target.value)}
        />
      </div>

      {/* Right Actions: Theme Toggle & Avatar Dropdown */}
      <div className="header-actions">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle Dark Mode"
        >
          <Sun size={16} className={!darkMode ? 'active-sun' : 'muted-icon'} />
          <Moon size={16} className={darkMode ? 'active-moon' : 'muted-icon'} />
        </button>

        {/* Avatar Wrapper with Dropdown */}
        <div className="profile-menu-container">
          <button
            className="user-avatar"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            title="Account menu"
          >
            U
          </button>

          {/* Conditional Rendering: Only show dropdown when isProfileOpen is true */}
          {isProfileOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-user-info">
                <p className="dropdown-name">User Account</p>
                <p className="dropdown-email">user@example.com</p>
              </div>
              <hr className="dropdown-divider" />
              <button
                className="dropdown-item"
                onClick={() => {
                  setIsProfileOpen(false);
                  navigate('/settings');
                }}
              >
                <User size={15} />
                <span>My Profile</span>
              </button>
              <button
                className="dropdown-item"
                onClick={() => {
                  setIsProfileOpen(false);
                  navigate('/settings');
                }}
              >
                <Settings size={15} />
                <span>Settings</span>
              </button>
              <hr className="dropdown-divider" />
              <button
                className="dropdown-item logout-item"
                onClick={() => setIsProfileOpen(false)}
              >
                <LogOut size={15} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;