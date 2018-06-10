const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('@csstools/postcss-sass');

const plugins = [
  sass(),
  autoprefixer(),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(cssnano());
}

module.exports = {
  plugins,
};
