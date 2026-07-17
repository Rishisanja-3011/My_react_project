import { useState } from 'react'

const CATEGORIES = ['UI Design', 'Code Quality', 'Creativity', 'Overall']

function Feedback() {
  // --- Controlled input state ---
  const [reviewerName, setReviewerName] = useState('')
  const [role, setRole] = useState('')
  const [feedbackText, setFeedbackText] = useState('')

  // --- Star rating state per category ---
  const [ratings, setRatings] = useState({ 'UI Design': 0, 'Code Quality': 0, 'Creativity': 0, 'Overall': 0 })
  const [hoveredStar, setHoveredStar] = useState({ category: null, star: 0 })

  // --- UI visibility state ---
  const [showGuidelines, setShowGuidelines] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const allRated = CATEGORIES.every((cat) => ratings[cat] > 0)

  const handleRating = (category, star) => {
    setRatings((prev) => ({ ...prev, [category]: star }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!reviewerName || !feedbackText || !allRated) return
    setSubmitted(true)
  }

  const handleReset = () => {
    setReviewerName('')
    setRole('')
    setFeedbackText('')
    setRatings({ 'UI Design': 0, 'Code Quality': 0, 'Creativity': 0, 'Overall': 0 })
    setHoveredStar({ category: null, star: 0 })
    setShowGuidelines(false)
    setSubmitted(false)
  }

  const averageRating = allRated
    ? (Object.values(ratings).reduce((a, b) => a + b, 0) / CATEGORIES.length).toFixed(1)
    : null

  if (submitted) {
    return (
      <section className="content-card" id="feedback">
        <div className="form-success-container">
          <div className="success-icon">⭐</div>
          <h4>Thank You, {reviewerName}!</h4>
          <p>
            Your feedback has been recorded. You gave an average rating of{' '}
            <strong>{averageRating} / 5</strong> — that means a lot!
          </p>
          <div className="feedback-summary-stars">
            {CATEGORIES.map((cat) => (
              <div key={cat} className="summary-row">
                <span className="summary-cat">{cat}</span>
                <span className="summary-stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} style={{ color: i < ratings[cat] ? '#f59e0b' : 'var(--color-card-border)', fontSize: '1.1rem' }}>
                      ★
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
          <button onClick={handleReset} className="submit-btn reset-btn">
            Submit Another Review
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="content-card" id="feedback">
      <p className="section-label">Share Your Thoughts</p>
      <h3>Leave Feedback</h3>

      <form onSubmit={handleSubmit} className="contact-form">
        <p className="form-intro">
          Reviewed my portfolio or worked with me? I would love to hear your honest thoughts — ratings help me grow as a developer.
        </p>

        {/* Reviewer Name */}
        <div className="form-group">
          <label htmlFor="feedback-name">Your Name</label>
          <input
            type="text"
            id="feedback-name"
            className="form-input"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            placeholder="e.g. Professor Mehta"
            required
          />
        </div>

        {/* Reviewer Role */}
        <div className="form-group">
          <label htmlFor="feedback-role">Your Role <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span></label>
          <input
            type="text"
            id="feedback-role"
            className="form-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Faculty, Peer, Recruiter"
          />
        </div>

        {/* Star Ratings per Category */}
        <div className="form-group">
          <div className="label-container">
            <label>Rate Each Category</label>
            <button
              type="button"
              className="tooltip-toggle"
              onClick={() => setShowGuidelines(!showGuidelines)}
              title="See rating guidelines"
              aria-label="Toggle Rating Guidelines"
            >
              ❓
            </button>
          </div>

          {showGuidelines && (
            <div className="help-tooltip">
              <span className="tooltip-title">⭐ Rating Guide:</span>
              <p>
                1 star = Poor &nbsp;|&nbsp; 2 = Fair &nbsp;|&nbsp; 3 = Good &nbsp;|&nbsp;
                4 = Very Good &nbsp;|&nbsp; 5 = Excellent
              </p>
            </div>
          )}

          <div className="star-rating-grid">
            {CATEGORIES.map((cat) => (
              <div key={cat} className="star-row">
                <span className="star-category">{cat}</span>
                <div className="stars-container">
                  {Array.from({ length: 5 }, (_, i) => {
                    const starVal = i + 1
                    const isHovered = hoveredStar.category === cat && starVal <= hoveredStar.star
                    const isSelected = starVal <= ratings[cat]
                    return (
                      <span
                        key={starVal}
                        className={`star ${isSelected ? 'star-selected' : ''} ${isHovered ? 'star-hovered' : ''}`}
                        onClick={() => handleRating(cat, starVal)}
                        onMouseEnter={() => setHoveredStar({ category: cat, star: starVal })}
                        onMouseLeave={() => setHoveredStar({ category: null, star: 0 })}
                        title={`Rate ${cat} ${starVal} out of 5`}
                        aria-label={`${cat} ${starVal} star`}
                        role="button"
                      >
                        ★
                      </span>
                    )
                  })}
                </div>
                {ratings[cat] > 0 && (
                  <span className="star-label-text">
                    {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][ratings[cat]]}
                  </span>
                )}
              </div>
            ))}
          </div>

          {!allRated && (
            <p style={{ fontSize: '0.8rem', color: '#f43f5e', marginTop: '4px' }}>
              Please rate all 4 categories before submitting.
            </p>
          )}
        </div>

        {/* Written Feedback */}
        <div className="form-group">
          <label htmlFor="feedback-text">
            Written Feedback
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}> — {feedbackText.length} / 300 characters</span>
          </label>
          <textarea
            id="feedback-text"
            className={`form-input form-textarea ${feedbackText.length >= 270 ? 'limit-warning-border' : ''}`}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="What did you think of the portfolio? Any suggestions for improvement?"
            maxLength={300}
            required
          />
          {feedbackText.length >= 270 && (
            <span className="char-count limit-warning">{feedbackText.length} / 300 — almost at limit</span>
          )}
        </div>

        {/* Average preview */}
        {allRated && (
          <div className="average-preview">
            <span className="average-label">Your Average Rating</span>
            <span className="average-score">{averageRating} <span style={{ fontSize: '1rem', color: '#f59e0b' }}>★</span> / 5</span>
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={!allRated}>
          Submit Feedback ⭐
        </button>
      </form>
    </section>
  )
}

export default Feedback
