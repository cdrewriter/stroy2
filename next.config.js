const withFonts = require('nextjs-fonts');
const path = require('path')

module.exports = {
  plugins: ['tailwindcss', 'postcss-preset-env'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});
