import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="content-card not-found-card" style={{ textAlign: 'center', padding: '60px 24px' }}>
      <p className="section-label" style={{ color: '#f43f5e' }}>404 Error</p>
      <h3 style={{ fontSize: '3rem', margin: '16px 0 8px' }}>Page Not Found</h3>
      <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', margin: '0 auto 32px', fontSize: '1.1rem' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="submit-btn" style={{ display: 'inline-flex', alignSelf: 'center', textDecoration: 'none' }}>
        Go Back Home 🏠
      </Link>
    </section>
  )
}

export default NotFound
