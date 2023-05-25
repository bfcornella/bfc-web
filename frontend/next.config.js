/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "127.0.0.1", "bfcornella-fluffy-telegram-9p4v5q6qv6w3x679-1337.preview.app.github.dev", "bfc-backend.fly.dev", "res.cloudinary.com"],
  }
}

module.exports = nextConfig
