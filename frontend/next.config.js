/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "bfc-backend.fly.dev", "res.cloudinary.com"],
  }
}

module.exports = nextConfig
