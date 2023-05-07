const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "fakestoreapi.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
