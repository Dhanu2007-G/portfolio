'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMenu, FiX, FiFileText } from 'react-icons/fi'

interface NavbarProps {
  onOpenResume?: () => void
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience & GDG', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills & Terminal', href: '#skills' },
  { label: 'Standards', href: '#standards' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-red border-b border-[#ff003c]/20 shadow-2xl shadow-black/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Identity */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg border border-[#ff003c]/60 flex items-center justify-center bg-[#ff003c]/10 shadow-[0_0_15px_rgba(255,0,60,0.3)] group-hover:border-[#ff003c] transition-colors relative overflow-hidden">
              <span className="text-[#ff003c] font-mono text-base font-black">JD</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff003c]/20 to-transparent pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-1.5">
                DHANWANTH
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff003c] animate-pulse" />
              </span>
              <span className="font-mono text-[10px] text-[#ff003c] tracking-widest uppercase">
                AI Systems Engineer
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover-underline-red text-slate-300 hover:text-[#ff003c] transition-colors text-xs font-mono uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side CTA & Socials */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff003c]/10 text-white border border-[#ff003c]/50 text-xs font-mono font-bold hover:bg-[#ff003c] hover:shadow-[0_0_20px_rgba(255,0,60,0.6)] transition-all group"
            >
              <FiFileText className="text-[#ff003c] group-hover:text-white transition-colors" />
              <span>RESUME</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#ff003c] text-white">PDF</span>
            </button>

            <a
              href="https://github.com/Dhanu2007-G"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#ff003c]/10 hover:border hover:border-[#ff003c]/30 transition-all"
              title="GitHub"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/jangam-dhanwanth-766437319/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-[#ff003c] hover:bg-[#ff003c]/10 hover:border hover:border-[#ff003c]/30 transition-all"
              title="LinkedIn"
            >
              <FiLinkedin className="text-lg" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 rounded bg-[#ff003c] text-white text-xs font-mono font-bold"
            >
              RESUME
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white border border-[#ff003c]/20"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="sm:hidden glass-red border-b border-[#ff003c]/30 px-6 py-5 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-300 hover:text-[#ff003c] text-sm font-mono py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#ff003c]/20 flex items-center gap-4">
            <a
              href="https://github.com/Dhanu2007-G"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#ff003c]"
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/jangam-dhanwanth-766437319/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#ff003c]"
            >
              <FiLinkedin className="text-xl" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
