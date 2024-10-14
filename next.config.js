/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.blucreative.dev",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};
