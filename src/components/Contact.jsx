import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState({ state: 'idle' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus({ state: 'success' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let’s build something</h2>
          <p className="mt-3 text-gray-600">Speaking invites, collabs, or project inquiries—say hello!</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <input name="subject" className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" required rows="5" className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black" />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button disabled={status.state==='loading'} className="rounded-lg bg-black px-4 py-2 text-white transition hover:opacity-90 disabled:opacity-50">
              {status.state==='loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status.state==='success' && <p className="text-sm text-green-600">Sent! I’ll get back soon.</p>}
            {status.state==='error' && <p className="text-sm text-red-600">{status.message}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
