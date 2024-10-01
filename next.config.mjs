/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**", // Allows all paths from tbn0
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com",
        port: "",
        pathname: "/**", // Allows all paths from tbn2
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**", // Allows all paths from tbn2
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", // Allows all paths from tbn2
      },
    ],
  },
};

export default nextConfig;
