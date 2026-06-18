'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MapPin, Building, Music } from "lucide-react";
import { motion } from 'framer-motion';
import BankrollChart from '@/components/BankrollChart';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const transition = { duration: 0.45, ease: 'easeOut' };

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [songUrl, setSongUrl] = useState<string | null>(null);

  const fetchCurrentlyPlaying = async () => {
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
    }
  };

  useEffect(() => {
    fetchCurrentlyPlaying();
    const interval = setInterval(fetchCurrentlyPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-16 py-8 w-full">
      <div className="w-full max-w-xl text-left text-gray-500 flex flex-col gap-5">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ ...transition, delay: 0 }}
        >
          <div className="flex items-center gap-5">
            <h1 className="lowercase whitespace-nowrap m-0">
              <span className="block text-black text-3xl leading-none">jason bui</span>
            </h1>
            <Image 
              src="/images/profile.jpg"
              alt="Profile"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0"
              width={96}
              height={96}
            />
          </div>

          <motion.p
            className="text-xs mb-2 flex items-center -mt-1"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...transition, delay: 0.08 }}
          >
            <MapPin className="mr-2 w-4 h-4" />
            california
          </motion.p>
          <motion.p
            className="text-xs mb-2 flex items-center"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...transition, delay: 0.14 }}
          >
            <Building className="mr-2 w-4 h-4" />
            intern @ soon™
          </motion.p>
          {currentTrack && (
            <motion.p
              className="text-xs mb-2 flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
            >
              <Music className="mr-2 w-4 h-4" />
              <a
                href={songUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-500 hover:opacity-70 transition-opacity"
              >
                {currentTrack.toLowerCase()}
              </a>
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ ...transition, delay: 0.22 }}
        >
          <motion.p
            className="mb-2 text-m break-words max-w-[700px] leading-snug"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...transition, delay: 0.28 }}
          >
            hi! i&apos;m a statistics student at uc santa barbara.
          </motion.p>

          <motion.p
            className="mb-2 text-m break-words max-w-[700px] leading-snug"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...transition, delay: 0.36 }}
          >
            i spend most of my free time playing poker, studying gto, and grinding cash games.
          </motion.p>
          <motion.p
            className="mb-0 text-m break-words max-w-[700px] leading-snug"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...transition, delay: 0.44 }}
          >
            i built my bankroll from $50 in dec &apos;24 to over $13k today. next goal: $2/5 live.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.55 }}
        >
          <BankrollChart />
        </motion.div>
      </div>
    </div>
  );
}
