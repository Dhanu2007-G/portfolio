'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const standards = [
  '100% Statement Coverage',
  '0 Lint Errors (Ruff)',
  '0 Type Errors (Mypy)',
  'Docker Containerized',
  'Async Architecture',
  'Production DB Migrations',
  'REST API',
  'Observability',
]

const projects = ['SWE-Agent', 'AEIMPS', 'Helios']

// All pass for all
const matrix: boolean[][] = standards.map(() => [true, true, true])

function CheckMark({ visible, delay }: { visible: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={visible ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay, type: 'spring', stiffness: 400, damping: 15 }}
      className="flex items-center justify-center"
    >
      <span className="text-lg" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 245, 255, 0.8))' }}>
        ✅
      </span>
    </motion.div>
  )
}

export default function EngineeringMatrix() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="matrix"
      ref={sectionRef}
      className="relative py-24 bg-[#050a0f] overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#00f5ff] font-mono text-sm">04.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">ENGINEERING STANDARDS</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
          </div>
          <p className="text-slate-500 text-sm ml-10 font-mono">
            Every project. Every time. No exceptions.
          </p>
        </motion.div>

        {/* Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-[#00f5ff]/15"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0a1628] border-b border-[#1a3a5c]">
                <th className="text-left py-4 px-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
                  Standard
                </th>
                {projects.map((p) => (
                  <th
                    key={p}
                    className="text-center py-4 px-6 text-sm font-bold text-[#00f5ff] font-mono"
                  >
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {standards.map((standard, rowIdx) => (
                <motion.tr
                  key={standard}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + rowIdx * 0.07 }}
                  className={`border-b border-[#0f1f35] group ${
                    rowIdx % 2 === 0 ? 'bg-[#050a0f]' : 'bg-[#060c14]'
                  } hover:bg-[#0a1628] transition-colors duration-200`}
                >
                  <td className="py-4 px-6 text-sm text-slate-400 font-mono group-hover:text-slate-200 transition-colors">
                    {standard}
                  </td>
                  {matrix[rowIdx].map((passes, colIdx) => (
                    <td key={colIdx} className="py-4 px-6 text-center">
                      <CheckMark
                        visible={inView}
                        delay={0.4 + rowIdx * 0.07 + colIdx * 0.04}
                      />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Summary badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          {[
            { label: '24 / 24 checks passed', color: '#00f5ff' },
            { label: '100% compliance across all projects', color: '#10b981' },
            { label: 'Zero compromises', color: '#f97316' },
          ].map((badge) => (
            <span
              key={badge.label}
              className="text-xs font-mono px-4 py-2 rounded-full border"
              style={{
                color: badge.color,
                borderColor: `${badge.color}40`,
                backgroundColor: `${badge.color}10`,
              }}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
