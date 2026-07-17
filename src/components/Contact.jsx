import { useState } from 'react'

function Contact({ email }) {
  const [name, setName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !contactEmail || !message) return
    setSubmitted(true)
  }

  const handleReset = () => {
    setName('')
    setContactEmail('')
    setMessage('')
    setSubmitted(false)
  }

  return (
    <section className="content-card" id="contact">
      <p className="section-label">Get in Touch</p>
      <h3>Contact Me</h3>

      {submitted ? (
        <div className="form-success-container">
          <div className="success-icon">✓</div>
          <h4>Message Sent!</h4>
          <p>Thank you for reaching out, <strong>{name}</strong>. I will review your message and reply to <strong>{contactEmail}</strong> shortly.</p>
          <button onClick={handleReset} className="submit-btn reset-btn">
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <p className="form-intro">
            Have a question or want to work together? Fill out the form below or email me directly at <a href={`mailto:${email}`} className="email-link">{email}</a>.
          </p>

          <div className="form-group">
            <label htmlFor="form-name">Your Name</label>
            <input
              type="text"
              id="form-name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Rishi Sanja"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-email">Email Address</label>
            <input
              type="email"
              id="form-email"
              className="form-input"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder="rishisanja99@example.com"
              required
            />
          </div>

          <div className="form-group message-group">
            <div className="label-container">
              <label htmlFor="form-message">Your Message</label>
              <button
                type="button"
                className="tooltip-toggle"
                onClick={() => setShowHelp(!showHelp)}
                title="Click for help on what to write"
                aria-label="Toggle Message Tips"
              >
                ❓
              </button>
            </div>

            {showHelp && (
              <div className="help-tooltip">
                <span className="tooltip-title">💡 Writing Tips:</span>
                <p>Include details about your project timeline, technologies involved, or the specific questions you have. I typically respond within 24 hours!</p>
              </div>
            )}

            <textarea
              id="form-message"
              className="form-input form-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Rishi, I'd love to talk about a React project..."
              maxLength={500}
              required
            />

            <div className="form-meta-row">
              <span className={`char-count ${message.length >= 450 ? 'limit-warning' : ''}`}>
                {message.length} / 500 characters
              </span>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Send Message ✉
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
