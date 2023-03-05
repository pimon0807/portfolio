/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.microcms-assets.io", "img.shields.io"],
  },
};

module.exports = nextConfig;
