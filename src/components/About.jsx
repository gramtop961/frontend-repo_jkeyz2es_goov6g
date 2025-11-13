import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="prose prose-gray mx-auto max-w-none prose-p:leading-relaxed"
        >
          <h2 className="text-center">About</h2>
          <p>
            I'm a developer-educator who believes learning should feel like an adventure. My approach blends
            storytelling, design, and engineering to help people build intuition—so concepts stick for life.
          </p>
          <p>
            Over the years, I've created courses, tools, and content that reach millions of learners. I focus on
            modern web technologies, UI engineering, and creative coding.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
