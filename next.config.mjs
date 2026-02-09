/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"], // Add the domain here
  },
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
