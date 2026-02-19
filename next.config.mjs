const isGithubActions = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: isGithubActions ? "/ichiro-okochi.github.io" : "",
  assetPrefix: isGithubActions ? "/ichiro-okochi.github.io/" : "",
  experimental: {
    mdxRs: false
  }
};

export default nextConfig;
