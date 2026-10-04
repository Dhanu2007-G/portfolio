'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiFileText, FiArrowRight, FiDownload, FiCheckCircle, FiShield, FiCpu, FiTerminal } from 'react-icons/fi'
import Image from 'next/image'

interface HeroProps {
  onOpenResume?: () => void
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const imageCardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!imageCardRef.current) return
    const rect = imageCardRef.current.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12
    setTilt({ x, y })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden cyber-grid-red">
      {/* Ambient Crimson Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff003c]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#99001f]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Mission & CTAs (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Cyber Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18050e] border border-[#ff003c]/50 shadow-[0_0_15px_rgba(255,0,60,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#ff003c] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#ff003c] -ml-4" />
              <span className="text-[11px] font-mono text-[#ff3366] font-bold tracking-widest uppercase">
                ACTIVE SYSTEM // SRMIST CSE '28 • CGPA 8.7
              </span>
            </div>

            {/* Monumental Headline */}
            <div>
              <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                <span>[ IDENTITY DOSSIER ]</span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#ff003c]/40 to-transparent" />
              </div>
              <h1
                className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white font-mono uppercase glitch-red"
                data-text="JANGAM DHANWANTH"
              >
                JANGAM <span className="text-[#ff003c] drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">DHANWANTH</span>
              </h1>
            </div>

            {/* Typewriter Subtitle */}
            <div className="h-12 flex items-center">
              <span className="text-slate-400 font-mono text-sm sm:text-base mr-2">&gt;</span>
              <TypeAnimation
                sequence={[
                  'Agentic AI & Multi-Agent State Architect',
                  2000,
                  'Tri-Hybrid GraphRAG Systems Engineer',
                  2000,
                  'Autonomous SRE & Distributed AIOps Builder',
                  2000,
                  'Technical Member @ Google Developer Groups (GDG)',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-base sm:text-xl font-mono font-bold text-[#ff3366] drop-shadow-[0_0_10px_rgba(255,0,60,0.5)]"
              />
            </div>

            {/* Hard-Hitting Bio / Elevator Pitch */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              I architect autonomous agent swarms, multimodal GraphRAG engines, and distributed self-healing telemetry platforms that operate in real production. Zero prototypes, zero fluff: <strong className="text-white">100% hermetic test coverage</strong>, <strong className="text-white">0 lint errors (Ruff)</strong>, and <strong className="text-white">0 type errors (Mypy)</strong> across every codebase.
            </p>

            {/* Fast Telemetry Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'LangGraph Multi-Agent',
                'Neo4j Tri-Hybrid GraphRAG',
                'Apache Kafka & TimescaleDB',
                'Docker Sandbox Isolation',
                'FastAPI & Next.js 14',
                'GDG SRMIST Member',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#150711] border border-[#ff003c]/25 text-slate-300 flex items-center gap-1.5"
                >
                  <span className="text-[#ff003c]">#</span>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-[#ff003c] text-white text-sm font-mono font-bold flex items-center gap-2.5 hover:bg-[#ff1a40] hover:shadow-[0_0_30px_rgba(255,0,60,0.7)] transition-all group relative overflow-hidden"
              >
                <FiFileText className="text-lg group-hover:scale-110 transition-transform" />
                <span>INSPECT VERIFIED RESUME</span>
                <span className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] text-white font-mono">
                  PDF
                </span>
              </button>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-[#170612] text-white text-sm font-mono font-semibold border border-[#ff003c]/40 hover:border-[#ff003c] hover:bg-[#ff003c]/10 transition-all flex items-center gap-2"
              >
                <span>EXPLORE ARCHITECTURES</span>
                <FiArrowRight className="text-sm text-[#ff003c]" />
              </a>

              <a
                href="/resume.pdf"
                download="Jangam_Dhanwanth_Resume.pdf"
                className="p-3.5 rounded-xl bg-[#12050f] text-slate-300 hover:text-white border border-[#ff003c]/30 hover:border-[#ff003c] transition-colors"
                title="Direct Download PDF"
              >
                <FiDownload className="text-lg" />
              </a>
            </div>

            {/* Verified Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-[#ff003c]/15 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <FiShield className="text-[#ff003c]" />
                <span>100% Statement Coverage Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCpu className="text-[#ff003c]" />
                <span>Google Cloud GEAR Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <FiTerminal className="text-[#ff003c]" />
                <span>10 Microservices Operating</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dhanwanth's High-Tech Studio Portrait (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div
              ref={imageCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-[300px] sm:w-[360px] md:w-[400px] group"
            >
              {/* Outer Cyber Glow Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#ff003c] via-[#b3002a] to-transparent opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500" />

              {/* HUD Card Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#ff003c]/50 bg-[#0c040a] shadow-[0_0_40px_rgba(255,0,60,0.35)] hud-corner">
                
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#1a0714] border-b border-[#ff003c]/30 text-[10px] font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-[#ff003c]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff003c] animate-ping" />
                    BIOMETRICS // ACTIVE
                  </span>
                  <span>ID: JD-2024-SRMIST</span>
                </div>

                {/* Portrait Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                  <Image
                    src="/dhanwanth.jpg"
                    alt="Jangam Dhanwanth"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Red Cyber Tint Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060205] via-transparent to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ff003c]/20 via-transparent to-transparent pointer-events-none" />

                  {/* Laser Scan Line Animation */}
                  <div className="laser-scan-line animate-laser-scan" />

                  {/* Corner Target Reticles */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-[#ff003c]/80 bg-black/60 px-2 py-0.5 rounded border border-[#ff003c]/30">
                    TARGET: DHANWANTH
                  </div>
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-[#ff003c]/80 bg-black/60 px-2 py-0.5 rounded border border-[#ff003c]/30">
                    SYS: ONLINE
                  </div>

                  {/* Bottom Image Floating HUD Overlays */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <div className="glass-red p-3 rounded-xl border border-[#ff003c]/40 flex items-center justify-between shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                      <div>
                        <div className="text-[11px] font-mono text-slate-300">SRM Institute of Science & Tech</div>
                        <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                          <span className="text-[#ff003c]">B.Tech CSE</span> (AI & ML) • 2024–2028
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-mono text-slate-400">CGPA</div>
                        <div className="text-sm font-mono font-black text-[#ff003c]">8.7 / 10</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HUD Bottom Bar */}
                <div className="px-4 py-2.5 bg-[#140610] border-t border-[#ff003c]/30 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-white">
                    <FiCheckCircle className="text-[#ff003c]" /> GDG Member
                  </span>
                  <span className="text-[#ff003c] font-bold">100% TEST COVERAGE</span>
                </div>
              </div>

              {/* Floating Badge: Top Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#12050f] border border-[#ff003c]/50 text-xs font-mono text-white shadow-[0_0_20px_rgba(255,0,60,0.35)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#ff003c]" />
                <span>3 PROD PLATFORMS</span>
              </motion.div>

              {/* Floating Badge: Bottom Right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#12050f] border border-[#ff003c]/50 text-xs font-mono text-white shadow-[0_0_20px_rgba(255,0,60,0.35)]"
              >
                <span className="text-[#ff003c]">⚡</span>
                <span>GDG ON CAMPUS KTR</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
