import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import EngineeringMatrix from '@/components/EngineeringMatrix'
import DSA from '@/components/DSA'
import GitHubStats from '@/components/GitHubStats'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <EngineeringMatrix />
      <DSA />
      <GitHubStats />
      <Contact />
    </main>
  )
}
