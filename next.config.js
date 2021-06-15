// next.config.js

module.exports = {
  future: {
    reactStrictMode: true,
    strictPostcssConfiguration: true
  },
  images: {
    domains: ['images.ctfassets.net'],
    deviceSizes: [320, 420, 768, 1024, 1200]
  },
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en'
  }
};
