'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NowPlayingData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export default function Spotify() {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch('/api/spotify/now-playing');
        const data = await response.json();
        setNowPlaying(data);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
      }
    };

    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
          <h2 className="text-xl mb-4 text-gray-300">Now Playing</h2>
          {nowPlaying?.isPlaying ? (
            <div className="flex items-center gap-4">
              <Image
                src={nowPlaying.albumImageUrl!}
                alt={nowPlaying.album!}
                width={60}
                height={60}
                className="rounded"
              />
              <div>
                <Link 
                  href={nowPlaying.songUrl!}
                  target="_blank"
                  className="text-white hover:text-blue-400"
                >
                  {nowPlaying.title}
                </Link>
                <p className="text-gray-400">{nowPlaying.artist}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">Not playing</p>
          )}
        </div>
      </div>
    </div>
  );
}