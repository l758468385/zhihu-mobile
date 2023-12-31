const {createProxyMiddleware} = require('http-proxy-middleware');
}

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: '127.0.0.1:7100', changeOrigin: true, pathRewrite: {
            '^/api': ''
        }
    }))
}