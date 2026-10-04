'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface SkillCategory {
  command: string
  output: string
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    command: 'skills --category languages',
    output: 'Python | TypeScript | Go | Rust | Java | SQL',
    color: '#00f5ff',
  },
  {
    command: 'skills --category ai-ml',
    output: 'LangGraph | LangChain | RAG | GraphRAG | LLMs | Transformers | LSTM | Isolation Forest',
    color: '#7c3aed',
  },
  {
    command: 'skills --category infrastructure',
    output: 'Docker | Kubernetes | Apache Kafka | Redis | PostgreSQL | Neo4j | Qdrant | TimescaleDB',
    color: '#0066ff',
  },
  {
    command: 'skills --category observability',
    output: 'OpenTelemetry | Prometheus | Grafana | Distributed Tracing',
    color: '#f97316',
  },
  {
    command: 'skills --category frameworks',
    output: 'FastAPI | Next.js 14 | React | Tailwind | SQLAlchemy | Alembic',
    color: '#10b981',
  },
  {
    command: 'skills --category testing',
    output: 'Pytest | 100% Coverage | Ruff | Mypy | Zero Lint Errors',
    color: '#f59e0b',
  },
]

function TerminalLine({
  category,
  delay,
  visible,
}: {
  category: SkillCategory
  delay: number
  visible: boolean
}) {
  const [cmdText, setCmdText] = useState('')
  const [outText, setOutText] = useState('')
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    if (!visible) return

    let cmdTimer: ReturnType<typeof setTimeout>
    let outTimer: ReturnType<typeof setTimeout>

    cmdTimer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setCmdText(category.command.slice(0, i + 1))
        i++
        if (i >= category.command.length) {
          clearInterval(interval)
          setShowOutput(true)

          let j = 0
          outTimer = setTimeout(() => {
            const outInterval = setInterval(() => {
              setOutText(category.output.slice(0, j + 1))
              j++
              if (j >= category.output.length) clearInterval(outInterval)
            }, 12)
          }, 200)
        }
      }, 20)
    }, delay)

    return () => {
      clearTimeout(cmdTimer)
      clearTimeout(outTimer)
    }
  }, [visible, category, delay])

  return (
    <div className="mb-4">
      <div className="flex items-start gap-2">
        <span className="text-[#00f5ff] font-mono text-sm select-none">$</span>
        <span className="font-mono text-sm text-slate-200">{cmdText}</span>
        {cmdText.length < category.command.length && visible && (
          <span className="typing-cursor" />
        )}
      </div>
      {showOutput && (
        <div className="flex items-start gap-2 mt-1 ml-4">
          <span style={{ color: category.color }} className="font-mono text-sm select-none">
            →
          </span>
          <span className="font-mono text-sm" style={{ color: category.color }}>
            {outText}
          </span>
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const timers: ReturnType<typeof setTimeout>[] = []
    skillCategories.forEach((_, i) => {
      const t = setTimeout(() => setVisibleCount(i + 1), i * 1200)
      timers.push(t)
    })
    return () => timers.forEach(clearTimeout)
  }, [inView])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 bg-[#050a0f] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00f5ff]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#00f5ff] font-mono text-sm">03.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">SKILL STACK</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
          </div>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-[#00f5ff]/20 shadow-2xl shadow-black/50"
        >
          {/* Terminal top bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a1628] border-b border-[#1a3a5c]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-slate-500 font-mono">dhanwanth@srmist ~ skill-matrix</span>
            <div className="w-16" />
          </div>

          {/* Terminal body */}
          <div className="bg-[#050a12] p-6 sm:p-8 min-h-[400px] scanline relative overflow-hidden">
            {/* Scan line overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#00f5ff]/1 to-transparent" />

            {/* Welcome line */}
            <div className="mb-6 text-slate-600 font-mono text-xs">
              <span className="text-[#00f5ff]/40">Last login:</span> Sun Oct 4 12:00:00 on ttys000
              <br />
              <span className="text-[#00f5ff]/40">Welcome to Skill Matrix v2.5.0</span>
            </div>

            {skillCategories.map((cat, i) => (
              <TerminalLine
                key={cat.command}
                category={cat}
                delay={0}
                visible={i < visibleCount}
              />
            ))}

            {/* Cursor at end */}
            {visibleCount >= skillCategories.length && (
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[#00f5ff] font-mono text-sm">$</span>
                <span className="typing-cursor" />
              </div>
            )}
          </div>
        </motion.div>

        {/* Skill bars — supplementary */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Python / FastAPI', pct: 92 },
            { name: 'LangGraph / LangChain', pct: 88 },
            { name: 'TypeScript / Next.js', pct: 85 },
            { name: 'Docker / Kubernetes', pct: 82 },
            { name: 'PostgreSQL / Redis', pct: 85 },
            { name: 'Apache Kafka', pct: 80 },
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-xl p-4 border border-[#00f5ff]/10"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-slate-400">{skill.name}</span>
                <span className="text-xs font-mono text-[#00f5ff]">{skill.pct}%</span>
              </div>
              <div className="h-1.5 bg-[#0f1f35] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.pct}%` } : {}}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#00f5ff] to-[#0066ff]"
                  style={{ boxShadow: '0 0 8px rgba(0,245,255,0.5)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
