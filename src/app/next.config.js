const withCSS = require('@zeit/next-css')

// module.exports = {

  
//   withCSS: withCSS({
//     cssModules: true
//   })
// }


module.exports = withCSS({
  cssModules: true,
  poweredByHeader: false,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/cs': { page: '/cs' },
      '/accessibility': { page: '/accessibility' },
      '/thankyou': { page: '/thankyou' },
      '/menu': { page: '/menu' },
      '/location': { page: '/location' },
    }
  },    

  // Comment out this, it seems has some conflicts with next-css module.
  // distDir: '../functions/next',  
})  