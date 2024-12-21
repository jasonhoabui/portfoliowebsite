'use client';

import { motion } from 'framer-motion'

export default function Honors() {
  return (
    <div className="max-w-5xl mx-auto px-16">
      <section className="mt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12 text-gray-400"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl mb-2 text-white">ap capstone diploma | 2022 - 2024</h2>
              <p className="text-xl">
                completed two-year research program, developing skills in academic research, 
                analysis, and evidence-based writing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl mb-2 text-white">california state seal of biliteracy | 2020 - 2024</h2>
              <p className="text-xl">
                demonstrated proficiency in english and vietnamese, recognizing 
                commitment to language learning and cultural understanding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl mb-2 text-white">masters in tft | 2023 - 2024</h2>
              <p className="text-xl">
                achieved master rank (top 0.5%)in teamfight tactics during sets 9, 11, and 12.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 