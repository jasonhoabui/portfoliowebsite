'use client';

import { motion } from 'framer-motion'

export default function Research() {
  return (
    <div className="max-w-5xl mx-auto px-16">
      <section className="mt-48 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16 text-gray-400"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl mb-4 text-white">current research</h2>
            <p className="text-xl mb-6">
              wip
            </p>
            <ul className="list-disc ml-5 space-y-4 text-xl">
              <li>
                wip
              </li>
              <li>
                wip
              </li>
              <li>
                wip
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl mb-4 text-white">research interests</h2>
            <ul className="list-disc ml-5 space-y-4 text-xl">
              <li>machine learning and statistical modeling</li>
              <li>data analysis and visualization</li>
              <li>predictive analytics</li>
              <li>computational statistics</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
} 