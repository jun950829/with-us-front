/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '',
  compiler: {
    styledComponents: true
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\\.svg$/,
      issuer: /\\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  images: {
    imageSizes: [16, 64],
    deviceSizes: [640, 1080]
  }
};

module.exports = nextConfig;
