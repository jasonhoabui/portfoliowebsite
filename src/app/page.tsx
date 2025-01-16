'use client';

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-16">
      <div className="mt-24 md:mt-48 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column - Text content */}
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-8xl font-light mb-4 lowercase"
          >
            hi, i&apos;m 
            <span className="block text-blue-400 text-4xl md:text-8xl">jason bui</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl mb-6 md:mb-12 lowercase text-gray-400"
          >
            stats @ ucsb | powerlifter, cat lover
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-2xl mb-6 md:mb-10 lowercase text-gray-400"
          >
            i enjoy research, working with data, and lifting weights.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6 text-blue-400"
          >
            <Link href="https://github.com/jasonhoabui" target="_blank" 
              className="hover:text-blue-300 transition-colors"
            >
              <FaGithub className="text-3xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/jasonhbui/" target="_blank" 
              className="hover:text-blue-300 transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link href="mailto:jasonhoabui@gmail.com" 
              className="hover:text-blue-300 transition-colors"
            >
              <MdEmail className="text-3xl" />
            </Link>
          </motion.div>
        </div>

        {/* Right column - Image */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/profile.jpg"
              alt="Jason Bui"
              width={300}
              height={300}
              className="rounded-lg w-[250px] md:w-[400px] h-auto"
              priority
            />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 mt-2 text-lg md:text-xl hover:text-blue-400 transition-colors">
            (resume)
          </a>
        </motion.div>
      </div>
    </div>
  )
}