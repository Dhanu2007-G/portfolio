'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiCheckCircle, FiActivity, FiTarget } from 'react-icons/fi'

const TOTAL = 300
const SOLVED = 85

const categories = [
  { name: 'Arrays & Hashing', solved: 22, total: 40, color: '#ff003c' },
  { name: 'Two Pointers & Sliding Window', solved: 15, total: 35, color: '#ff3366' },
  { name: 'Trees & Binary Search Trees', solved: 14, total: 35, color: '#e11d48' },
  { name: 'Dynamic Programming', solved: 12, total: 50, color: '#be123c' },
  { name: 'Graphs & BFS/DFS', solved: 12, total: 45, color: '#fb7185' },
  { name: 'Linked Lists & Binary Search', solved: 10, total: 35, color: '#fda4af' },
  { name: 'Heaps, Intervals & Backtracking', solved: 0, total: 60, color: '#881337' },
]

function ProgressRing({ solved, total, size = 200 }: { solved: number; total: number; size?: number }) {
  const ref = useRef<SVGCircleElement>(null)
  const inView = useInView(ref, { once: true })
  const radius = (size - 28) / 2
  const circumference = 2 * Math.PI * radius
  const progress = solved / total
  const offset = circumference - progress * circumference

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1f0917"
          strokeWidth="14"
        />
        <motion.circle
          ref={ref}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#ff003c"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
          style={{ filter: 'drop-shadow(0 0 12px rgba(255, 0, 60, 0.8))' }}
        />
      </svg>
      <div className="absolute text-center flex flex-col items-center justify-center">
        <div className="text-4xl font-black font-mono text-white tracking-tight">
          {solved}
        </div>
        <div className="text-xs font-mono text-[#ff3366] uppercase tracking-wider font-bold">
          OF {total} SOLVED
        </div>
        <div className="text-[10px] font-mono text-slate-400 mt-1">
          {Math.round((solved / total) * 100)}% COMPLETE
        </div>
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
            <span className="text-[#ff003c] font-mono text-xs sm:text-sm font-bold tracking-widest">[ 06. ALGORITHMIC RIGOR ]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff003c]/40 via-[#ff003c]/10 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight">
            DSA 300 <span className="text-[#ff003c]">MASTER TRACKER</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans max-w-2xl mt-3">
            Disciplined daily algorithmic training across NeetCode 150, Blind 75, and Grind 75 in C++ & Python.
          </p>
        </motion.div>

        {/* DSA Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Ring Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 glass-red-card rounded-2xl p-8 border border-[#ff003c]/30 flex flex-col items-center justify-center text-center space-y-6 hud-corner"
          >
            <ProgressRing solved={SOLVED} total={TOTAL} size={220} />

            <div className="space-y-2 max-w-sm">
              <h3 className="text-lg font-bold text-white font-mono">
                Curated Problem Engine
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Superset encompassing all essential data structures, amortized complexity, graph algorithms, and DP state transitions.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-[#ff003c]/20 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-white">
                <FiTarget className="text-[#ff003c]" /> Target: Top Tier Product SWE
              </span>
              <span className="text-[#ff003c] font-bold">C++ / Python</span>
            </div>
          </motion.div>

          {/* Breakdown Categories (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-red-card rounded-2xl p-6 sm:p-8 border border-[#ff003c]/30 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#ff003c]/20 pb-3">
              <span className="text-xs font-mono text-[#ff3366] font-bold uppercase tracking-wider">
                CATEGORY PROGRESSION
              </span>
              <span className="text-xs font-mono text-slate-400">
                ACTIVE COHORT
              </span>
            </div>

            <div className="space-y-3.5">
              {categories.map((cat) => {
                const pct = Math.round((cat.solved / cat.total) * 100)
                return (
                  <div key={cat.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-semibold">{cat.name}</span>
                      <span className="text-slate-400">
                        <strong className="text-[#ff3366]">{cat.solved}</strong> / {cat.total} ({pct}%)
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#1c0817] rounded-full overflow-hidden border border-[#ff003c]/20">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${pct}%` } : {}}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[#ff003c] to-[#ff3366] shadow-[0_0_10px_rgba(255,0,60,0.6)]"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
