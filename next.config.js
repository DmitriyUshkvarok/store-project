/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'res.cloudinary.com/pro-task-cloud/',
      'set-iset.ru',
    ],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/pro-task-cloud/**',
      },
    ],
  },
};

module.exports = nextConfig;
