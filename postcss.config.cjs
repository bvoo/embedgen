const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
  syntax: 'postcss-scss',
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer({
      cascade: true,
    }),
    !dev && cssnano({
      preset: 'default',
    }),
    !dev && false && purgecss({
      content: ['./src/**/*.html', './src/**/*.svelte'],
      safelist: ['/.*\\\[.*\\\]/', 'BAYZED']
    }),
  ],
};

module.exports = config;
