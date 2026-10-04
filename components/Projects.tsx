'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiShield, FiCpu, FiDatabase, FiActivity, FiLayers, FiCheck } from 'react-icons/fi'

interface Project {
  id: number
  title: string
  subtitle: string
  tag: string
  github: string
  stack: string[]
  metrics: { label: string; value: string }[]
  bullets: string[]
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SWE-Agent',
    subtitle: 'Autonomous Software Engineering & Code Repair Agent',
    tag: 'AGENTIC AI & STATE MACHINES',
    github: 'https://github.com/Dhanu2007-G/swe-agent',
    stack: ['LangGraph', 'Python', 'Docker Sandbox', 'Claude 3.5 Sonnet', 'FastAPI', 'PyTest', 'Git API'],
    metrics: [
      { label: 'Statement Coverage', value: '98.9%' },
      { label: 'Unit/Integration Tests', value: '340+' },
      { label: 'Sandbox Isolation', value: '--cap-drop ALL' },
      { label: 'Token Context Pruning', value: '<100k Tokens' },
    ],
    bullets: [
      'Architected an enterprise-grade agentic AI system automating multi-turn code repair across polyglot repositories using LangGraph state machines, checkpointing, and human-in-the-loop oversight.',
      'Engineered an AST symbol extractor and BM25 hybrid search engine, pruning multi-file codebases into precise token contexts and auto-detecting broken dependencies.',
      'Implemented an isolated Docker sandbox with --cap-drop ALL, read-only rootfs, and non-root execution, reproducing tests, generating patches, and self-correcting via a 3-retry loop.',
      'Automated cross-repository GitHub forking, branch generation, and verified Pull Request submission with automated CI pipelines.',
    ],
    color: '#ff003c',
  },
  {
    id: 2,
    title: 'AEIMPS',
    subtitle: 'Enterprise Architectural Memory & Multi-Modal GraphRAG Platform',
    tag: 'ENTERPRISE GRAPHRAG & VECTORS',
    github: 'https://github.com/Dhanu2007-G/aeimps',
    stack: ['Neo4j Cypher', 'Qdrant Vector DB', 'PyTorch', 'BGE-Large / M3', 'FastAPI', 'Redis Streams', 'Next.js 14'],
    metrics: [
      { label: 'Retrieval Latency', value: '36ms P50' },
      { label: 'Retrieval Mode', value: 'Tri-Hybrid RRF' },
      { label: 'Ingestion Models', value: 'Qwen2-VL + OCR' },
      { label: 'Security Model', value: '4-Tier RBAC' },
    ],
    bullets: [
      'Developed an enterprise architectural intelligence engine combining Neo4j knowledge graphs (AST call hierarchies, schema relationships) with Qdrant vector databases for grounded context.',
      'Constructed Tri-Hybrid Retrieval with Reciprocal Rank Fusion (RRF) across dense BGE embeddings, sparse BGE-M3 lexical tokens, and Cypher graph walks, achieving 36ms P50 retrieval latency.',
      'Engineered distributed ingestion workers with PyMuPDF, PaddleOCR, and Qwen2-VL to extract entities and ingest complex architectural diagrams, blueprints, and multi-page technical documentation.',
      'Enforced 4-tier Role-Based Access Control (Admin/Manager/Analyst/Viewer), cryptographic audit logs, and rate-limiting quotas across 5 microservices.',
    ],
    color: '#ff1744',
  },
  {
    id: 3,
    title: 'Helios AIOps',
    subtitle: 'Autonomous Telemetry Anomaly Detection & Self-Healing Engine',
    tag: 'DISTRIBUTED SYSTEMS & SRE',
    github: 'https://github.com/Dhanu2007-G/Helios---AIops',
    stack: ['Python', 'Apache Kafka', 'Prometheus', 'TimescaleDB', 'scikit-learn', 'Isolation Forest', 'Drain3', 'DAG RCA'],
    metrics: [
      { label: 'Root Cause Pinpoint', value: '< 1.2s' },
      { label: 'Architecture Scale', value: '10 Microservices' },
      { label: 'ML Algorithms', value: 'Isolation Forest + Drain3' },
      { label: 'Correlation Graph', value: 'Causal DAG RCA' },
    ],
    bullets: [
      'Constructed a real-time autonomous AIOps platform ingesting streaming microservice telemetry to detect latency anomalies, memory leaks, and GC thrashing cascades under high load.',
      'Deployed unsupervised anomaly detection using scikit-learn Isolation Forests and Drain3 log pattern clustering, suppressing false alert noise and pinpointing root causes within 1.2s.',
      'Integrated causal Directed Acyclic Graph (DAG) correlation to calculate incident blast radius and automatically execute remediation playbooks with human verification.',
      'Complete hermetic test suite with 100% statement coverage, 0 skipped tests, TimescaleDB session lifecycle mocking, and full OpenTelemetry tracing.',
    ],
    color: '#e11d48',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 8
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 8
    setTilt({ x, y })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-red-card rounded-2xl p-6 sm:p-10 border border-[#ff003c]/25 hover:border-[#ff003c]/70 transition-all duration-300 hud-corner relative overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
    >
      {/* Ambient Red Glow on hover */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff003c]/8 rounded-full blur-3xl group-hover:bg-[#ff003c]/15 transition-all pointer-events-none" />

      {/* Card Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#ff003c]/20 relative z-10">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff003c] animate-pulse" />
            <span className="text-[11px] font-mono text-[#ff3366] font-bold tracking-widest uppercase">
              {project.tag}
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight group-hover:text-[#ff3366] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-slate-300">
            {project.subtitle}
          </p>
        </div>

        {/* GitHub Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#18050e] text-white border border-[#ff003c]/40 hover:bg-[#ff003c] hover:border-[#ff003c] text-xs font-mono font-bold transition-all shadow-[0_0_15px_rgba(255,0,60,0.2)] shrink-0"
        >
          <FiGithub className="text-base" />
          <span>VIEW CODEBASE</span>
          <FiExternalLink className="text-xs" />
        </a>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-6 relative z-10">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="p-3.5 rounded-xl bg-[#11050e] border border-[#ff003c]/20 text-center space-y-0.5"
          >
            <div className="text-sm sm:text-base font-black font-mono text-[#ff3366]">
              {m.value}
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Deep Technical Bullet Points */}
      <div className="space-y-2.5 py-4 border-t border-[#ff003c]/15 relative z-10">
        <div className="text-[11px] font-mono text-[#ff003c] uppercase tracking-wider font-bold">
          ENGINEERING ARCHITECTURE & REPRODUCIBILITY:
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-[#ff003c] mt-0.5 text-xs font-mono font-bold">▶</span>
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Pills */}
      <div className="pt-6 border-t border-[#ff003c]/15 flex flex-wrap gap-2 relative z-10">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#180612] border border-[#ff003c]/30 text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
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
            <span className="text-[#ff003c] font-mono text-xs sm:text-sm font-bold tracking-widest">[ 03. TECHNICAL PROJECTS ]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff003c]/40 via-[#ff003c]/10 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight">
            FLAGSHIP AGENTIC & <span className="text-[#ff003c]">ENTERPRISE REPOS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans max-w-2xl mt-3">
            Every repository below is complete, fully tested, documented with architectural blueprints, and built without third-party black-box dependencies.
          </p>
        </motion.div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
