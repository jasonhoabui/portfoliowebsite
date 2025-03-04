'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MapPin, Building, Music, Layers } from "lucide-react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

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
    try {
      const response = await fetch('/api/spotify/now-playing');
      const data = await response.json();
      if (data.isPlaying) {
        setCurrentTrack(`${data.title} by ${data.artist}`);
      } else {
        setCurrentTrack(null);
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
    <div className="max-w-6xl mx-auto px-16">
      <div className="mt-48 flex flex-col items-center gap-16">
        
        <div className="flex-1 text-left w-full max-w-xl mx-auto relative">
          <img 
            src="/images/profile.jpg"
            alt="Profile"
            className="absolute top-0 right-0 w-32 h-32 rounded-full object-cover"
          />

          <h1 
            className={`text-xl font-light mb-4 lowercase whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            <span className="block text-blue-400 text-xl">jason bui</span>
          </h1>

          <p 
            className={`text-xs mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            <MapPin className={`mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            garden grove, ca
          </p>
          <p 
            className={`text-xs mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            <Building className={`mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            unemployed :/
          </p>
          <p 
            className={`text-xs mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            <Music className={`mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            last listened to {currentTrack ? currentTrack : ''}
          </p>
          <p 
            className={`text-xs mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            <Layers className={`mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            python, postgres, typescript
          </p>

          <p className="mb-4 text-m break-words max-w-[700px]">
            i&apos;m currently a junior at{' '}
            <a href="https://www.ucsb.edu/" target="_blank" rel="noopener noreferrer" className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}>
              ucsb
            </a>
            , majoring in{' '}
            <a href="https://www.pstat.ucsb.edu/" target="_blank" rel="noopener noreferrer" className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}>
              statistics
            </a>
            .
          </p>

          <p className="mb-4 text-m break-words max-w-[700px]">
            i&apos;m super interested in <span className="text-blue-400">machine learning</span>,{' '}
            <span className="text-blue-400">applied probability</span>, and{' '}
            <span className="text-blue-400">game theory</span>.
          </p>

          <p className="mb-4 text-m break-words max-w-[700px]">
            most recently, i&apos;ve been diving into <span className="text-blue-400">poker theory</span>. i love to read about poker strategy and{' '}
            <a href="https://blogs.cornell.edu/info2040/2021/11/03/game-theory-optimal-gto-texas-holdem-poker-theory/" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-blue-400 hover:text-blue-300">
              gto
            </a>
            . my favorite hand is qq.
          </p>

          <p className="mb-4 text-n break-words max-w-[700px]">
            outside of work, you can catch me{' '}
            <a href="https://www.instagram.com/freedatboyjayson/" target="_blank" rel="noopener noreferrer" className={`underline decoration-blue-400 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-blue-400'}`}>
              powerlifting
            </a>
            . at <span className="text-blue-400">160</span> lbs bw, i bench <span className="text-blue-400">230</span> lbs, squat{' '}
            <span className="text-blue-400">315</span> lbs, and deadlift <span className="text-blue-400">365</span> lbs.
          </p>

          <p className="mb-4 text-m break-words max-w-[700px]">
            i love to eat fast food, especially <span className="text-blue-400">wingstop</span>. my go-to order is an{' '}
            <span className="text-blue-400">all-in bundle</span> (6 hot honey tenders, 16 boneless sweet chili glaze, lemon pepper large fries).
          </p>

          <div 
            className="flex gap-6"
          >
            <Link href="https://github.com/jasonhoabui" target="_blank" 
              className={`mt-2 text-xl hover:text-blue-400 transition-colors underline decoration-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              github
            </Link>
            <Link href="https://www.linkedin.com/in/jasonhbui/" target="_blank" 
              className={`mt-2 text-xl hover:text-blue-400 transition-colors underline decoration-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              linkedin
            </Link>
            <Link href="mailto:jasonhoabui@gmail.com" 
              className={`mt-2 text-xl hover:text-blue-400 transition-colors underline decoration-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              email
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" 
              className={`mt-2 text-xl hover:text-blue-400 transition-colors underline decoration-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}