/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "your-secret-key-here",
  },
  images: {
    domains: ["localhost", "lh3.googleusercontent.com", "platform-lookaside.fbsbx.com"],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
