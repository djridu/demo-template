import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import safePostCssParser from 'postcss-safe-parser';

export default function({ env }) {
    const isNeedSourceMaps = env.isStage() || env.isDebug();

    const getSplitChunks = () => {
        if (env.isDebug()) {
            return {
                chunks: 'all',
            };
        }

        return {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
                main: {
                    chunks: 'all',
                    minChunks: 2,
                    reuseExistingChunk: true,
                    enforce: true,
                },
            },
        };
    };

    const getOptimization = () => ({
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: getSplitChunks(),
        minimize: !env.isDebug(),
        noEmitOnErrors: !env.isDebug(),
        minimizer: [
            new TerserPlugin({
                sourceMap: isNeedSourceMaps,
                terserOptions: {
                    ecma: 8,
                    warnings: false,
                    parse: {},
                    compress: {
                        comparisons: false,
                    },
                    mangle: true,
                    module: false,
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                    // ie8: true,
                    // safari10: true,
                },
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    parser: safePostCssParser,
                    map: isNeedSourceMaps
                        ? {
                              inline: false,
                              annotation: true,
                          }
                        : false,
                    discardComments: { removeAll: true },
                },
            }),
        ],
    });

    return getOptimization();
}
