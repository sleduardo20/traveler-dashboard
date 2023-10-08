/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'images.unsplash.com',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'images.pexels.com',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
