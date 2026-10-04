'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiGitCommit, FiStar, FiGitPullRequest, FiCode, FiExternalLink } from 'react-icons/fi'

const statCards = [
  { label: 'Public Repositories', value: '14+', icon: FiCode, color: '#ff003c' },
  { label: 'Verified Tests Passed', value: '500+', icon: FiGitCommit, color: '#ff3366' },
  { label: 'Statement Coverage', value: '100%', icon: FiStar, color: '#e11d48' },
  { label: 'Languages & Stacks', value: '8+', icon: FiGitPullRequest, color: '#fb7185' },
]

export default function GitHubStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-28 bg-[#040204] overflow-hidden cyber-grid-red"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[#ff003c] font-mono text-xs sm:text-sm font-bold tracking-widest">[ 07. TELEMETRY & OPEN SOURCE ]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff003c]/40 via-[#ff003c]/10 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight">
            GITHUB REPOS & <span className="text-[#ff003c]">CONTRIBUTIONS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans max-w-2xl mt-3">
            Active version control telemetry and production commits across open-source agentic platforms.
          </p>
        </motion.div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="glass-red-card rounded-2xl p-6 border border-[#ff003c]/20 hover:border-[#ff003c]/60 transition-all text-center group shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <div
                className="text-4xl sm:text-5xl font-black font-mono mb-2 group-hover:scale-105 transition-transform drop-shadow-[0_0_20px_rgba(255,0,60,0.6)]"
                style={{ color: card.color }}
              >
                {card.value}
              </div>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub Terminal Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-red-card rounded-2xl p-6 sm:p-10 border border-[#ff003c]/30 flex flex-col sm:flex-row items-center justify-between gap-6 hud-corner"
        >
          <div className="flex items-center gap-5 text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#ff003c]/10 border-2 border-[#ff003c]/50 flex items-center justify-center text-white text-3xl shadow-[0_0_25px_rgba(255,0,60,0.3)] shrink-0">
              <FiGithub />
            </div>
            <div>
              <div className="text-xs font-mono text-[#ff3366] font-bold">GITHUB // DHANU2007-G</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mt-0.5">
                Jangam Dhanwanth
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Explore all active branches, test suites, and Docker sandboxes.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Dhanu2007-G"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#ff003c] text-white text-xs sm:text-sm font-mono font-bold flex items-center gap-2.5 hover:bg-[#ff1a40] shadow-[0_0_25px_rgba(255,0,60,0.6)] transition-all shrink-0"
          >
            <span>VISIT GITHUB PROFILE</span>
            <FiExternalLink />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
