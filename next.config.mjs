import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    if (!options.dev) {
      config.plugins.push(new CssMinimizerPlugin())
    }

    return config
  }
};

export default nextConfig;
