'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiMapPin, FiSend, FiCheck, FiFileText, FiAward } from 'react-icons/fi'

interface ContactProps {
  onOpenResume?: () => void
}

export default function Contact({ onOpenResume }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  function handleCopyPhone() {
    navigator.clipboard.writeText('+91 9849800927')
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Open direct mailto
    const subject = encodeURIComponent(`Internship Inquiry: ${form.name}`)
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:dhanwanthjangam@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 bg-[#040204] overflow-hidden cyber-grid-red"
    >
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#ff003c]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c0817] border border-[#ff003c]/40 text-xs font-mono text-[#ff3366] font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff003c] animate-pulse" />
            COMMUNICATION CHANNELS // OPEN
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight">
            INITIATE <span className="text-[#ff003c]">COMMUNICATION</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans mt-3">
            Looking for an elite AI / Systems Engineering Intern who writes production-ready code from Day 1? Let’s connect immediately.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 glass-red-card rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between hud-corner"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                <span>DIRECT REACH</span>
                <span className="text-xs text-[#ff003c] font-mono px-2 py-0.5 rounded bg-[#ff003c]/10 border border-[#ff003c]/30">
                  FAST RESPONSE
                </span>
              </h3>

              <div className="space-y-3 font-mono text-xs sm:text-sm">
                {/* Email */}
                <a
                  href="mailto:dhanwanthjangam@gmail.com"
                  className="p-3.5 rounded-xl bg-[#12050f] border border-[#ff003c]/20 hover:border-[#ff003c]/60 flex items-center gap-3.5 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#ff003c]/10 text-[#ff003c] group-hover:bg-[#ff003c] group-hover:text-white transition-colors">
                    <FiMail className="text-base" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-slate-500 uppercase">Primary Email</div>
                    <div className="truncate text-white font-semibold">dhanwanthjangam@gmail.com</div>
                  </div>
                </a>

                {/* College Email */}
                <a
                  href="mailto:dj1633@srmist.edu.in"
                  className="p-3.5 rounded-xl bg-[#12050f] border border-[#ff003c]/20 hover:border-[#ff003c]/60 flex items-center gap-3.5 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#ff003c]/10 text-[#ff003c] group-hover:bg-[#ff003c] group-hover:text-white transition-colors">
                    <FiMail className="text-base" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-slate-500 uppercase">Institutional Email</div>
                    <div className="truncate text-white font-semibold">dj1633@srmist.edu.in</div>
                  </div>
                </a>

                {/* Phone */}
                <div
                  onClick={handleCopyPhone}
                  className="p-3.5 rounded-xl bg-[#12050f] border border-[#ff003c]/20 hover:border-[#ff003c]/60 flex items-center justify-between gap-3.5 text-slate-300 hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#ff003c]/10 text-[#ff003c] group-hover:bg-[#ff003c] group-hover:text-white transition-colors">
                      <FiPhone className="text-base" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">Mobile & WhatsApp</div>
                      <div className="text-white font-semibold">+91 9849800927</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#ff003c] px-2 py-1 rounded bg-[#ff003c]/10 border border-[#ff003c]/30">
                    {copiedPhone ? 'COPIED!' : 'CLICK TO COPY'}
                  </span>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-[#12050f] border border-[#ff003c]/20 flex items-center gap-3.5 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                    <FiMapPin className="text-base" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Locations</div>
                    <div className="text-white font-semibold">Chennai / Andhra Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & Resume CTA */}
            <div className="pt-4 border-t border-[#ff003c]/20 space-y-3">
              <button
                onClick={onOpenResume}
                className="w-full py-3 rounded-xl bg-[#ff003c] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#ff1a40] shadow-[0_0_20px_rgba(255,0,60,0.5)] transition-all"
              >
                <FiFileText />
                <span>INSPECT VERIFIED RESUME (PDF)</span>
              </button>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/jangam-dhanwanth-766437319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#160612] text-slate-200 border border-[#ff003c]/30 hover:border-[#ff003c] hover:text-[#ff003c] text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <FiLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Dhanu2007-G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#160612] text-slate-200 border border-[#ff003c]/30 hover:border-[#ff003c] hover:text-[#ff003c] text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Message Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-red-card rounded-2xl p-6 sm:p-10 border border-[#ff003c]/30 flex flex-col justify-between"
          >
            <div className="space-y-2 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                SEND DIRECT RECRUITER TRANSMISSION
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans">
                Submitting directly launches a pre-filled client mailto payload directly to <strong className="text-white">dhanwanthjangam@gmail.com</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs sm:text-sm">
              <div>
                <label className="block text-[11px] text-[#ff3366] uppercase mb-1.5 font-bold">
                  Your Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Sarvam AI / Razorpay Recruiting"
                  className="w-full px-4 py-3 rounded-xl bg-[#0f040c] border border-[#ff003c]/30 text-white focus:outline-none focus:border-[#ff003c] transition-colors placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#ff3366] uppercase mb-1.5 font-bold">
                  Your Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="recruiter@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0f040c] border border-[#ff003c]/30 text-white focus:outline-none focus:border-[#ff003c] transition-colors placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#ff3366] uppercase mb-1.5 font-bold">
                  Transmission / Internship Opportunity *
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role, technical challenge, or team..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0f040c] border border-[#ff003c]/30 text-white focus:outline-none focus:border-[#ff003c] transition-colors placeholder:text-slate-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#ff003c] text-white font-mono font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#ff1a40] shadow-[0_0_25px_rgba(255,0,60,0.6)] transition-all"
              >
                <FiSend />
                <span>SEND DIRECT TRANSMISSION</span>
              </button>
            </form>

            <div className="pt-4 border-t border-[#ff003c]/15 text-[11px] font-mono text-slate-500 text-center">
              Response SLA: &lt; 12 Hours • Confidential Dossier
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
