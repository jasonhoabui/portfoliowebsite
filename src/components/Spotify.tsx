'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

interface NowPlaying {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export default function Spotify() {
  const [nowPlaying, setNowPlaying] = React.useState<NowPlaying | null>(null);
  const [recentTracks, setRecentTracks] = React.useState<Track[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [nowRes, recentRes] = await Promise.all([
          fetch('/api/spotify/now-playing'),
          fetch('/api/spotify/recently-played')
        ]);

        const [nowData, recentData] = await Promise.all([
          nowRes.json(),
          recentRes.json()
        ]);

        setNowPlaying(nowData);
        setRecentTracks(recentData.tracks);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        {nowPlaying?.isPlaying && (
          <section className="w-full">
            <h2 className="text-2xl font-bold mb-4">currently listening to</h2>
            <div className="w-full">
              <Link href={nowPlaying.songUrl || ''} target="_blank" className="block w-full">
                <div className="hover:bg-black/30 transition-colors rounded-lg p-6">
                  <Image
                    src={nowPlaying.albumImageUrl || ''}
                    alt={nowPlaying.album || ''}
                    width={300}
                    height={300}
                    className="rounded-md w-full"
                  />
                  <div className="mt-4">
                    <div className="text-white text-xl font-medium">{nowPlaying.title}</div>
                    <div className="text-gray-400 text-base mt-1">{nowPlaying.artist}</div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {recentTracks.length > 0 && (
          <section className="w-full">
            <h2 className="text-2xl font-bold mb-4">recently listened to</h2>
            <div className="w-full space-y-3">
              {recentTracks.slice(0, 5).map((track) => (
                <Link key={track.id} href={track.songUrl} target="_blank" className="block w-full">
                  <div className="hover:bg-black/30 transition-colors rounded-lg p-3 flex items-center gap-4">
                    <Image
                      src={track.albumImageUrl}
                      alt={track.album}
                      width={56}
                      height={56}
                      className="rounded-md"
                    />
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{track.title}</div>
                      <div className="text-gray-400 text-xs">{track.artist}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}