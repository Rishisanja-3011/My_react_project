function Skills({ skillList }) {
  return (
    <section className="content-card" id="skills">
      <p className="section-label">Skills</p>
      <h3>Core Competencies</h3>
      <ul className="skill-grid" style={{ listStyle: 'none', padding: 0 }}>
        {skillList.map((skill) => (
          <li className="skill-pill" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
