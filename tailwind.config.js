module.exports = {
    mode: "jit",
    purge: [
      './src/sections/Newsletter/Newsletter.jsx',
    ],
    theme: {
      extend: {
        height: {
          'screen-75': '90vh',
          'screen-50': '50vh'
        }
      },
    },
    variants: {
      extend: {
        scale: ['active', 'group-hover'],
      },
    },
    plugins: [],
  }