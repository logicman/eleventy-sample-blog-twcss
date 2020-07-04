module.exports = {
  purge: {
    content: [
      './**/*.js',
      './**/*.11ty.js',
      './**/*.html',
      './**/*.njk',
    ],
  },
  theme: {
    fontFamily: {
      spacemono: ['Space Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        'mainblue': '#00AAFF',
        'cblue': '#539DC2',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],

  },
  plugins: [],
}