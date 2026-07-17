function About({ name, bio, location }) {
  return (
    <section className="content-card" id="about">
      <p className="section-label">About Me</p>
      <h3>Hi, I&apos;m {name}.</h3>
      <p className="about-bio">{bio}</p>
      <div className="meta-line">Based in {location}</div>
    </section>
  )
}

export default About
