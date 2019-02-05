import webpack from 'webpack';
import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import helpers from './helper';
import getDevServerConfig from './devServer/createDevServerConfig';

module.exports.default = new Config()
    .extend({
        'config/webpack/webpack.common.js': config => {
            config.entry = Object.keys(config.entry).reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: [require.resolve('react-app-polyfill/ie11'), ...config.entry[key]],
                }),
                {},
            );
            return config;
        },
    })
    .merge({
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin({
                inject: true,
                filename: 'index.html',
                template: helpers.utils.pathResolve(helpers.paths.PUBLIC_DIR, 'template.html'),
                excludeChunks: [],
            }),
        ].filter(Boolean),
        devServer: getDevServerConfig(helpers)(),
    });
