const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000', // 将请求代理到的目标服务器地址
      changeOrigin: true, // 是否改变请求头中的 Origin 值
      WDS_SOCKET_PORT:0
    })
  );
};