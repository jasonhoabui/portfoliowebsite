'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [isDarkMode]);

  return (
    <html lang="en">
      <head>
        <title>jason</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col">
        <nav className="w-full p-4 md:p-8">
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 md:gap-8 text-xs md:text-sm justify-center mr-0 md:mr-0 lowercase"
          >
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors underline decoration-blue-400">
                home
              </Link>
            </li>
            <li>
              <Link href="/research" className="hover:text-blue-400 transition-colors underline decoration-blue-400">
                research
              </Link>
            </li>
            <li>
              <Link href="/experience" className="hover:text-blue-400 transition-colors underline decoration-blue-400">
                experience
              </Link>
            </li>
            <li>
              <button 
                onClick={toggleTheme} 
                className="hover:text-blue-400 transition-colors flex items-center"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </li>
          </motion.ul>
        </nav>
        <main className="flex-grow relative pb-16">
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <footer className="p-4 md:p-8">
          <div className="max-w-5xl mx-auto px-4 md:px-16 flex flex-col items-center">
            <div className="text-gray-400 text-sm space-y-1 text-center">
            </div>
            <p className="text-gray-500 text-sm -mt-5">
              ©{new Date().getFullYear()} by jason bui
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}