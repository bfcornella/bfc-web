import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        search: '',
        pathname: '',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '',
        search: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'bfcornella-fluffy-telegram-9p4v5q6qv6w3x679-1337.preview.app.github.dev',
        port: '',
        search: '',
        pathname: '',
      },

      {
        protocol: 'https',
        hostname: '*.preview.app.github.dev',
        port: '',
        search: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'bfc-cms.fly.dev',
        port: '',
        search: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        search: '',
        pathname: '',
      },
    ],
  },
};

export default nextConfig;
