module.exports = {
  publicPath:"./",
  pluginOptions: {
    i18n: {
      locale: 'zh_CH',
      fallbackLocale: 'zh_CH',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer:{
    port: 8083,
    host: "localhost",
    https: false,
    open: true,
    proxy:{
      '/':{
        target: "http://localhost:9088",
        changOrigin:true,
        pathRewrite:{
          '^/api': ''
        }
      }
    }
  }
}
