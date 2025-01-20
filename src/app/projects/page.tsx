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
            <h2 className="text-3xl mb-2 text-white">gambot</h2>
            <p className="text-xl mb-4">
              python-based discord bot for real-time betting analysis.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xl">
              <li>designed and deployed a Discord bot for automated bet allocation in multi-outcome sports events, using probability theory and optimization techniques</li>
              <li>implemented an algorithm in Python for optimal bet distributions, reducing risk by 20% and ensuring balanced payouts</li>
              <li>integrated the Discord API for real-time user interaction, processing 500+ queries in the first month and optimizing performance, reducing response times by 30%</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl mb-2 text-white">tftstatchecker</h2>
            <p className="text-xl mb-4">
              tft analytics tool using riot games api.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xl">
              <li>developed a cloud-deployed web app using the Riot Games API, enabling real-time data collection with under 500ms latency and a predictive model with 85% accuracy</li>
              <li>analyzed 1,000+ item combinations and team compositions, identifying strategies with a 15% higher win rate</li>
              <li>built a SQL database for 10,000+ matches, and used TypeScript to create an interactive UI, boosting user engagement by 40%</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl mb-2 text-white">asian baby purity test</h2>
            <p className="text-xl mb-4">
            sbhacks xi hackathon project recreating the rice purity test but abg themed.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xl">
              <li>outlined a fun, engaging interface with interactive elements</li>
              <li>added animations and visual feedback for user interactions</li>
              <li>designed responsive interface for mobile and desktop</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
} 