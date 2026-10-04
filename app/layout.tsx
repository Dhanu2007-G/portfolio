import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#050a0f',
}

export const metadata: Metadata = {
  title: 'Jangam Dhanwanth — AI Systems Engineer',
  description:
    'Portfolio of Jangam Dhanwanth — 3rd-year CSE student at SRMIST building autonomous AI agents, enterprise search platforms, and distributed AIOps systems.',
  keywords: [
    'Jangam Dhanwanth',
    'AI Systems Engineer',
    'Autonomous Agent',
    'LangGraph',
    'GraphRAG',
    'AIOps',
    'SRMIST',
    'Portfolio',
  ],
  authors: [{ name: 'Jangam Dhanwanth', url: 'https://github.com/Dhanu2007-G' }],
  openGraph: {
    title: 'Jangam Dhanwanth — AI Systems Engineer',
    description:
      'Building autonomous AI agents, enterprise search platforms, and distributed AIOps systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050a0f] text-slate-100 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
