'use client';

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

export default function Experience() {
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
          className={`w-full max-w-xl mx-auto relative ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        >
          {/* Work Section */}
          <div className="text-2xl pt-10 pb-5 text-blue-400">work</div>
          <div>
            <p className="mb-4 text-l break-words max-w-[700px]">
              incoming <span className="text-blue-400">data science intern</span> at {" "}
              <a
                href="https://datascience.uchicago.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                uchicago dsi 
              </a>
            </p>
            <p className={`mb-4 text-xs break-words max-w-[700px] text-xs ${isDarkMode ? 'text-white' : 'text-black'}`}>summer 2025 - research under professor</p>
            <br />

            <p className="mb-4 text-l break-words max-w-[700px]">
              incoming <span className="text-blue-400">eureka scholar</span> at {" "}
              <a
                href="https://eureka.csep.ucsb.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                ucsb csep
              </a>
            </p>
            <p className={`mb-4 text-xs break-words max-w-[700px] text-xs ${isDarkMode ? 'text-white' : 'text-black'}`}>summer 2025 - research under professor</p>
            <br />

            <p className="mb-4 text-l break-words max-w-[700px]">
            <span className="text-blue-400">accelerate fellow</span> at{" "}
              <a
                href="https://www.ibm.com/us-en"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                ibm
              </a>
            </p>
            <p className={`text-xs ${isDarkMode ? 'text-white' : 'text-black'}`}>summer 2024 - cloud computing, ai</p>
            <br />
          </div>

          {/* Projects Section */}
          <div className="text-2xl pt-10 pb-5 text-blue-400">projects</div>
          <div className="flex items-center">
            <p className="text-l w-1/2">soon™</p>
            <div className="flex items-center w-1/2 pl-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-5 underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                live
              </a>
              <a
                href="https://github.com/jasonhoabui"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                github
              </a>
            </div>
          </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}></p>

          <div className="flex items-center pt-5">
            <p className="text-l w-1/2">soon™</p>
            <div className="flex items-center w-1/2 pl-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-5 underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                live
              </a>
              <a
                href="https://github.com/jasonhoabui"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                github
              </a>
            </div>
          </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}></p>

          {/* Leadership Section */}
          <div className="text-2xl pt-10 pb-5 text-blue-400">leadership</div>
          <div className="flex items-center">
            <p className="text-l w-1/2">soon™</p>
            <div className="flex items-center w-1/2 pl-4">
              <a
                href="https://jasonhoabui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                soon™
              </a>
            </div>
          </div>
          <p className={`"mb-4 text-xs break-words max-w-[700px]" ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>soon™</p>
          <br />

          <div className="flex items-center">
            <p className="text-l w-1/2">soon™</p>
            <div className="flex items-center w-1/2 pl-4">
              <a
                href="https://jasonhoabui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                soon™
              </a>
            </div>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>soon™</p>
          <br />

          <div className="flex items-center">
            <p className="text-l w-1/2">soon™</p>
            <div className="flex items-center w-1/2 pl-4">
              <a
                href="https://jasonhoabui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                soon™
              </a>
            </div>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>soon™</p>

          {/* Hackathons Section */}
          <div className="text-2xl pt-10 pb-5 text-blue-400">hackathons</div>
          <div className="flex items-center">
            <p className="text-l w-1/2">soon™</p>
            <div className="flex items-center w-1/2 pl-4">
              <a
                href="https://devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                devpost
              </a>
            </div>
          </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}></p>
        </motion.div>
      </section>
    </div>
  )
}