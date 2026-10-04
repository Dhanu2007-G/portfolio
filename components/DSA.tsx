'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const TOTAL = 300
const SOLVED = 47 // placeholder — update as you progress

const categories = [
  { name: 'Arrays & Hashing', solved: 15, total: 40, color: '#00f5ff' },
  { name: 'Two Pointers', solved: 8, total: 20, color: '#0066ff' },
  { name: 'Sliding Window', solved: 5, total: 15, color: '#7c3aed' },
  { name: 'Trees & BST', solved: 6, total: 35, color: '#10b981' },
  { name: 'Dynamic Programming', solved: 5, total: 50, color: '#f97316' },
  { name: 'Graphs & BFS/DFS', solved: 5, total: 40, color: '#f59e0b' },
  { name: 'Linked Lists', solved: 3, total: 20, color: '#ec4899' },
  { name: 'Binary Search', solved: 0, total: 30, color: '#06b6d4' },
  { name: 'Heap / Priority Queue', solved: 0, total: 20, color: '#84cc16' },
  { name: 'Backtracking', solved: 0, total: 30, color: '#a78bfa' },
]

function ProgressRing({ solved, total, size = 180 }: { solved: number; total: number; size?: number }) {
  const ref = useRef<SVGCircleElement>(null)
  const inView = useInView(ref, { once: true })
  const radius = (size - 24) / 2
  const circumference = 2 * Math.PI * radius
  const progress = solved / total
  const offset = circumference - progress * circumference

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#0f1f35"
          strokeWidth="12"
        />
        {/* Progress ring */}
        <motion.circle
          ref={ref}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#00f5ff"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          style={{ filter: 'drop-shadow(0 0 8px rgba(0, 245, 255, 0.6))' }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-black text-[#00f5ff]">{solved}</div>
        <div className="text-xs text-slate-500 font-mono">/ {total}</div>
      </div>
    </div>
  )
}

function CalendarGrid() {
  // Generate 16 weeks × 7 days = 112 days of mock streak data
  const days = Array.from({ length: 112 }, (_, i) => {
    // First 47 days have some solved, rest empty
    if (i < SOLVED) return Math.random() > 0.3 ? 'solved' : 'missed'
    if (i < SOLVED + 10) return Math.random() > 0.7 ? 'solved' : 'empty'
    return 'empty'
  })

  const weeks = []
  for (let w = 0; w < 16; w++) {
    weeks.push(days.slice(w * 7, (w + 1) * 7))
  }

  const colorMap = {
    solved: '#00f5ff',
    missed: '#0f1f35',
    empty: '#0a1628',
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 min-w-max">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (wi * 7 + di) * 0.005 }}
                title={day === 'solved' ? 'Solved' : day === 'missed' ? 'Missed' : 'Not started'}
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: colorMap[day as keyof typeof colorMap],
                  boxShadow: day === 'solved' ? '0 0 4px rgba(0, 245, 255, 0.5)' : 'none',
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DSA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="dsa"
      ref={sectionRef}
      className="relative py-24 bg-[#050a0f] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#00f5ff] font-mono text-sm">05.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">DSA TRACKER</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
          </div>
          <p className="text-slate-500 text-sm ml-10 font-mono">
            Practicing 300 curated problems (Blind 75 + NeetCode 150 superset)
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-1 flex flex-col items-center glass rounded-2xl p-8 border border-[#00f5ff]/15"
          >
            <ProgressRing solved={SOLVED} total={TOTAL} />
            <p className="mt-4 text-slate-400 text-sm font-mono text-center">
              Problems Solved
            </p>
            <div className="mt-4 flex gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#00f5ff]/30 text-[#00f5ff] bg-[#00f5ff]/10">
                {Math.round((SOLVED / TOTAL) * 100)}% Complete
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#f97316]/30 text-[#f97316] bg-[#f97316]/10">
                {TOTAL - SOLVED} Remaining
              </span>
            </div>

            {/* Streak */}
            <div className="mt-6 w-full glass rounded-xl p-4 border border-[#0f1f35]">
              <div className="flex justify-between text-xs font-mono text-slate-500 mb-1">
                <span>Current Streak</span>
                <span className="text-[#f97316]">🔥 7 days</span>
              </div>
              <div className="flex justify-between text-xs font-mono text-slate-500">
                <span>Best Streak</span>
                <span className="text-[#00f5ff]">14 days</span>
              </div>
            </div>
          </motion.div>

          {/* Category Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 glass rounded-2xl p-6 border border-[#00f5ff]/15"
          >
            <h3 className="text-sm font-mono text-slate-400 mb-5">Category Breakdown</h3>
            <div className="space-y-3">
              {categories.map((cat, i) => (
                <div key={cat.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400 font-mono">{cat.name}</span>
                    <span className="text-xs font-mono" style={{ color: cat.color }}>
                      {cat.solved}/{cat.total}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#0f1f35] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(cat.solved / cat.total) * 100}%` } : {}}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: cat.color,
                        boxShadow: `0 0 6px ${cat.color}88`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Streak Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-6 border border-[#00f5ff]/15"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono text-slate-400">Activity — Last 16 Weeks</h3>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
              <span>Less</span>
              {['#0a1628', '#004a55', '#007088', '#00c4cc', '#00f5ff'].map((c) => (
                <div
                  key={c}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: c }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
          <CalendarGrid />
        </motion.div>
      </div>
    </section>
  )
}
