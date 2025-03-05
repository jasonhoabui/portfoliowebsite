/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with your image hostname
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;