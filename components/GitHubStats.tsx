'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const GITHUB_USER = 'Dhanu2007-G'

const statCards = [
  { label: 'Public Repos', value: '12+', color: '#00f5ff' },
  { label: 'Languages Used', value: '6+', color: '#0066ff' },
  { label: 'Contributions', value: '200+', color: '#7c3aed' },
  { label: 'Stars Earned', value: '15+', color: '#f97316' },
]

export default function GitHubStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-24 bg-[#050a0f] overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#00f5ff] font-mono text-sm">06.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">GITHUB STATS</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
          </div>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-5 border border-[#1a3a5c] hover:border-[#00f5ff]/30 transition-colors duration-300 group text-center"
            >
              <div
                className="text-4xl font-black mb-1 group-hover:scale-110 transition-transform duration-200"
                style={{ color: card.color, textShadow: `0 0 20px ${card.color}55` }}
              >
                {card.value}
              </div>
              <p className="text-xs text-slate-500 font-mono">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub readme stats images */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-4 border border-[#00f5ff]/15 flex items-center justify-center"
          >
            {/* GitHub Stats Card */}
            <div className="w-full">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=transparent&title_color=00f5ff&text_color=94a3b8&icon_color=0066ff&border_color=1a3a5c&bg_color=0a1628&hide_border=false&count_private=true`}
                alt="GitHub Stats"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-4 border border-[#00f5ff]/15 flex items-center justify-center"
          >
            {/* Top Languages Card */}
            <div className="w-full">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=transparent&title_color=00f5ff&text_color=94a3b8&border_color=1a3a5c&bg_color=0a1628&hide_border=false&langs_count=8`}
                alt="Top Languages"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Streak stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-4 border border-[#00f5ff]/15 flex items-center justify-center"
        >
          <div className="w-full max-w-2xl mx-auto">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USER}&theme=dark&background=0a1628&border=1a3a5c&ring=00f5ff&fire=f97316&currStreakNum=00f5ff&sideNums=94a3b8&currStreakLabel=00f5ff&sideLabels=94a3b8&dates=4a5568`}
              alt="GitHub Streak"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-[#00f5ff] transition-colors duration-300 border border-[#1a3a5c] hover:border-[#00f5ff]/30 px-6 py-3 rounded-xl"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            @{GITHUB_USER}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
