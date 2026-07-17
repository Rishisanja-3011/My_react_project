function Header({ name, role, tagline, themeColor }) {
  const customStyle = {
    background: `linear-gradient(135deg, ${themeColor || '#3b82f6'} 0%, #111827 100%)`,
  }

  return (
    <header className="hero-section" style={customStyle} id="home">
      <p className="eyebrow">Student Portfolio</p>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p className="hero-copy">{tagline}</p>
    </header>
  )
}

export default Header
