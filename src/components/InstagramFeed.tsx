'use client';

import { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    // Load the Curator.io script
    const script = document.createElement('script');
    script.src = "https://cdn.curator.io/published/7ac22d57-c970-42a6-835f-9b82c9574d35.js";
    script.async = true;
    script.charset = "UTF-8";
    
    // Add the script to the document
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-8 mt-20">
      <h2 className="text-2xl font-bold mb-4">recent lifts</h2>
      <div 
        id="curator-feed-default-feed-layout"
        className="rounded-lg overflow-hidden"
      >
        <a 
          href="https://curator.io" 
          target="_blank" 
          className="crt-logo crt-tag"
          rel="noopener noreferrer"
        >
          Powered by Curator.io
        </a>
      </div>
    </div>
  );
}