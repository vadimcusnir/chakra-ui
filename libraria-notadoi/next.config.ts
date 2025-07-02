import type { NextConfig } from "next";

const { withContentlayer } = require('next-contentlayer')
module.exports = withContentlayer({
  reactStrictMode: true,
})


export default nextConfig;
