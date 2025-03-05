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
    <div className="max-w-6xl mx-auto px-16">
      <section className="mt-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full max-w-xl mx-auto relative ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={`text-2xl mb-4 text-blue-400`}>current research</h2>
            <p className={`text-l mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              wip
            </p>
            <ul className={`list-disc ml-5 space-y-4 text-m ${isDarkMode ? 'text-white' : 'text-black'}`}>
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
            className="mt-12"
          >
            <h2 className={`text-2xl mb-4 text-blue-400`}>research interests</h2>
            <p className={`text-l mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              wip
            </p>
            <ul className={`list-disc ml-5 space-y-4 text-m ${isDarkMode ? 'text-white' : 'text-black'}`}>
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