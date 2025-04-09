// next.config.js
/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_ENV === "GH_PAGES";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export if using next/image
  },
  basePath: isGithubPages ? "/seif-portfolio" : "",
  assetPrefix: isGithubPages
    ? "https://github.com/seifmoustafa/seif-portfolio"
    : "",
};

module.exports = nextConfig;
