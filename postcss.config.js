const autoprefixer = require('autoprefixer');
const sass = require('@csstools/postcss-sass');

module.exports = {
  plugins: [
    sass(),
    autoprefixer(),
  ],
};
