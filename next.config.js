module.exports = {
  images: {
    domains: ['courses-top.ru', 'courses-top.ruhttp'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
