'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

export default function ParticleBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ['#ff003c', '#ff3366', '#ffffff'] },
          links: {
            color: '#ff003c',
            distance: 120,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 65,
          },
          opacity: {
            value: { min: 0.1, max: 0.45 },
            animation: { enable: true, speed: 0.8, sync: false },
          },
          shape: { type: 'circle' },
          size: {
            value: { min: 1, max: 2.5 },
            animation: { enable: true, speed: 1.5, sync: false },
          },
        },
        detectRetina: true,
      } as any}
    />
  )
}
