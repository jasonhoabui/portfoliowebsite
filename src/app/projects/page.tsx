'use client';

import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-16">
      <section className="mt-48 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12 text-gray-400"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl mb-2 text-white">gambot | 2024</h2>
            <p className="text-xl mb-4">
              python-based discord bot for real-time betting analysis.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xl">
              <li>developed algorithm to calculate optimal betting strategies</li>
              <li>integrated real-time data analysis from gambitrewards.com</li>
              <li>implemented discord.py for seamless user interaction</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl mb-2 text-white">tftstatchecker | 2024</h2>
            <p className="text-xl mb-4">
              tft analytics tool using riot games api.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xl">
              <li>integrated riot games api for real-time data collection</li>
              <li>analyzed optimal item combinations and meta compositions</li>
              <li>developed statistical analysis for win-rate predictions</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl mb-2 text-white">wordle clone | 2024</h2>
            <p className="text-xl mb-4">
              recreated the popular word-guessing game using react and typescript.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xl">
              <li>implemented game logic and keyboard functionality</li>
              <li>added animations and visual feedback for user interactions</li>
              <li>designed responsive interface for mobile and desktop</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
} 