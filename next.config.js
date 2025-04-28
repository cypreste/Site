/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'cyprestedev.com.br',
            },
          ],
          destination: 'https://www.cyprestedev.com.br',
          permanent: true,
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'cyprestedev.com.br',
            },
          ],
          destination: 'https://www.cyprestedev.com.br/:path*',
          permanent: true,
        },
      ];
    },
    reactStrictMode: true,
    swcMinify: true,
  };
  
  module.exports = nextConfig;
  