const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/keepalive', {
            ws: true,
            secure: false,
            changeOrigin: true,
            target: 'http://...',
        }),
    );
    app.use(
        proxy('/auth', {
            ws: true,
            secure: false,
            changeOrigin: true,
            target: 'http://...',
        }),
    );
    app.use(
        proxy('/crm', {
            ws: true,
            secure: false,
            changeOrigin: true,
            target: 'http://...',
        }),
    );
    app.use(
        proxy('/stomp', {
            ws: true,
            secure: false,
            changeOrigin: true,
            target: 'http://...',
        }),
    );
};
