'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'

const contactLinks = [
  {
    label: 'Email',
    value: 'dhanwanthjangam@gmail.com',
    href: 'mailto:dhanwanthjangam@gmail.com',
    icon: FiMail,
    color: '#00f5ff',
    glow: 'rgba(0, 245, 255, 0.3)',
  },
  {
    label: 'LinkedIn',
    value: 'jangam-dhanwanth',
    href: 'https://www.linkedin.com/in/jangam-dhanwanth-766437319/',
    icon: FiLinkedin,
    color: '#0066ff',
    glow: 'rgba(0, 102, 255, 0.3)',
  },
  {
    label: 'GitHub',
    value: 'Dhanu2007-G',
    href: 'https://github.com/Dhanu2007-G',
    icon: FiGithub,
    color: '#7c3aed',
    glow: 'rgba(124, 58, 237, 0.3)',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    // Mock submit — replace with actual form service
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-[#050a0f] overflow-hidden"
    >
      {/* Background gradient blob */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, rgba(0,102,255,0.04) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#00f5ff]/30" />
            <span className="text-[#00f5ff] font-mono text-sm">07.</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#00f5ff]/30" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-xl sm:text-2xl text-[#00f5ff]/70 font-mono italic">
            &ldquo;Let&rsquo;s build something that matters.&rdquo;
          </p>
          <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
            Open to internships, research collaborations, and ambitious engineering challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact buttons */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 0 30px ${link.glow}, 0 0 60px ${link.glow.replace('0.3', '0.1')}`,
                  }}
                  className="flex items-center gap-4 p-5 glass rounded-2xl border border-[#1a3a5c] hover:border-opacity-50 transition-all duration-300 group"
                  style={{ '--hover-border': link.color } as React.CSSProperties}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${link.color}15`, border: `1px solid ${link.color}40` }}
                  >
                    <Icon size={20} style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono mb-0.5">{link.label}</p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: link.color, boxShadow: `0 0 8px ${link.color}` }}
                    />
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6 border border-[#00f5ff]/15"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center mb-4"
                >
                  <FiCheck size={32} className="text-[#00f5ff]" />
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">Message Received!</h3>
                <p className="text-slate-500 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-sm font-mono text-slate-400 mb-2">
                  <span className="text-[#00f5ff]">&gt;</span> Send a message
                </h3>
                <div>
                  <label className="text-xs font-mono text-slate-500 mb-1 block">name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#0f1f35] border border-[#1a3a5c] focus:border-[#00f5ff]/50 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors duration-200 placeholder:text-slate-600 font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-500 mb-1 block">email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#0f1f35] border border-[#1a3a5c] focus:border-[#00f5ff]/50 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors duration-200 placeholder:text-slate-600 font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-500 mb-1 block">message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to build together?"
                    className="w-full bg-[#0f1f35] border border-[#1a3a5c] focus:border-[#00f5ff]/50 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors duration-200 placeholder:text-slate-600 font-mono resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 bg-[#00f5ff] text-[#050a0f] font-bold py-3 rounded-lg text-sm transition-all duration-200 disabled:opacity-60"
                  style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' }}
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#050a0f]/30 border-t-[#050a0f] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="section-divider mb-8" />
          <p className="text-slate-600 text-xs font-mono">
            Built with Next.js 14, TypeScript, Tailwind CSS & Framer Motion
          </p>
          <p className="text-slate-700 text-xs font-mono mt-1">
            © 2025 Jangam Dhanwanth. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
