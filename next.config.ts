import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // Menambahkan localhost ke daftar domain yang diizinkan
  },
};

export default nextConfig;
