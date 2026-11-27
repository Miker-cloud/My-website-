/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile the workspace packages (they ship as TypeScript source).
  transpilePackages: ["@tarians/types", "@tarians/mock-data", "@tarians/ai"],
};

export default nextConfig;
