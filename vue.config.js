module.exports = {
  publicPath: process.env.NODE_ENV !== 'production'
    ? "/gg/"
    : "/" + process.env.VUE_APP_GH_REPO + "/",
  productionSourceMap: false,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    
    svgRule.uses.clear();

    svgRule
      .use('vue-loader')
      .loader('vue-loader-v16')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  
    config
      .plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_GH_REPO;
        args[0].author = process.env.VUE_APP_GH_OWNER;
        return args
      })
  }
}