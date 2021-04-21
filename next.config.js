const withFonts = require('nextjs-fonts');
const path = require('path')

module.exports = {
  basePath: '/',
  plugins: ['postcss-import','tailwindcss','postcss-nested','postcss-custom-properties', 'postcss-preset-env'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});
