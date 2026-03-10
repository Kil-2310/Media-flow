const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        '@': './src'
      }
    }
  }
};

export default nextConfig;