import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Film, PenTool } from 'lucide-react'

const projects = [
  {
    title: 'Narrative Code Labs',
    tag: 'Open Source',
    icon: Code2,
    description: 'Experimental developer tools built as interactive stories that teach concepts by doing.',
  },
  {
    title: 'Cinematic Tutorials',
    tag: 'Content',
    icon: Film,
    description: 'High-production learning series that combine scripting, visuals, and code in a cohesive arc.',
  },
  {
    title: 'Playful UI Kits',
    tag: 'Design',
    icon: PenTool,
    description: 'Component systems with micro-interactions designed for delightful developer experiences.',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Work</h2>
          <p className="mt-3 text-gray-600">Selected projects that showcase technical depth and storytelling craft.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 * idx, duration: 0.5 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-black p-2 text-white"><p.icon size={20} /></span>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-600">{p.tag}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <button className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 underline-offset-4 hover:underline">
                View details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
