module.exports = {
  devServer: {
    open: true, // 自动打开网页
    port: 8080, // 端口号
    proxy: {
      '/api': {
        target: 'http://192.168.0.66:8080', // 公共地址
        changeOrigin: true, // ??我也忘了
        pathRewrite: {
          '^/api': '' // 反向代理
        }
      }
    }
  }
}
