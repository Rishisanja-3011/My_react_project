import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const COLOR_PRESETS = ['#3b82f6', '#10b981', '#f43f5e', '#8b5cf6', '#f59e0b']

function NavBar({ themeColor, onThemeChange }) {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    const nextMode = !darkMode
    setDarkMode(nextMode)
    if (nextMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-brand">DevPortfolio</div>
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-controls">
          <div className="color-picker">
            <span className="picker-label">Theme</span>
            {COLOR_PRESETS.map((color) => (
              <span
                key={color}
                className={`color-dot ${themeColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => onThemeChange(color)}
                title={`Change header to ${color}`}
              />
            ))}
          </div>
          <button
            className="theme-toggle-btn"
            onClick={toggleDarkMode}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

