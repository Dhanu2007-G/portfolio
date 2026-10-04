'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'DSA', href: '#dsa' },
  { label: 'Stats', href: '#stats' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-[#00f5ff]/10 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded border border-[#00f5ff]/50 flex items-center justify-center bg-[#00f5ff]/10">
              <span className="text-[#00f5ff] font-mono text-sm font-bold">JD</span>
            </div>
            <span className="font-mono text-sm text-[#00f5ff]/70 hidden sm:block">
              &lt;dhanwanth /&gt;
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover-underline text-slate-400 hover:text-[#00f5ff] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://github.com/Dhanu2007-G"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#00f5ff' }}
              className="text-slate-400 hover:text-[#00f5ff] transition-colors duration-200 p-2 rounded-lg hover:bg-[#00f5ff]/10"
            >
              <FiGithub size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jangam-dhanwanth-766437319/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-slate-400 hover:text-[#0066ff] transition-colors duration-200 p-2 rounded-lg hover:bg-[#0066ff]/10"
            >
              <FiLinkedin size={18} />
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-[#00f5ff] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-[#00f5ff]/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-[#00f5ff] transition-colors duration-200 font-medium py-1"
                >
                  <span className="text-[#00f5ff]/50 font-mono mr-2">0{i + 1}.</span>
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-4 pt-2 border-t border-[#00f5ff]/10">
                <a
                  href="https://github.com/Dhanu2007-G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#00f5ff] flex items-center gap-2 text-sm"
                >
                  <FiGithub size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jangam-dhanwanth-766437319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#0066ff] flex items-center gap-2 text-sm"
                >
                  <FiLinkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
