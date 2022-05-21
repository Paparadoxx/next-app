module.exports = {
  images: {
    domains: ['courses-top.ruhttp', 'courses-top.ru'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
