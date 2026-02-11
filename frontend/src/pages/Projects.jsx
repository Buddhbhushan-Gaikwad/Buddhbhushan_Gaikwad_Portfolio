import React, { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('${import.meta.env.VITE_API_URL}/api/projects')
      .then(res => res.json())
      .then(setProjects)
  }, [])

  return (
    <section>
      <h2>Projects</h2>

      <ol className="project-list">
        {projects.map((p, i) => (
          <li key={i} className="project-item">
            <div className="project-title">
              <strong>{p.title}</strong>{" "}
              (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                LINK
              </a>
              )
            </div>

            <p><strong>Technologies:</strong> {p.technologies.join(', ')}</p>
            <p><strong>Problem:</strong> {p.problem}</p>
            <p><strong>Features:</strong> {p.features.join(', ')}</p>
            <p><strong>Architecture:</strong> {p.architecture}</p>
            <p><strong>What I learned:</strong> {p.learned.join(', ')}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
