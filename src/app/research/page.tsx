'use client';

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

export default function Research() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const darkModeActive = document.body.classList.contains('dark');
      setIsDarkMode(darkModeActive);
    };

    // Check initial theme
    checkTheme();

    // Optional: Add a mutation observer to detect theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-16">
      <section className="mt-48 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`space-y-16 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={`text-3xl mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>current research</h2>
            <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
            <h2 className={`text-3xl mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>research interests</h2>
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