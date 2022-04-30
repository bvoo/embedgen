import nodeAdapter from '@sveltejs/adapter-node';
import cfAdapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

let adapter;

if (process.env.NODE_ENV === 'production') {
  adapter = cfAdapter();
} else {
  adapter = nodeAdapter({ out: 'dist' });
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
      scss: {
        prependData: '@use "src/styles/variables.scss" as *;',
      },
    }),
  ],

  kit: {
    adapter,

    vite: {
      fs: {
        allow: ['routes'],
      },
      css: {
        preprocessorOptions: {
          postcss: true,
          scss: {
            additionalData: '@use "src/styles/variables.scss" as *;',
          },
        },
      },
    },
  },
};

export default config;
