'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import EngineeringMatrix from '@/components/EngineeringMatrix'
import DSA from '@/components/DSA'
import GitHubStats from '@/components/GitHubStats'
import Contact from '@/components/Contact'
import ResumeModal from '@/components/ResumeModal'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false)

  const handleOpenResume = () => setResumeOpen(true)
  const handleCloseResume = () => setResumeOpen(false)

  return (
    <main className="relative bg-[#040204] text-white selection:bg-[#ff003c]/30 selection:text-white min-h-screen">
      {/* Dynamic Background Particle Field */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Sections */}
      <Hero onOpenResume={handleOpenResume} />
      <About onOpenResume={handleOpenResume} />
      <Experience />
      <Projects />
      <Skills />
      <EngineeringMatrix />
      <DSA />
      <GitHubStats />
      <Contact onOpenResume={handleOpenResume} />

      {/* Interactive Resume Dossier Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={handleCloseResume} />
    </main>
  )
}
