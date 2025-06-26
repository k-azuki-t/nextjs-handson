import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        // 省略可: パスをもっと絞りたい場合
        // pathname: '/breeds/**'
      }
    ]
  }
};

export default nextConfig;
