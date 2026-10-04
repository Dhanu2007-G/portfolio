'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiArrowDown } from 'react-icons/fi'
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
})

function GeometricAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = 320
    canvas.width = size
    canvas.height = size

    const cx = size / 2
    const cy = size / 2
    const R = 110
    let angle = 0
    let animId: number

    // Icosahedron vertices (simplified 2D projection)
    const phi = (1 + Math.sqrt(5)) / 2
    const vertices3D = [
      [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
      [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
      [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1],
    ].map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z)
      return [x / len, y / len, z / len]
    })

    const edges = [
      [0,1],[0,4],[0,5],[0,8],[0,9],
      [1,6],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,5],[2,10],[2,11],
      [3,6],[3,7],[3,10],[3,11],
      [4,5],[4,8],[4,10],[5,9],[5,11],
      [6,7],[6,8],[6,10],[7,9],[7,11],[8,10],[9,11],
    ]

    function project(x: number, y: number, z: number, rot: number) {
      const cosA = Math.cos(rot)
      const sinA = Math.sin(rot)
      const cosB = Math.cos(rot * 0.7)
      const sinB = Math.sin(rot * 0.7)
      const x1 = cosA * x - sinA * z
      const z1 = sinA * x + cosA * z
      const y1 = cosB * y - sinB * z1
      return { px: cx + x1 * R, py: cy + y1 * R, depth: z1 }
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, size, size)

      // Outer glow ring
      const grad = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.3)
      grad.addColorStop(0, 'rgba(0, 245, 255, 0)')
      grad.addColorStop(0.7, 'rgba(0, 245, 255, 0.04)')
      grad.addColorStop(1, 'rgba(0, 245, 255, 0.12)')
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.2, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()

      // Draw edges
      const projected = vertices3D.map(([x, y, z]) => project(x, y, z, angle))

      edges.forEach(([a, b]) => {
        const pA = projected[a]
        const pB = projected[b]
        const depth = (pA.depth + pB.depth) / 2
        const alpha = 0.15 + (depth + 1) * 0.25
        ctx.beginPath()
        ctx.moveTo(pA.px, pA.py)
        ctx.lineTo(pB.px, pB.py)
        ctx.strokeStyle = `rgba(0, 245, 255, ${Math.min(alpha, 0.7)})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw vertices
      projected.forEach(({ px, py, depth }) => {
        const alpha = 0.3 + (depth + 1) * 0.35
        const r = 1.5 + (depth + 1) * 1.5
        ctx.beginPath()
        ctx.arc(px, py, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 255, ${Math.min(alpha, 1)})`
        ctx.fill()
      })

      // Orbiting dot 1
      const ox1 = cx + Math.cos(angle * 1.5) * (R + 20)
      const oy1 = cy + Math.sin(angle * 1.5) * (R + 20) * 0.4
      ctx.beginPath()
      ctx.arc(ox1, oy1, 3, 0, Math.PI * 2)
      ctx.fillStyle = '#00f5ff'
      ctx.shadowColor = '#00f5ff'
      ctx.shadowBlur = 10
      ctx.fill()
      ctx.shadowBlur = 0

      // Orbiting dot 2
      const ox2 = cx + Math.cos(angle * 1.5 + Math.PI) * (R + 30)
      const oy2 = cy + Math.sin(angle * 1.5 + Math.PI) * (R + 30) * 0.4
      ctx.beginPath()
      ctx.arc(ox2, oy2, 2, 0, Math.PI * 2)
      ctx.fillStyle = '#0066ff'
      ctx.shadowColor = '#0066ff'
      ctx.shadowBlur = 8
      ctx.fill()
      ctx.shadowBlur = 0

      // Center dot glow
      const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 15)
      cGrad.addColorStop(0, 'rgba(0, 245, 255, 0.8)')
      cGrad.addColorStop(1, 'rgba(0, 245, 255, 0)')
      ctx.beginPath()
      ctx.arc(cx, cy, 15, 0, Math.PI * 2)
      ctx.fillStyle = cGrad
      ctx.fill()

      angle += 0.008
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]"
      style={{ filter: 'drop-shadow(0 0 30px rgba(0, 245, 255, 0.4))' }}
    />
  )
}

const floatingBadges = [
  { label: '100% Test Coverage', color: 'cyan' },
  { label: '3 Production Projects', color: 'electric' },
  { label: 'Docker | K8s | LangGraph', color: 'cyan' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050a0f]"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-40 z-0" />

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00f5ff]/5 via-transparent to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Pre-title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 text-[#00f5ff] text-xs font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse" />
              Available for Internships &amp; Collaborations
            </motion.div>

            {/* Name with glitch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1
                className="glitch text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-none mb-2"
                data-text="JANGAM"
              >
                JANGAM
              </h1>
              <h1
                className="glitch text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-none mb-6 cyan-text-glow text-[#00f5ff]"
                data-text="DHANWANTH"
              >
                DHANWANTH
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-slate-400 mb-8 font-mono h-8"
            >
              <span className="text-[#00f5ff]/60">› </span>
              <TypeAnimation
                sequence={[
                  'AI Systems Engineer',
                  2000,
                  'Autonomous Agent Builder',
                  2000,
                  'GraphRAG Architect',
                  2000,
                  'SRE & AIOps Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-slate-200"
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {floatingBadges.map((badge, i) => (
                <motion.span
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                  className={`px-3 py-1 rounded-full text-xs font-mono border ${
                    badge.color === 'cyan'
                      ? 'border-[#00f5ff]/40 bg-[#00f5ff]/10 text-[#00f5ff]'
                      : 'border-[#0066ff]/40 bg-[#0066ff]/10 text-[#0066ff]'
                  }`}
                >
                  {badge.label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#00f5ff] text-[#050a0f] font-bold rounded-lg hover:bg-[#00f5ff]/90 transition-all duration-200 text-sm shadow-cyan-glow text-center"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-[#00f5ff]/50 text-[#00f5ff] font-bold rounded-lg hover:bg-[#00f5ff]/10 transition-all duration-200 text-sm flex items-center justify-center gap-2 group"
              >
                <FiDownload className="group-hover:animate-bounce" size={16} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Geometric Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            className="flex-shrink-0 relative"
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-[#00f5ff]/5 blur-3xl scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#00f5ff]/10 scale-125 animate-spin-slow" />
              <div className="absolute inset-0 rounded-full border border-dashed border-[#0066ff]/10 scale-150 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              <GeometricAvatar />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="text-[#00f5ff]/50" size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
