'use client';

import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-16">
      <section className="mt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16 text-gray-400"
        >
          {/* Research Experience */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl mb-2 text-white">undergraduate research assistant | wip</h2>
              <p className="text-xl">
                wip
              </p>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-xl">
                <li>wip</li>
                <li>wip</li>
                <li>wip</li>
              </ul>
            </motion.div>
          </div>

          {/* Work Experience */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl mb-2 text-white">data science intern | wip</h2>
              <p className="text-xl">
                wip
              </p>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-xl">
                <li>wip</li>
                <li>wip</li>
                <li>wip</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 