'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload, FiExternalLink, FiFileText, FiAward, FiCheckCircle } from 'react-icons/fi'
import { useState } from 'react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'summary'>('preview')

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[90vh] bg-[#090308] border border-[#ff003c]/40 rounded-2xl shadow-[0_0_60px_rgba(255,0,60,0.3)] flex flex-col overflow-hidden hud-corner"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#12050e] border-b border-[#ff003c]/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#ff003c] animate-pulse shadow-[0_0_10px_#ff003c]" />
                <div>
                  <h3 className="text-white font-mono font-bold text-sm sm:text-base flex items-center gap-2">
                    <span>DOSSIER // RESUME</span>
                    <span className="text-xs text-[#ff003c] px-2 py-0.5 rounded border border-[#ff003c]/40 bg-[#ff003c]/10">
                      VERIFIED V3.8
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono hidden sm:block">
                    Jangam Dhanwanth • SRMIST CSE (AI & ML) • CGPA 8.7
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Tab switch */}
                <div className="hidden sm:flex bg-[#060205] border border-[#ff003c]/20 rounded-lg p-1 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1 rounded transition-colors ${
                      activeTab === 'preview'
                        ? 'bg-[#ff003c] text-white font-semibold shadow-[0_0_10px_rgba(255,0,60,0.5)]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    PDF Viewer
                  </button>
                  <button
                    onClick={() => setActiveTab('summary')}
                    className={`px-3 py-1 rounded transition-colors ${
                      activeTab === 'summary'
                        ? 'bg-[#ff003c] text-white font-semibold shadow-[0_0_10px_rgba(255,0,60,0.5)]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Executive Summary
                  </button>
                </div>

                {/* Download Button */}
                <a
                  href="/resume.pdf"
                  download="Jangam_Dhanwanth_Resume.pdf"
                  className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#ff003c] text-white text-xs sm:text-sm font-semibold hover:bg-[#ff3366] transition-all shadow-[0_0_15px_rgba(255,0,60,0.4)]"
                >
                  <FiDownload className="text-sm" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>

                {/* Open in new tab */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1a0814] text-slate-300 hover:text-[#ff003c] border border-[#ff003c]/20 transition-colors"
                  title="Open in new tab"
                >
                  <FiExternalLink />
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-[#1a0814] text-slate-300 hover:text-white hover:bg-[#ff003c] transition-colors"
                  aria-label="Close modal"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto bg-[#050205]">
              {activeTab === 'preview' ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-2">
                  <iframe
                    src="/resume.pdf#view=FitH"
                    className="w-full h-full rounded-lg border border-[#ff003c]/20 bg-slate-900"
                    title="Jangam Dhanwanth Resume"
                  />
                </div>
              ) : (
                <div className="max-w-4xl mx-auto p-6 sm:p-10 space-y-8 font-sans">
                  {/* Summary Card Header */}
                  <div className="border border-[#ff003c]/30 rounded-xl p-6 bg-[#0f050d] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff003c]/10 rounded-full blur-2xl" />
                    <h2 className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                      JANGAM DHANWANTH
                    </h2>
                    <p className="text-[#ff003c] font-mono text-sm mt-1">
                      AI Engineering • Agentic AI • Multi-Agent Systems • GraphRAG & Backend Systems
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-4 font-mono">
                      <span>📍 Chennai / AP, India</span>
                      <span>📧 dhanwanthjangam@gmail.com</span>
                      <span>📞 +91 9849800927</span>
                      <span>🏛️ SRMIST (CGPA 8.7/10.0)</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-[#ff003c]/20 bg-[#120610]">
                      <div className="text-[#ff003c] font-mono text-xs uppercase mb-1">Target Role</div>
                      <div className="text-white font-bold text-sm">AI / Agentic Systems Intern</div>
                    </div>
                    <div className="p-4 rounded-xl border border-[#ff003c]/20 bg-[#120610]">
                      <div className="text-[#ff003c] font-mono text-xs uppercase mb-1">Code Quality</div>
                      <div className="text-white font-bold text-sm">100% Hermetic Test Coverage</div>
                    </div>
                    <div className="p-4 rounded-xl border border-[#ff003c]/20 bg-[#120610]">
                      <div className="text-[#ff003c] font-mono text-xs uppercase mb-1">Leadership</div>
                      <div className="text-white font-bold text-sm">GDG on Campus (500+ Attendees)</div>
                    </div>
                  </div>

                  {/* Experience & GDG Section */}
                  <div className="border border-[#ff003c]/20 rounded-xl p-6 bg-[#0e040c]">
                    <div className="flex items-center gap-2 text-[#ff003c] font-mono text-sm mb-3">
                      <FiAward />
                      <span>LEADERSHIP & EXPERIENCE</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Google Developer Groups (GDG) On Campus — SRMIST KTR
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Technical Member & Event Volunteer • Chennai, India | 2025
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
                      <li>
                        Organized technical workshops, developer meetups, and study jams engaging <strong className="text-white">500+ student attendees</strong> on cloud technologies, Git practices, and modern developer tooling.
                      </li>
                      <li>
                        Collaborated with core organizers to lead peer learning sessions and open-source contribution drives.
                      </li>
                      <li>
                        Credentials: <span className="text-[#ff003c]">Google Cloud / DeepMind Gemini Enterprise Ready Badge (GEAR)</span> & Verified GDG on Campus Member.
                      </li>
                    </ul>
                  </div>

                  {/* Projects Breakdown */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                      <FiFileText className="text-[#ff003c]" />
                      FLAGSHIP REPOSITORIES
                    </h3>

                    <div className="p-5 rounded-xl border border-[#ff003c]/20 bg-[#0e040c] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">SWE-Agent (Autonomous Code Repair)</span>
                        <span className="text-xs text-[#ff003c] font-mono">98.9% Test Coverage</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Multi-turn autonomous coding agent with LangGraph state machines, BM25 AST symbol search, isolated Docker sandboxes, and automated GitHub PR generation.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-[#ff003c]/20 bg-[#0e040c] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">AEIMPS (Enterprise Multi-Modal GraphRAG)</span>
                        <span className="text-xs text-[#ff003c] font-mono">36ms P50 Latency</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Tri-hybrid retrieval with Reciprocal Rank Fusion (Dense BGE + Sparse BGE-M3 + Neo4j Graph Walk), Redis stream workers, and 4-tier RBAC.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-[#ff003c]/20 bg-[#0e040c] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Helios AIOps (Autonomous Telemetry Engine)</span>
                        <span className="text-xs text-[#ff003c] font-mono">1.2s RCA Diagnosis</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        10-microservice telemetry engine with Apache Kafka, Drain3 log clustering, scikit-learn Isolation Forests, and causal DAG blast-radius mitigation.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
