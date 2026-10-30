import { NavLink } from 'react-router-dom'
import { Briefcase, Home, FileText, Plus, BarChart2, Settings } from 'lucide-react'
import './Sidebar.css'

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/applications', label: 'Applications', icon: FileText },
    { path: '/add', label: 'Add Application', icon: Plus },
    { path: '/statistics', label: 'Statistics', icon: BarChart2 },
    { path: '/settings', label: 'Settings', icon: Settings }
  ]

  return (
    <aside className='sidebar'>
      {/* Brand Logo */}
      <div className="logo-container">
        <div className="logo-icon">
          <Briefcase size={20} color="#ffffff" />
        </div>
        <h1 className="logo-text">
          <span className="logo-text-purple">Job</span>Tracker
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className='nav-menu'>
        {navItems.map(item => {
          const Icon = item.icon

          return (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
