import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default function({ env, paths, utils }) {
    const config = utils.getConfig;

    const getGlobals = () => {
        const customGlobalsFlags = Object.keys(config.customGlobalsFlags).reduce(
            (acc, key) => ({
                ...acc,
                [key]: !!process.argv.includes(config.customGlobalsFlags[key]),
            }),
            {},
        );

        return {
            ...{
                'process.env.NODE_ENV': JSON.stringify(env.getMode()),
                __ENV__: JSON.stringify(env.getMode()),
                __DEV__: env.getMode() === 'development',
                __STAGE__: env.isStage(),
                __PROD__: env.getMode() === 'production',
                __EXPERIMENTAL__: env.isExperimental(),
            },
            ...customGlobalsFlags,
        };
    };

    const getPlugins = () =>
        [
            new CleanWebpackPlugin([paths.BUILD_DIR], {
                root: paths.ROOT_DIR,
                verbose: true,
                dry: false,
            }),
            new webpack.DefinePlugin(getGlobals()),
            new MiniCssExtractPlugin({
                filename: config.outputs.css[env.getModeNaming()],
            }),

            ...(env.isVerbose()
                ? [
                      new CircularDependencyPlugin({
                          exclude: /a\.js|node_modules/,
                          failOnError: true,
                          cwd: process.cwd(),
                      }),
                  ]
                : []),

            ...(env.isDebug()
                ? []
                : [
                      new webpack.HashedModuleIdsPlugin({
                          hashFunction: 'sha256',
                          hashDigest: 'hex',
                          hashDigestLength: 20,
                      }),
                      ...(env.isAnalyze() ? [new BundleAnalyzerPlugin()] : []),
                  ]),
        ].filter(Boolean);

    return getPlugins();
}
