'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiBookOpen, FiFileText, FiCheck, FiCpu, FiCompass, FiShield, FiTrendingUp } from 'react-icons/fi'
import Image from 'next/image'

interface AboutProps {
  onOpenResume?: () => void
}

const stats = [
  { value: 3, label: 'Production Repos', suffix: '' },
  { value: 100, label: 'Statement Coverage', suffix: '%' },
  { value: 10, label: 'Helios Microservices', suffix: '+' },
  { value: 8.7, label: 'SRMIST CGPA', suffix: '', decimals: 1 },
  { value: 500, label: 'GDG Attendees Impacted', suffix: '+' },
  { value: 0, label: 'Lint Errors Tolerated', suffix: '' },
]

export default function About({ onOpenResume }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 bg-[#040204] overflow-hidden cyber-grid-red"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff003c]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#99001f]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[#ff003c] font-mono text-xs sm:text-sm font-bold tracking-widest">[ 01. CORE DOSSIER ]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff003c]/40 via-[#ff003c]/10 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight">
            ENGINEERING PHILOSOPHY & <span className="text-[#ff003c]">BACKGROUND</span>
          </h2>
        </motion.div>

        {/* Top Grid: Bio Dossier & Portrait Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Deep Story & Philosophy (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-red-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hud-corner"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#ff003c] font-mono text-xs uppercase tracking-wider">
                <FiCompass />
                <span>ARCHITECTURAL MINDSET</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white font-mono leading-snug">
                I do not build fragile proof-of-concepts. I engineer resilient distributed systems.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently pursuing my B.Tech in Computer Science (Artificial Intelligence & Machine Learning) at <strong className="text-white">SRM Institute of Science and Technology</strong> with an <strong className="text-[#ff003c]">8.7 / 10.0 CGPA</strong>. My work sits at the exact intersection of autonomous AI agent execution, enterprise knowledge graphs (GraphRAG), and mission-critical telemetry engineering.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                While most undergraduate portfolios showcase generic wrappers around third-party APIs, my systems feature <strong className="text-white">custom Docker sandboxes with dropped Linux capabilities</strong>, <strong className="text-white">tri-hybrid retrieval pipelines with reciprocal rank fusion</strong>, and <strong className="text-white">event-driven streaming pipelines on Apache Kafka and TimescaleDB</strong>.
              </p>
            </div>

            {/* Core Competency Matrix Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#12050f] border border-[#ff003c]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                  <FiCpu className="text-base" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">Agentic Orchestration</div>
                  <div className="text-[11px] text-slate-400">LangGraph state machines, ReAct loops & AST symbol analysis</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12050f] border border-[#ff003c]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                  <FiTrendingUp className="text-base" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">GraphRAG & Vectors</div>
                  <div className="text-[11px] text-slate-400">Neo4j Cypher walks + Qdrant dense/sparse hybrid search</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12050f] border border-[#ff003c]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                  <FiShield className="text-base" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">Zero Tolerance CI/CD</div>
                  <div className="text-[11px] text-slate-400">100% statement coverage, hermetic mocking, 0 Ruff lint errors</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#12050f] border border-[#ff003c]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#ff003c]/10 text-[#ff003c]">
                  <FiAward className="text-base" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">Community & GDG</div>
                  <div className="text-[11px] text-slate-400">Technical member organizing workshops for 500+ attendees</div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-xl bg-[#ff003c] text-white text-xs font-mono font-bold flex items-center gap-2 hover:bg-[#ff1a40] shadow-[0_0_20px_rgba(255,0,60,0.5)] transition-all"
              >
                <FiFileText />
                <span>OPEN OFFICIAL RESUME</span>
              </button>
              <span className="text-xs text-slate-400 font-mono">
                Updated for 2025/2026 AI Internships
              </span>
            </div>
          </motion.div>

          {/* Right: Academic Record & Credentials Dossier (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
          >
            {/* Academic Breakdown Card */}
            <div className="glass-red-card rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-[#ff003c]/20 pb-3">
                <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
                  <FiBookOpen className="text-[#ff003c]" />
                  <span>ACADEMIC FOUNDATION</span>
                </div>
                <span className="text-[10px] font-mono text-[#ff003c] px-2 py-0.5 rounded bg-[#ff003c]/10 border border-[#ff003c]/30">
                  TOP 5% TIER
                </span>
              </div>

              {/* SRMIST */}
              <div className="space-y-1.5 border-l-2 border-[#ff003c] pl-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white font-mono">SRM Institute of Science & Tech</h4>
                  <span className="text-xs font-mono text-slate-400">2024 – 2028</span>
                </div>
                <p className="text-xs text-slate-300">
                  B.Tech in Computer Science & Engineering (AI & Machine Learning)
                </p>
                <div className="text-xs font-mono text-[#ff003c] font-black">
                  CGPA: 8.7 / 10.0
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Coursework: Deep Learning, NLP, Distributed Systems, Data Structures & Algorithms, DBMS, Operating Systems.
                </p>
              </div>

              {/* Class XII */}
              <div className="space-y-1 border-l-2 border-[#b3002a]/60 pl-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white font-mono">Ashwamedha Junior College, AP</h4>
                  <span className="text-xs font-mono text-slate-400">Class XII (AP Inter)</span>
                </div>
                <div className="text-xs font-mono text-slate-200">
                  Score: <strong className="text-white">935 / 1000</strong> (<span className="text-[#ff003c]">93.5%</span>)
                </div>
                <p className="text-[10px] text-slate-400">Board of Intermediate Education, Andhra Pradesh</p>
              </div>

              {/* Class X */}
              <div className="space-y-1 border-l-2 border-[#b3002a]/40 pl-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white font-mono">JCR Chaitanya High School, AP</h4>
                  <span className="text-xs font-mono text-slate-400">Class X (AP SSC)</span>
                </div>
                <div className="text-xs font-mono text-slate-200">
                  Score: <strong className="text-white">552 / 600</strong> (<span className="text-[#ff003c]">92.0%</span>)
                </div>
                <p className="text-[10px] text-slate-400">Board of Secondary Education, Andhra Pradesh</p>
              </div>
            </div>

            {/* Verified Badges Banner */}
            <div className="glass-red-card rounded-2xl p-5 border border-[#ff003c]/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff003c] to-[#99001f] flex items-center justify-center text-white text-xl shadow-[0_0_20px_rgba(255,0,60,0.5)] shrink-0">
                🏆
              </div>
              <div>
                <div className="text-xs font-mono text-[#ff003c] font-bold">GOOGLE CLOUD / DEEPMIND CREDENTIAL</div>
                <div className="text-sm font-bold text-white">Gemini Enterprise Ready Badge (GEAR)</div>
                <div className="text-[11px] text-slate-400 font-mono">Verified Google Developer Profile & GDG Member</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Metrics Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="glass-red p-5 rounded-2xl border border-[#ff003c]/20 hover:border-[#ff003c]/60 text-center transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="text-3xl sm:text-4xl font-black font-mono text-[#ff003c] group-hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
