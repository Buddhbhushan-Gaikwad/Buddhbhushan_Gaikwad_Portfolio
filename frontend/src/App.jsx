import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import BackendArchitecture from './pages/BackendArchitecture'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">Buddhbhushan Gaikwad</Link>
          <nav>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/architecture">Backend Arch</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />          <Route path="/architecture" element={<BackendArchitecture />} />          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Buddhbhushan Gaikwad</div>
      </footer>
    </div>
  )
}