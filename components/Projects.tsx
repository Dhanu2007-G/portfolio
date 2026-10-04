'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Project {
  id: number
  title: string
  tag: string
  github: string
  stack: string[]
  description: string
  metrics: string[]
  accentColor: string
  glowColor: string
  borderColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SWE-Agent',
    tag: 'Autonomous Coding Agent',
    github: 'https://github.com/Dhanu2007-G/swe-agent',
    stack: ['LangGraph', 'Python', 'Docker', 'FastAPI', 'PostgreSQL', 'Redis'],
    description:
      'Autonomous AI agent that reads GitHub issues, plans fixes, writes code, runs tests in a Docker sandbox, and opens pull requests — end to end, without human input.',
    metrics: [
      '100% statement coverage',
      'LangGraph state machine',
      'Docker sandbox',
      'GitHub API integration',
      'Multi-model LLM support',
    ],
    accentColor: '#00f5ff',
    glowColor: 'rgba(0, 245, 255, 0.15)',
    borderColor: 'rgba(0, 245, 255, 0.3)',
  },
  {
    id: 2,
    title: 'AEIMPS',
    tag: 'Enterprise GraphRAG Platform',
    github: 'https://github.com/Dhanu2007-G',
    stack: ['Neo4j', 'Qdrant', 'Redis Streams', 'FastAPI', 'Next.js 14', 'LangGraph'],
    description:
      'Enterprise-grade multimodal document intelligence platform with GraphRAG, hybrid vector+graph search, real-time ingestion pipelines, SAML SSO, RBAC, and multi-tenant isolation.',
    metrics: [
      'Neo4j Knowledge Graph',
      'Qdrant Vector Search',
      'Redis Stream Workers',
      'SAML + RBAC Auth',
      '100% test coverage',
    ],
    accentColor: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.15)',
    borderColor: 'rgba(124, 58, 237, 0.3)',
  },
  {
    id: 3,
    title: 'Helios AIOps',
    tag: 'Distributed AIOps Platform',
    github: 'https://github.com/Dhanu2007-G',
    stack: ['Apache Kafka', 'TimescaleDB', 'OpenTelemetry', 'FastAPI', 'Next.js', 'ML'],
    description:
      '10-microservice AIOps platform with ML-powered anomaly detection, LLM-based root cause analysis, automated remediation engine, and full observability stack.',
    metrics: [
      '10 Microservices',
      'Apache Kafka',
      'TimescaleDB',
      'OpenTelemetry',
      'LSTM + Isolation Forest + Cox PH',
    ],
    accentColor: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.12)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 15
    setTilt({ x, y })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform 0.5s ease' : 'transform 0.1s ease',
        boxShadow: isHovered ? `0 20px 60px ${project.glowColor}, 0 0 0 1px ${project.borderColor}` : '0 4px 24px rgba(0,0,0,0.5)',
      }}
      className="relative bg-[#0a1628] rounded-2xl border border-[#1a3a5c] overflow-hidden group cursor-default"
    >
      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ border: `1px solid ${project.accentColor}`, boxShadow: `inset 0 0 40px ${project.glowColor}` }}
      />

      {/* Top accent line */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
      />

      <div className="p-6">
        {/* Tag */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-mono px-3 py-1 rounded-full border"
            style={{
              color: project.accentColor,
              borderColor: `${project.accentColor}40`,
              backgroundColor: `${project.accentColor}10`,
            }}
          >
            {project.tag}
          </span>
          <span className="text-slate-700 font-mono text-3xl font-black">0{project.id}</span>
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-black mb-3 transition-colors duration-300"
          style={{ color: isHovered ? project.accentColor : '#fff' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded bg-[#0f1f35] text-slate-400 border border-[#1a3a5c]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1a3a5c] to-transparent mb-5" />

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-1.5 mb-6">
          {project.metrics.map((metric) => (
            <div key={metric} className="flex items-center gap-2 text-xs text-slate-500">
              <span style={{ color: project.accentColor }}>▸</span>
              {metric}
            </div>
          ))}
        </div>

        {/* GitHub button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border transition-all duration-300 group/btn"
          style={{
            borderColor: `${project.accentColor}50`,
            color: project.accentColor,
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${project.accentColor}15`
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
          }}
        >
          <FiGithub size={14} />
          View on GitHub
          <FiExternalLink size={12} className="opacity-50" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#050a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#00f5ff] font-mono text-sm">02.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">WHAT I BUILD</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
          </div>
          <p className="text-slate-500 text-sm ml-10 font-mono">
            Production systems, not prototypes. Hover cards to inspect.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
