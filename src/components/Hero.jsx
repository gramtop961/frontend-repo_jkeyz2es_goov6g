import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            Tech Educator • Story-driven Developer
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Innovative storytelling at the intersection of code and creativity
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            I craft interactive tutorials, developer tools, and immersive learning experiences. 
            My work blends narrative, design, and engineering to make complex topics feel simple and fun.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="pointer-events-auto inline-flex items-center rounded-lg bg-black px-4 py-2 text-white shadow-sm transition hover:opacity-90"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center rounded-lg bg-white px-4 py-2 text-gray-900 ring-1 ring-black/10 transition hover:bg-gray-50"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
