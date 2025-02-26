'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Spotify from '@/components/Spotify';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-16">
      <div className="mt-48 flex gap-16">
        {/* Left column - Text content */}
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-8xl font-light mb-4 lowercase whitespace-nowrap"
          >
            hi, i&apos;m 
            <span className="block text-blue-400 text-8xl">jason bui</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl mb-12 lowercase text-gray-400"
          >
            stats @ ucsb | powerlifter, cat lover
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl mb-10 lowercase text-gray-400"
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
              width={400}
              height={400}
              className="rounded-lg"
              priority
            />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 mt-2 text-xl hover:text-blue-400 transition-colors">
            (resume)
          </a>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Spotify />
      </motion.div>

      <motion.div className="flex gap-6 text-blue-400">
        <a href="https://leetcode.com/u/jasonhoabui" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://leetcode-stats.vercel.app/api?username=jasonhoabui&theme=Dark" 
            alt="jasonhoabui's LeetCode Stats" 
            className="mt-4"
          />
        </a>
        <a href="https://github.com/jasonhoabui" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=jasonhoabui&theme=dark&show_icons=true&hide_border=true&count_private=false" 
            alt="jasonhoabui's GitHub Stats" 
            className="mt-4"
          />
        </a>
      </motion.div>

    </div>
  );
}