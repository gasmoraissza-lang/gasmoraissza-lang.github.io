import createMDX from '@next/mdx';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/gasmoraissza-lang',
  assetPrefix: '/gasmoraissza-lang'
};

const withMDX = createMDX({
});

export default withMDX(nextConfig);
