module.exports = {
  publicPath: "./",
  outputDir: "dist", // 输出文件目录
  assetsDir: "./static", //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: "./index.html", //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  lintOnSave: true,
  transpileDependencies: [],
  productionSourceMap: false,
  devServer: {
    open: true,
    proxy: {
      "/api": {
        //  接口请求路径
        target: `http://lyjgw.net/`,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        views: "@/views"
      }
    }
  }
};
