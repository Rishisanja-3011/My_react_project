function Footer({ name, email }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contact">
      <p>{name}</p>
      <a href={`mailto:${email}`} className="footer-email">
        {email}
      </a>
      <p className="footer-copy">
        &copy; {currentYear} &bull; Built with React & Vite. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
