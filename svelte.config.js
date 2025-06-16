import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

const config = {
  kit: {
    appDir: 'app',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: '/crestron-controlpanel-1screen2input',
      relative: false
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;