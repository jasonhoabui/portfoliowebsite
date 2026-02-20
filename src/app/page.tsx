'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MapPin, Building, Music, Layers } from "lucide-react";
import { motion } from 'framer-motion';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [songUrl, setSongUrl] = useState<string | null>(null);
  const [isLoadingTrack, setIsLoadingTrack] = useState(true);

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

  const fetchCurrentlyPlaying = async () => {
    setIsLoadingTrack(true);
    try {
      const response = await fetch('/api/spotify/now-playing');
      if (!response.ok) {
        throw new Error('Failed to fetch currently playing track');
      }
      const data = await response.json();
      if (data.isPlaying) {
        setCurrentTrack(`${data.title} by ${data.artist}`);
        setSongUrl(data.songUrl);
      } else {
        setCurrentTrack(null);
        setSongUrl(null);
      }
    } catch (error) {
      console.error('Error fetching currently playing track:', error);
    } finally {
      setIsLoadingTrack(false);
    }
  };

  useEffect(() => {
    fetchCurrentlyPlaying();
    const interval = setInterval(fetchCurrentlyPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-16">
      <div className="mt-10 flex flex-col items-center gap-16">
        <motion.div 
          className="flex-1 text-left w-full max-w-xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src="/images/profile.jpg"
            alt="Profile"
            className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            width={128}
            height={128}
          />

          <motion.h1 
            className={`text-2xl font-light mb-4 lowercase whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block text-blue-400 text-xl">jason bui</span>
            <span className={`text-xs ${isDarkMode ? 'text-white' : 'text-black'}`}>
            </span>
          </motion.h1>

          <motion.p 
            className={`text-xs mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MapPin className={`mr-2 w-4 h-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            garden grove, ca
          </motion.p>
          <motion.p 
            className={`text-xs mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Building className={`mr-2 w-4 h-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            playing poker to pay rent
          </motion.p>
          <motion.p 
            className={`text-xs mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Music className={`mr-2 w-4 h-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            {isLoadingTrack ? (
              ''
            ) : currentTrack ? (
              <a
                href={songUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors underline decoration-blue-300"
              >
                {currentTrack.toLowerCase()}
              </a>
            ) : (
              'currently not listening to music'
            )}
          </motion.p>
          <motion.p 
            className={`text-xs mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Layers className={`mr-2 w-4 h-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            python, postgres, r
          </motion.p>

          <motion.p className="mb-4 text-m break-words max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            hi! i&apos;m <span className="text-blue-400">jason</span>, a <span className="text-blue-400">junior</span> at{' '}
            <a href="https://www.ucsb.edu/" target="_blank" rel="noopener noreferrer" className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}>
              ucsb 
            </a>
            {' '}majoring in{' '}
            <a href="https://www.pstat.ucsb.edu/" target="_blank" rel="noopener noreferrer" className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}>
              statistics
            </a>
            .
          </motion.p>

          <motion.p className="mb-4 text-m break-words max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            i&apos;m super interested in <span className="text-blue-400">game theory</span>,{' '}
            <span className="text-blue-400">decision science</span>, and{' '}
            <span className="text-blue-400">risk management</span>.
          </motion.p>

          <motion.p className="mb-4 text-m break-words max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            most recently, i&apos;ve been practicing my <span className="text-blue-400">mental arithmetic</span> through {' '}
            <a 
              href="https://arithmetic.zetamac.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
            >
              zetamac
            </a>
            . my highest score is 89. i&apos;ve also been dabbling around in {' '}
            <a 
              href="https://books.google.com/books/about/A_Practical_Guide_to_Quantitative_Financ.html?id=LoTgwAEACAAJ&source=kp_book_description" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
              >
                 the green book
                </a>
                {' '}for fun.
          </motion.p>

          <motion.p className="mb-4 text-n break-words max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            outside of work, you can catch me{' '}
            <a href="https://www.instagram.com/freedatboyjayson/" target="_blank" rel="noopener noreferrer" className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}>
              powerlifting
            </a>
            . at <span className="text-blue-400">145</span> lbs bw, i bench <span className="text-blue-400">245</span> lbs, squat{' '}
            <span className="text-blue-400">330</span> lbs, and deadlift <span className="text-blue-400">405</span> lbs. i plan on competing in the near future.
          </motion.p>

          <motion.p className="mb-4 text-m break-words max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            i love going out to eat. my favorite go-tos are <span className="text-blue-400"> salmon poke bowls</span> from {' '}
            <a 
              href="https://www.urokocafe.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
            >
              uroko cafe
            </a>
            {' '}and <span className="text-blue-400">adobada tacos</span> from {' '}
            <a 
              href="https://www.tacosloscholos.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}
            >
              tacos los cholos
            </a>.
          </motion.p>
          <div className="flex gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <Link href="https://github.com/jasonhoabui" target="_blank" 
                className={`mt-2 text-l hover:text-blue-400 transition-colors underline decoration-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                github
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link href="https://www.linkedin.com/in/jasonhbui/" target="_blank" 
                className={`mt-2 text-l hover:text-blue-400 transition-colors underline decoration-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                linkedin
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <Link href="mailto:jasonhoabui@gmail.com" 
                className={`mt-2 text-l hover:text-blue-400 transition-colors underline decoration-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                email
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}