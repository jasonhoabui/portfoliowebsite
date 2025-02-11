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
              <li>designed and deployed a discord bot for automated bet allocation in multi-outcome sports events, using probability theory and optimization techniques</li>
              <li>implemented an algorithm in python for optimal bet distributions, reducing risk by 20% and ensuring balanced payouts</li>
              <li>integrated the discord api for real-time user interaction, processing 500+ queries in the first month and optimizing performance, reducing response times by 30%</li>
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
              <li>developed a full-stack web app using the riot games api, enabling real-time data collection with under 500ms latency and a predictive model with 85% accuracy</li>
              <li>built a SQL database for 10,000+ matches, analyzing 1,000+ item combinations and team compositions, identifying strategies with a 15% higher win rate</li>
              <li>designed an interactive ui with custom icons, boosting user engagement by 40%</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl mb-2 text-white">willyoubemines</h2>
            <p className="text-xl mb-4">
              valentine&apos;s day &apos;25 invitation for your significant other.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xl">
              <li>fun, 2 hour mini-project created at 1 am on a sunday night</li>
              <li>inspired by tiktok videos</li>
              <li>she said yes!</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl mb-2 text-white">asian baby purity test</h2>
            <p className="text-xl mb-4">
            sbhacks xi hackathon project recreating the rice purity test but abg themed.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xl">
              <li>originally went to hackathon only for food and snacks</li>
              <li>decided last minute to create brainrot to win best joke hack</li>
              <li>teammate flaked on me, didn&apos;t pitch to judges unfortunately</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
} 