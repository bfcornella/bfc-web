/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "127.0.0.1", "asamo7-studious-fiesta-jxgvx7qr69cv9g-1337.preview.app.github.dev", "bfc-backend.fly.dev", "res.cloudinary.com"],
  }
}

module.exports = nextConfig
