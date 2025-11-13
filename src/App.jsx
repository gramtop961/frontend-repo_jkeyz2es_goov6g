import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Creator.dev — crafted with care.
        </div>
      </footer>
    </div>
  )
}

export default App
