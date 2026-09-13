import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old /projects, /experience, /skills and /resume routes rendered
  // fragments of the home page. They are gone; keep inbound links alive.
  async redirects() {
    return [
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/skills", destination: "/#stack", permanent: true },
      { source: "/resume", destination: "/resume.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
