import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import utils from './helper/utils';
import paths from './helper/paths';
import env from './helper/env';
// import CompressionPlugin from 'compression-webpack-plugin';
// import OfflinePlugin from 'offline-plugin';

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
            new HtmlWebpackPlugin({
                inject: true,
                filename: 'index.html',
                template: utils.pathResolve(paths.PUBLIC_DIR, 'template.html'),
                excludeChunks: [],
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                },
            }),

            // Put it in the end to capture all the HtmlWebpackPlugin's
            // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
            // new OfflinePlugin({
            //     relativePaths: false,
            //     publicPath: '/',
            //     appShell: '/',
            //
            //     // No need to cache .htaccess. See http://mxs.is/googmp,
            //     // this is applied before any match in `caches` section
            //     excludes: ['.htaccess'],
            //
            //     caches: {
            //         main: [':rest:'],
            //
            //         // All chunks marked as `additional`, loaded after main section
            //         // and do not prevent SW to install. Change to `optional` if
            //         // do not want them to be preloaded at all (cached only when first loaded)
            //         additional: ['*.chunk.js'],
            //     },
            //
            //     // Removes warning for about `additional` section usage
            //     safeToUseOptionalCaches: true,
            // }),
            //
            // new CompressionPlugin({
            //     algorithm: 'gzip',
            //     test: /\.js$|\.css$|\.html$/,
            //     threshold: 10240,
            //     minRatio: 0.8,
            // }),

            // new CompressionPlugin({
            //     algorithm: 'gzip',
            //     compressionOptions: { level: 5 },
            // }),

            ...(env.isExperimental()
                ? [
                      new ManifestPlugin({
                          fileName: 'asset-manifest.json',
                          publicPath: paths.PUBLIC_PATH,
                      }),

                      new WorkboxWebpackPlugin.GenerateSW({
                          clientsClaim: true,
                          exclude: [/\.map$/, /asset-manifest\.json$/],
                          importWorkboxFrom: 'local',
                          navigateFallback: `${paths.PUBLIC_PATH.slice(0, -1)}/index.html`,
                          navigateFallbackBlacklist: [
                              // Exclude URLs starting with /_, as they're likely an API call
                              new RegExp('^/_'),
                              // Exclude URLs containing a dot, as they're likely a resource in
                              // public/ and not a SPA route
                              new RegExp('/[^/]+\\.[^/]+$'),
                          ],
                      }),

                      new WebpackPwaManifest({
                          name: 'Bin',
                          short_name: 'Bin',
                          description: 'Bin',
                          background_color: '#fafafa',
                          theme_color: '#b1624d',
                          icons: [
                              {
                                  src: utils.pathResolve(paths.SRC_DIR, 'assets/logo.svg'),
                                  sizes: [72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512],
                              },
                          ],
                      }),
                  ]
                : []),
        ].filter(Boolean),
        devServer: {},
    });
