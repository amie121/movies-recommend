// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%']
    }

    // to edit target browsers: use "browserslist" field in package.json
  }
};
