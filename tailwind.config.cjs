// tailwind.config.cjs
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    './src/**/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  // more options here
};