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

    checkTheme();


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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h2 
              className={`text-2xl mb-4 text-blue-400`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              work
            </motion.h2>
            <motion.p 
              className="mb-4 text-l break-words max-w-[700px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              incoming <span className="text-blue-400">data science intern</span> at {" "}
              <a
                href="https://datascience.uchicago.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                uchicago dsi 
              </a>
            </motion.p>
            <motion.p 
              className={`mb-4 text-xs break-words max-w-[700px] ${isDarkMode ? 'text-white' : 'text-black'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              summer 2025 - research under professor
            </motion.p>
            <br />

            <motion.p 
              className="mb-4 text-l break-words max-w-[700px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              incoming <span className="text-blue-400">eureka scholar</span> at {" "}
              <a
                href="https://eureka.csep.ucsb.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                ucsb csep
              </a>
            </motion.p>
            <motion.p 
              className={`mb-4 text-xs break-words max-w-[700px] ${isDarkMode ? 'text-white' : 'text-black'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              summer 2025 - research under professor
            </motion.p>
            <br />

            <motion.p 
              className="mb-4 text-l break-words max-w-[700px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-blue-400">accelerate fellow</span> at{" "}
              <a
                href="https://www.ibm.com/us-en"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                ibm
              </a>
            </motion.p>
            <motion.p 
              className={`text-xs ${isDarkMode ? 'text-white' : 'text-black'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              summer 2024 - cloud computing, ai
            </motion.p>
          </motion.div>

          <motion.div 
            className="text-2xl pt-10 pb-5 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            projects
          </motion.div>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
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
          </motion.div>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}></p>

          <motion.div 
            className="flex items-center pt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
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
          </motion.div>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}></p>

          <motion.div 
            className="text-2xl pt-10 pb-5 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            leadership
          </motion.div>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
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
          </motion.div>
          <motion.p 
            className={`"mb-4 text-xs break-words max-w-[700px]" ${isDarkMode ? 'text-white' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            soon™
          </motion.p>
          <br />

          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
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
          </motion.div>
          <motion.p 
            className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            soon™
          </motion.p>
          <br />

          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
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
          </motion.div>
          <motion.p 
            className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            soon™
          </motion.p>

          <motion.div 
            className="text-2xl pt-10 pb-5 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            hackathons
          </motion.div>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
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
          </motion.div>
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}></p>
        </motion.div>
      </section>
    </div>
  )
}