'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>jason</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <main className="min-h-screen relative pb-32">
          <nav className="fixed top-0 right-0 p-4 md:p-8 w-full">
            <motion.ul 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 md:gap-8 text-xs md:text-sm justify-center md:justify-end mr-0 md:mr-8 lowercase"
            >
              <li>
                <Link href="/" className="text-white hover:text-blue-400 transition-colors">
                  home
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-white hover:text-blue-400 transition-colors">
                  research
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-white hover:text-blue-400 transition-colors">
                  experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:text-blue-400 transition-colors">
                  projects
                </Link>
              </li>
              <li>
                <Link href="/honors" className="text-white hover:text-blue-400 transition-colors">
                  honors
                </Link>
              </li>
              <li>
                <Link href="/powerlifting" className="text-white hover:text-blue-400 transition-colors">
                  powerlifting
                </Link>
              </li>
            </motion.ul>
          </nav>
          {children}
          <SpeedInsights />
          <footer className="absolute bottom-0 left-0 w-full p-4 md:p-8">
            <div className="max-w-5xl mx-auto px-4 md:px-16 flex flex-col items-center">
              <div className="text-gray-400 text-sm space-y-1 text-center">
                <p>jasonhoabui@gmail.com</p>
                <p>jasonbui420@ucsb.edu</p>
                <p>+1 657 667 9973</p>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                ©{new Date().getFullYear()} by jason bui
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  )
}