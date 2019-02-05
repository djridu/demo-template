import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware';
import evalSourceMapMiddleware from 'react-dev-utils/evalSourceMapMiddleware';
import noopServiceWorkerMiddleware from 'react-dev-utils/noopServiceWorkerMiddleware';
import { choosePort, prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';

export default function({ paths, utils }) {
    const config = utils.getConfig;
    const ENTRY_POINT = config.devServer.entry;
    const PORT = config.devServer.port;
    const HOST = config.devServer.host;
    const protocol = process.env.HTTPS === 'true';
    const urls = prepareUrls(protocol, HOST, choosePort(HOST, PORT));

    return () => ({
        index: `${paths.PUBLIC_DIR}/${ENTRY_POINT}`,
        contentBase: paths.BUILD_DIR,
        publicPath: '',
        https: protocol,
        port: PORT,
        host: HOST,
        public: urls.lanUrlForConfig,
        compress: true,
        clientLogLevel: 'none',
        open: true,
        hot: true,
        quiet: true,
        watchContentBase: true,
        watchOptions: {
            ignored: ['node_modules'],
        },
        overlay: {
            warnings: false,
            errors: true,
        },
        historyApiFallback: true,
        before(app, server) {
            // if (fs.existsSync(utils.pathResolve('config/webpack/devServer/setupProxy.js'))) {
            //     require(utils.pathResolve('config/webpack/devServer/setupProxy.js'))(app);
            // }
            app.use(evalSourceMapMiddleware(server));
            app.use(errorOverlayMiddleware());
            app.use(noopServiceWorkerMiddleware());
        },
    });
}
