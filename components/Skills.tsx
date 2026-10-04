'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiTerminal, FiCornerDownLeft, FiCpu, FiDatabase, FiServer, FiLayers, FiCheckCircle } from 'react-icons/fi'

interface SkillCategory {
  category: string
  command: string
  icon: typeof FiCpu
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Agentic AI & LLM Systems',
    command: 'skills --fetch agentic-ai',
    icon: FiCpu,
    color: '#ff003c',
    skills: [
      'LangGraph',
      'Multi-Agent State Machines',
      'ReAct Loops',
      'LangChain',
      'LlamaIndex',
      'Anthropic Claude API',
      'Gemini 2.0 / 3.8 API',
      'OpenAI API',
      'Groq Inference',
      'Prompt Engineering & Structured Outputs',
    ],
  },
  {
    category: 'GraphRAG & Vector Databases',
    command: 'skills --fetch rag-vectors',
    icon: FiDatabase,
    color: '#ff3366',
    skills: [
      'GraphRAG',
      'Neo4j (Cypher Queries)',
      'Qdrant Vector DB',
      'Tri-Hybrid Retrieval',
      'Reciprocal Rank Fusion (RRF)',
      'Dense BGE Embeddings',
      'Sparse BGE-M3 Lexical Tokens',
      'AST Call Hierarchies',
    ],
  },
  {
    category: 'Core AI, ML & NLP',
    command: 'skills --fetch ml-nlp',
    icon: FiLayers,
    color: '#e11d48',
    skills: [
      'PyTorch',
      'Hugging Face (Transformers)',
      'scikit-learn',
      'Sentence Transformers',
      'Vector Embeddings (BGE)',
      'Isolation Forests',
      'Drain3 Log Clustering',
      'Cox Proportional Hazards',
    ],
  },
  {
    category: 'Backend & Cloud Infrastructure',
    command: 'skills --fetch backend-infra',
    icon: FiServer,
    color: '#be123c',
    skills: [
      'Python (AsyncIO, OOP)',
      'FastAPI',
      'Docker (Container Sandboxing)',
      'PostgreSQL & SQLAlchemy',
      'Redis Streams',
      'Apache Kafka',
      'TimescaleDB',
      'Linux / Bash Scripting',
      'Git / GitHub Actions CI',
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [activeTab, setActiveTab] = useState(0)
  const [terminalInput, setTerminalInput] = useState('')
  const [customOutput, setCustomOutput] = useState<string | null>(null)

  function handleCommandSubmit(e: React.FormEvent) {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    if (cmd === 'clear') {
      setCustomOutput(null)
    } else if (cmd === 'help') {
      setCustomOutput(
        'AVAILABLE COMMANDS:\n  skills         - List all technical categories\n  agentic        - Inspect Agentic AI state stack\n  rag            - Inspect GraphRAG architecture\n  audit          - Run test coverage audit\n  clear          - Reset terminal buffer'
      )
    } else if (cmd.includes('agentic')) {
      setActiveTab(0)
      setCustomOutput('SWITCHED CONTEXT: Agentic AI & State Machines')
    } else if (cmd.includes('rag')) {
      setActiveTab(1)
      setCustomOutput('SWITCHED CONTEXT: GraphRAG & Vector Databases')
    } else if (cmd.includes('audit')) {
      setCustomOutput(
        'AUDIT REPORT [VERIFIED 2026]:\n  SWE-Agent    : 98.9% Coverage (340+ tests) | 0 Ruff Errors | 0 Mypy Errors\n  AEIMPS       : 100.0% Statement Coverage   | 0 Ruff Errors | 0 Mypy Errors\n  Helios AIOps : 100.0% Hermetic Coverage    | 0 Ruff Errors | 0 Mypy Errors\nSTATUS: ALL SYSTEMS GREEN.'
      )
    } else {
      setCustomOutput(`Unknown command: '${cmd}'. Type 'help' for available commands.`)
    }
    setTerminalInput('')
  }

  return (
    <section
      id="skills"
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
            <span className="text-[#ff003c] font-mono text-xs sm:text-sm font-bold tracking-widest">[ 04. TECHNICAL SKILLS // CLI ]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff003c]/40 via-[#ff003c]/10 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight">
            CORE SKILLS & <span className="text-[#ff003c]">INTERACTIVE TERMINAL</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans max-w-2xl mt-3">
            An interactive command console mapping the exact technical taxonomy powering my autonomous agents, vector engines, and distributed clusters.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-red-card rounded-2xl border-2 border-[#ff003c]/30 shadow-[0_15px_60px_rgba(255,0,60,0.18)] overflow-hidden hud-corner"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#140610] border-b border-[#ff003c]/30">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff003c] shadow-[0_0_8px_#ff003c]" />
              <span className="w-3 h-3 rounded-full bg-[#ff003c]/40" />
              <span className="w-3 h-3 rounded-full bg-[#ff003c]/20" />
              <span className="text-xs font-mono text-slate-300 ml-2 font-bold hidden sm:inline">
                dhanwanth@kernel-v3.8: ~/skills
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#ff003c] animate-pulse" />
              <span>BASH // INTERACTIVE</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#070206]">
            
            {/* Category Select Tabs */}
            <div className="flex flex-wrap gap-2 pb-4 border-b border-[#ff003c]/15">
              {skillCategories.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    setActiveTab(i)
                    setCustomOutput(null)
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                    activeTab === i
                      ? 'bg-[#ff003c] text-white font-bold shadow-[0_0_15px_rgba(255,0,60,0.5)]'
                      : 'bg-[#140610] text-slate-400 hover:text-white border border-[#ff003c]/20'
                  }`}
                >
                  <cat.icon />
                  <span>{cat.category}</span>
                </button>
              ))}
            </div>

            {/* Simulated Prompt Command */}
            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div className="text-slate-400 flex items-center gap-2">
                <span className="text-[#ff003c] font-bold">root@dhanwanth-core:~$</span>
                <span className="text-white font-semibold">
                  {skillCategories[activeTab].command}
                </span>
              </div>

              {/* Custom Command Output if user typed anything */}
              {customOutput && (
                <div className="p-4 rounded-xl bg-[#140510] border border-[#ff003c]/30 text-[#ff3366] whitespace-pre-wrap leading-relaxed">
                  {customOutput}
                </div>
              )}

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {skillCategories[activeTab].skills.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-[#12050f] border border-[#ff003c]/25 hover:border-[#ff003c]/70 transition-colors flex items-center gap-3 group"
                  >
                    <span className="text-[#ff003c] text-xs font-bold font-mono group-hover:translate-x-1 transition-transform">
                      ▶
                    </span>
                    <span className="text-slate-200 text-xs sm:text-sm font-sans font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Command Input Box */}
            <form
              onSubmit={handleCommandSubmit}
              className="mt-6 pt-4 border-t border-[#ff003c]/20 flex items-center gap-3"
            >
              <span className="text-[#ff003c] font-mono text-xs sm:text-sm font-bold shrink-0">
                guest@dhanwanth:~$
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help', 'audit', 'rag', or 'agentic'..."
                className="flex-1 bg-transparent border-none text-xs sm:text-sm font-mono text-white focus:outline-none placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-[#ff003c]/20 text-[#ff003c] hover:bg-[#ff003c] hover:text-white transition-colors"
                title="Execute command"
              >
                <FiCornerDownLeft />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
