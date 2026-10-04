'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiUsers, FiCalendar, FiMapPin, FiCheckCircle, FiExternalLink, FiTerminal, FiLayers } from 'react-icons/fi'
import { SiGooglecloud, SiGit, SiDocker } from 'react-icons/si'

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-28 bg-[#040204] overflow-hidden cyber-grid-red"
    >
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#ff003c]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[#ff003c] font-mono text-xs sm:text-sm font-bold tracking-widest">[ 02. EXPERIENCE & LEADERSHIP ]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff003c]/40 via-[#ff003c]/10 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight">
            COMMUNITY LEADERSHIP & <span className="text-[#ff003c]">IMPACT</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans max-w-2xl mt-3">
            Active developer leadership, campus community organization, and technical contributions bridging industry AI tools with the student ecosystem.
          </p>
        </motion.div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          
          {/* Card 1: GDG On Campus SRMIST KTR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass-red-card rounded-2xl p-6 sm:p-10 border-2 border-[#ff003c]/40 relative overflow-hidden hud-corner group shadow-[0_10px_50px_rgba(255,0,60,0.15)]"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff003c]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#ff003c]/20">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff003c]/10 border border-[#ff003c]/40 text-xs font-mono text-[#ff3366] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#ff003c] animate-pulse" />
                  VERIFIED GDG ROLE // 2025
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white font-mono flex items-center gap-3">
                  Google Developer Groups (GDG) On Campus
                </h3>
                
                <div className="text-base sm:text-lg font-bold text-[#ff003c] font-mono">
                  Technical Member & Event Volunteer • SRMIST KTR Chapter
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="text-[#ff003c]" /> Chennai, India
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="text-[#ff003c]" /> 2025 Cohort
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiUsers className="text-[#ff003c]" /> 500+ Student Attendees Engaged
                  </span>
                </div>
              </div>

              {/* Badge Pills */}
              <div className="flex flex-wrap lg:flex-col items-start gap-2.5">
                <div className="px-4 py-2 rounded-xl bg-[#180612] border border-[#ff003c]/50 text-xs font-mono text-white flex items-center gap-2 shadow-[0_0_15px_rgba(255,0,60,0.25)]">
                  <FiAward className="text-[#ff003c] text-base" />
                  <span>Verified GDG Badge</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#180612] border border-[#ff003c]/50 text-xs font-mono text-white flex items-center gap-2 shadow-[0_0_15px_rgba(255,0,60,0.25)]">
                  <SiGooglecloud className="text-[#ff003c] text-base" />
                  <span>Gemini Enterprise Ready (GEAR)</span>
                </div>
              </div>
            </div>

            {/* Bullets & Impact Grid */}
            <div className="pt-6 space-y-4">
              <div className="text-xs font-mono text-[#ff003c] uppercase tracking-wider font-bold">
                KEY RESPONSIBILITIES & MEASURABLE OUTCOMES:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#12050e] border border-[#ff003c]/20 space-y-1.5">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <FiCheckCircle className="text-[#ff003c]" />
                    Workshops & Study Jams
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Volunteered in organizing hands-on technical workshops, developer meetups, and study jams engaging <strong className="text-white">500+ student attendees</strong> on cloud technologies, Git practices, and modern developer tooling.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#12050e] border border-[#ff003c]/20 space-y-1.5">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <FiCheckCircle className="text-[#ff003c]" />
                    Peer Mentorship & Open-Source
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Collaborated directly with core organizers to lead interactive peer-learning sessions, code reviews, and structured open-source contribution drives across campus.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#12050e] border border-[#ff003c]/20 space-y-1.5">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <FiCheckCircle className="text-[#ff003c]" />
                    Cloud & AI Tooling Evangelism
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Facilitated student adoption of Google Cloud technologies, Vertex AI, Gemini models, and modern deployment pipelines via live demonstrations and code walkthroughs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#12050e] border border-[#ff003c]/20 space-y-1.5">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <FiCheckCircle className="text-[#ff003c]" />
                    Technical Event Operations
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Managed logistics, stage moderation, live Q&A sessions, and technical lab environments during flagship hackathons and community conventions at SRMIST KTR.
                  </p>
                </div>
              </div>

              {/* External Profile Links */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href="https://g.dev/dhanwanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ff003c] hover:text-[#ff3366] transition-colors underline"
                >
                  <span>View Public Google Developer Profile</span>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Autonomous Systems Engineering (SWE-Agent / AEIMPS / Helios) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-red-card rounded-2xl p-6 sm:p-8 border border-[#ff003c]/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ff003c]/20">
              <div>
                <span className="text-xs font-mono text-[#ff003c] uppercase">INDEPENDENT R&D & SYSTEMS ARCHITECTURE</span>
                <h3 className="text-xl font-bold text-white font-mono mt-0.5">
                  Autonomous AI Engineering & Distributed Systems Architect
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">2024 – PRESENT</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
              Architected 3 production-grade systems from scratch with zero compromises: end-to-end coding agent with LangGraph and secure Docker sandboxes (SWE-Agent), multimodal enterprise GraphRAG engine with Neo4j and Qdrant (AEIMPS), and real-time Kafka-based microservice self-healing engine (Helios AIOps). Maintained strict quality gates across every repo: <strong className="text-white">100% statement coverage, 0 Ruff errors, and 0 Mypy warnings</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
