import { useState, useEffect } from 'react'

const SECTIONS = ['home', 'about', 'skills', 'projects']
const COLOR_PRESETS = ['#3b82f6', '#10b981', '#f43f5e', '#8b5cf6', '#f59e0b']

function NavBar({ themeColor, onThemeChange }) {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently at the top of the screen
      const scrollPosition = window.scrollY + 120 // Offset for sticky navbar + margins
      
      // Special case for top of page
      if (window.scrollY < 50) {
        setActiveSection('home')
        return
      }

      for (const section of SECTIONS) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once initially to set the correct active section
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const nextMode = !darkMode
    setDarkMode(nextMode)
    if (nextMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-brand">DevPortfolio</div>
        <ul className="nav-menu">
          {SECTIONS.map((sec) => (
            <li key={sec}>
              <a
                className={`nav-link ${activeSection === sec ? 'active' : ''}`}
                onClick={() => handleNavClick(sec)}
              >
                {sec}
              </a>
            </li>
          ))}
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
