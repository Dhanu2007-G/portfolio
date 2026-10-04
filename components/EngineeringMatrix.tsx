'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCheck, FiShield, FiCpu, FiTerminal, FiAward } from 'react-icons/fi'

const standards = [
  { name: '100% Hermetic Statement Coverage', desc: 'Zero skipped tests, zero live network mocks failing' },
  { name: '0 Ruff Lint & Format Errors', desc: 'Strict PEP-8, flake8, and import sorting enforcement' },
  { name: '0 Mypy Static Type Errors', desc: 'Strict static type validation across entire codebases' },
  { name: 'Docker Sandbox Security', desc: '--cap-drop ALL, read-only rootfs, non-root execution' },
  { name: 'Async Event-Driven Architecture', desc: 'AsyncIO concurrency, Redis streams, Apache Kafka' },
  { name: 'Production Database Migrations', desc: 'Alembic versioned schemas, zero schema drift' },
  { name: 'Full Observability & Tracing', desc: 'OpenTelemetry, Prometheus metrics, structured logs' },
  { name: 'Hermetic CI/CD Automated Pipelines', desc: 'GitHub Actions verifying every commit before merge' },
]

const matrix = [
  { name: 'SWE-Agent', coverage: '98.9%', ruff: '0 Errors', mypy: '0 Errors', docker: 'Isolated', asyncArch: 'AsyncIO', db: 'Postgres', o11y: 'Tracing', ci: 'Verified' },
  { name: 'AEIMPS', coverage: '100.0%', ruff: '0 Errors', mypy: '0 Errors', docker: 'Compose', asyncArch: 'FastAPI', db: 'Neo4j+Qdrant', o11y: 'Audit Logs', ci: 'Verified' },
  { name: 'Helios AIOps', coverage: '100.0%', ruff: '0 Errors', mypy: '0 Errors', docker: 'K8s/Docker', asyncArch: 'Kafka', db: 'TimescaleDB', o11y: 'OpenTelemetry', ci: 'Verified' },
]

export default function EngineeringMatrix() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="standards"
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
            <span className="text-[#ff003c] font-mono text-xs sm:text-sm font-bold tracking-widest">[ 05. RIGOR & VERIFIABILITY ]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff003c]/40 via-[#ff003c]/10 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight">
            ENGINEERING STANDARDS <span className="text-[#ff003c]">MATRIX</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans max-w-2xl mt-3">
            Why my codebases stand in the top 1% of Indian engineering students: verified test coverage, type safety, and zero compromises.
          </p>
        </motion.div>

        {/* Comparison Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-red-card rounded-2xl border border-[#ff003c]/30 overflow-hidden hud-corner shadow-[0_15px_50px_rgba(255,0,60,0.15)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs sm:text-sm">
              <thead className="bg-[#140610] text-[#ff3366] border-b border-[#ff003c]/30 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-4 px-6 font-bold">Standard / Metric</th>
                  <th className="py-4 px-6 font-bold text-center">SWE-Agent</th>
                  <th className="py-4 px-6 font-bold text-center">AEIMPS</th>
                  <th className="py-4 px-6 font-bold text-center">Helios AIOps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ff003c]/15 text-slate-300">
                {standards.map((s, i) => (
                  <tr key={s.name} className="hover:bg-[#ff003c]/5 transition-colors">
                    <td className="py-4 px-6 font-medium text-white">
                      <div>{s.name}</div>
                      <div className="text-[11px] text-slate-500 font-sans">{s.desc}</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ff003c]/10 text-[#ff3366] border border-[#ff003c]/30 font-bold">
                        <FiCheck className="text-[#ff003c]" /> PASSED
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ff003c]/10 text-[#ff3366] border border-[#ff003c]/30 font-bold">
                        <FiCheck className="text-[#ff003c]" /> PASSED
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ff003c]/10 text-[#ff3366] border border-[#ff003c]/30 font-bold">
                        <FiCheck className="text-[#ff003c]" /> PASSED
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Callout Banner */}
          <div className="px-6 py-4 bg-[#140610] border-t border-[#ff003c]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-white">
              <FiShield className="text-[#ff003c] text-base" />
              <span>Zero skipped tests. Zero flaky timeouts. Fully reproducible locally via Docker.</span>
            </span>
            <span className="text-[#ff003c] font-bold">
              VERIFIED 2026 BENCHMARK
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
