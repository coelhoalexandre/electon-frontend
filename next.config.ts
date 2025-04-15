import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://i.imgur.com/**.png')],
  },
};

export default nextConfig;
