import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="hero card">
      <h1>Buddhbhushan Gaikwad</h1>
      <p className="lead">Final-year B.Tech student focusing on Java backend development and full-stack fundamentals using React and Spring Boot.</p>
      <div className="buttons">
        <Link className="btn" to="/projects">View Projects</Link>
        <Link className="btn" to="/contact">Contact</Link>
        <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </div>

      <section style={{marginTop:20}} className="card">
        <h2>Quick intro</h2>
        <p>I build simple, testable backend services using Spring Boot and REST, and I connect them to React frontends. I also practice automation testing with Selenium and API testing with REST Assured.</p>
      </section>
    </section>
  )
}