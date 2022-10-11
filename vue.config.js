module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" + process.env.VUE_APP_GH_REPO + "/"
      : "/",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_GH_REPO;
      args[0].author = process.env.VUE_APP_GH_OWNER;
      return args;
    });
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/i, // (1)
          type: "file-loader",
        },
      ],
    },
  },
  pwa: {
    name: process.env.VUE_APP_GH_REPO,
    themeColor: "#17181C",
    msTileColor: "#17181C",
    iconPaths: {
      maskIcon: null,
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      msTileImage: null,
      appleTouchIcon: "img/icons/apple-touch-icon.png",
    },

    manifestOptions: {
      display: "standalone",
      background_color: "#17181C",
      icons: [
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },

    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      navigateFallback: "index.html",
      runtimeCaching: [
        {
          urlPattern: /^http.*github/,
          handler: "NetworkFirst",
          options: {
            cacheName: "api-cache",
            networkTimeoutSeconds: 2,
          },
        },
      ],
    },
  },
};
