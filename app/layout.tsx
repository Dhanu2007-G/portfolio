import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#040204',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dhanwanth.vercel.app'),
  title: 'Jangam Dhanwanth — Agentic AI & Systems Engineer | GDG SRMIST',
  description:
    'Official portfolio of Jangam Dhanwanth — 3rd-year CSE student at SRMIST building autonomous AI agents (SWE-Agent), enterprise GraphRAG (AEIMPS), and distributed AIOps engines (Helios). 100% test coverage, 0 lint errors.',
  keywords: [
    'Jangam Dhanwanth',
    'AI Systems Engineer',
    'Agentic AI',
    'LangGraph',
    'GraphRAG',
    'Neo4j',
    'Qdrant',
    'AIOps',
    'Kafka',
    'SRMIST',
    'GDG on Campus',
    'Portfolio',
  ],
  authors: [{ name: 'Jangam Dhanwanth', url: 'https://github.com/Dhanu2007-G' }],
  openGraph: {
    title: 'Jangam Dhanwanth — Agentic AI & Systems Engineer',
    description:
      'Autonomous AI agent swarms, multimodal GraphRAG engines, and distributed AIOps systems. 100% test coverage.',
    type: 'website',
    images: ['/dhanwanth.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#040204] text-slate-100 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
