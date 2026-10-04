'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 3, label: 'Production Projects', suffix: '' },
  { value: 100, label: 'Test Coverage', suffix: '%' },
  { value: 10, label: 'Microservices (Helios)', suffix: '+' },
  { value: 8.7, label: 'CGPA', suffix: '', decimals: 1 },
  { value: 5, label: 'Languages', suffix: '+' },
  { value: 0, label: 'Lint Errors', suffix: '' },
]

const timelineItems = [
  {
    year: '2023',
    title: 'Joined SRMIST',
    desc: 'Started B.Tech CSE at SRM Institute of Science and Technology',
    color: '#00f5ff',
  },
  {
    year: '2024',
    title: 'SWE-Agent',
    desc: 'Built autonomous coding agent with LangGraph, Docker sandbox, and GitHub API integration',
    color: '#0066ff',
  },
  {
    year: '2024',
    title: 'AEIMPS Platform',
    desc: 'Engineered enterprise GraphRAG platform with Neo4j, Qdrant, SAML SSO & RBAC',
    color: '#7c3aed',
  },
  {
    year: '2025',
    title: 'Helios AIOps',
    desc: 'Designed 10-microservice AIOps platform with ML anomaly detection & LLM root cause analysis',
    color: '#f97316',
  },
]

function CountUp({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const steps = 60
    const stepTime = duration / steps
    let current = 0
    const increment = target / steps

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(parseFloat(current.toFixed(decimals)))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, target, decimals])

  return (
    <div ref={ref} className="text-3xl font-black text-[#00f5ff] cyan-text-glow">
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </div>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-[#050a0f] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f5ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#00f5ff] font-mono text-sm">01.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">ABOUT ME</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
          </div>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-[#00f5ff]/10 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse" />
                <span className="text-[#00f5ff] font-mono text-xs uppercase tracking-widest">Bio</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-base mb-6">
                I&apos;m a <span className="text-[#00f5ff] font-semibold">3rd-year CSE student at SRMIST</span>{' '}
                (CGPA: <span className="text-[#00f5ff] font-semibold">8.7</span>) who builds systems that actually
                work in production. I don&apos;t prototype — I ship{' '}
                <span className="text-white font-semibold">autonomous AI agents</span>,{' '}
                <span className="text-white font-semibold">enterprise search platforms</span>, and{' '}
                <span className="text-white font-semibold">distributed AIOps systems</span> with 100% test
                coverage, zero lint errors, and full observability.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                I&apos;m training to be the engineer who{' '}
                <span className="text-[#00f5ff]">solves the problem</span>, not the one who describes it.
              </p>

              {/* Info chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['SRMIST', 'CSE', '3rd Year', 'CGPA: 8.7', 'Chennai'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-mono border border-[#00f5ff]/20 bg-[#00f5ff]/5 text-[#00f5ff]/70 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: 'spring' }}
                  className="glass rounded-xl p-4 border border-[#00f5ff]/10 hover:border-[#00f5ff]/30 transition-colors duration-300 group"
                >
                  <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  <p className="text-slate-500 text-xs mt-1 group-hover:text-slate-400 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-4 glass rounded-xl p-4 border border-[#0066ff]/20"
            >
              <p className="text-xs text-slate-500 font-mono mb-3">$ languages</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TypeScript', 'Go', 'Rust', 'Java', 'SQL'].map((lang) => (
                  <span
                    key={lang}
                    className="px-2 py-0.5 text-xs font-mono bg-[#0066ff]/10 border border-[#0066ff]/30 text-[#0066ff] rounded"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-lg font-bold text-white mb-8 font-mono">
            <span className="text-[#00f5ff]">/</span> Timeline
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff]/50 via-[#0066ff]/30 to-transparent" />

            <div className="space-y-8">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="relative flex gap-6 sm:gap-12 pl-12 sm:pl-20"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-2 sm:left-6 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: item.color, backgroundColor: `${item.color}22` }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  {/* Year */}
                  <span
                    className="text-xs font-mono font-bold shrink-0 mt-1"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </span>

                  {/* Content */}
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
