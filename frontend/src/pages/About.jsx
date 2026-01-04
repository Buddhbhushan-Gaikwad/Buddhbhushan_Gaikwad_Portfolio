import React from 'react'

export default function About(){
  return (
    <section>
      <div className="card">
        <h2>About Me</h2>
        <p>Final-year B.Tech student focusing on backend development and testing. I build and test simple backend services with Java and Spring Boot, connect them to React frontends, and practice automation testing for reliability.</p>
      </div>

      <div className="card">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div>
            <strong>Programming Languages</strong>
            <ul>
              <li>Java</li>
              <li>JavaScript (basic)</li>
              <li>SQL</li>
            </ul>
          </div>

          <div>
            <strong>Frontend</strong>
            <ul>
              <li>React (components, hooks, API integration)</li>
            </ul>
          </div>

          <div>
            <strong>Backend</strong>
            <ul>
              <li>Java, Spring Boot, REST APIs</li>
            </ul>
          </div>

          <div>
            <strong>Databases</strong>
            <ul>
              <li>MySQL, MongoDB</li>
            </ul>
          </div>

          <div>
            <strong>Testing & Automation</strong>
            <ul>
              <li>Selenium (basic), TestNG, REST Assured</li>
            </ul>
          </div>

          <div>
            <strong>Tools & Concepts</strong>
            <ul>
              <li>Git, GitHub, Maven, Postman, Jenkins (basic)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}