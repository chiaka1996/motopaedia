/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/chiaka/**", // Cloudinary images
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**", // Icons8 images
      },
    ],
  },
};

export default nextConfig;


