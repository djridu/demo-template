const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    plugins: [
        new CopyPlugin([{ from: 'src/img/', to: 'img' }]),
        // your custom plugins
    ],
    module: {
        rules: [
            {
                test: /\.stories\.jsx?$/,
                loaders: [require.resolve('@storybook/addon-storysource/loader')],
                enforce: 'pre',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                        },
                    },
                ],
            },
        ],
    },
};
