function Projects({ projects }) {
  return (
    <section className="content-card" id="projects">
      <p className="section-label">Projects</p>
      <h3>Featured Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h4>{project.title}</h4>
              <span className="project-role">{project.role}</span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-meta">
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
