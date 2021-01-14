const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

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
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('base', resolve('baseConfig'))
      .set('public', resolve('public'))
  }
}
