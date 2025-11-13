import React from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 p-3 backdrop-blur">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-black" />
            <span>Creator.dev</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
            <a href="#about" className="opacity-80 hover:opacity-100">About</a>
            <a href="#speaking" className="opacity-80 hover:opacity-100">Speaking</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-lg bg-black px-3 py-1.5 text-sm text-white md:inline-block">Say Hello</a>
            <button className="md:hidden rounded-lg p-2 hover:bg-black/5"><Menu size={20} /></button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
