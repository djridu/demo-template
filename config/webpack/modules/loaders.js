import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function({ env, paths, utils }) {
    const config = utils.getConfig;
    const babelRc = utils.getBabelrc;
    const { regexScripts, regexImgToCss, regexImgToFile } = config;
    const isNeedSourceMaps = env.isStage() || env.isDebug();

    const getJsxLoader = () => ({
        test: regexScripts,
        include: [...utils.getDeps().map(dep => dep.path), paths.SRC_DIR],
        loader: 'babel-loader',
        options: {
            babelrc: false,
            cacheDirectory: env.isDebug(),
            presets: (babelRc.presets || []).map(preset => {
                const presetName = typeof preset === 'string' ? preset : preset[0];
                const presetOptions = typeof preset === 'string' ? {} : preset[1];
                if (presetName === '@babel/preset-env') {
                    return [
                        '@babel/preset-env',
                        {
                            ...presetOptions,
                            forceAllTransforms: !env.isDebug(),
                            modules: false,
                            useBuiltIns: 'usage',
                            debug: false,
                        },
                    ];
                }

                if (presetName === '@babel/preset-react') {
                    return [
                        '@babel/preset-react',
                        {
                            ...presetOptions,
                            development: env.isDebug(),
                        },
                    ];
                }

                return preset;
            }),
            plugins: [
                ...(babelRc.plugins || []),
                ...(babelRc.env[env.getMode()].plugins || []),
            ].filter(a => a),
        },
    });

    const generateStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: require.resolve('css-loader'),
                options: cssOptions,
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-calc'),
                        require('postcss-color-function'),
                        require('postcss-flexbugs-fixes'),
                        require('postcss-preset-env')({
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                            stage: 3,
                        }),
                    ],
                    sourceMap: isNeedSourceMaps,
                },
            },
        ];

        if (preProcessor) {
            loaders.push({
                loader: require.resolve(preProcessor),
                options: {
                    sourceMap: isNeedSourceMaps,
                },
            });
        }

        return loaders;
    };

    const getCssLoaders = () => [
        {
            test: /\.(css)$/,
            loader: generateStyleLoaders({
                importLoaders: 1,
                sourceMap: isNeedSourceMaps,
            }),
            sideEffects: true,
        },
        // {
        //     test: /\.(less)$/,
        //     loader: generateStyleLoaders(
        //         {
        //             importLoaders: 2,
        //             sourceMap: isNeedSourceMaps,
        //         },
        //         'less-loader',
        //     ),
        //     sideEffects: true,
        // },
    ];

    const getLoadersImgToCss = () => ({
        test: regexImgToCss,
        use: [
            {
                loader: 'url-loader',
                options: {
                    plugins: [
                        require('imagemin-gifsicle')({
                            interlaced: false,
                        }),
                        require('imagemin-mozjpeg')({
                            progressive: true,
                            arithmetic: false,
                        }),
                        require('imagemin-svgo')({
                            plugins: [{ removeTitle: true }, { convertPathData: false }],
                        }),
                    ],
                },
            },
        ],
    });

    const getLoadersImages = () => [
        {
            test: regexImgToFile,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: config.outputs.assetName[env.getModeNaming()],
                    },
                },
            ],
        },
    ];

    const getLoadersSvg = () => [
        {
            test: /\.svg$/,
            issuer: {
                test: /\.js$/,
            },
            use: [
                '@svgr/webpack',
                {
                    loader: 'file-loader',
                    options: {
                        name: config.outputs.assetName[env.getModeNaming()],
                    },
                },
            ],
        },
        {
            test: /\.svg$/,
            issuer: {
                test: /\.css$/,
            },
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: config.outputs.assetName[env.getModeNaming()],
                    },
                },
            ],
        },
    ];

    const getEsLintLoader = () => ({
        enforce: 'pre',
        test: regexScripts,
        exclude: [/node_modules/, /public/],
        use: [
            {
                options: {
                    formatter: require.resolve('react-dev-helper/eslintFormatter'),
                    eslintPath: require.resolve('eslint'),
                    ignore: false,
                    useEslintrc: true,
                },
                loader: require.resolve('eslint-loader'),
            },
        ],
    });

    const getLoaders = () => {
        const loaders = [];

        if (env.isEsLintOn()) {
            loaders.push(getEsLintLoader());
        }

        loaders.push({
            oneOf: [
                getLoadersImgToCss(),
                ...getLoadersImages(),
                ...getLoadersSvg(),
                getJsxLoader(),
                ...getCssLoaders(),
                {
                    test: /\.html$/,
                    use: 'html-loader',
                },
                {
                    test: regexImgToFile,
                    issuer: {
                        test: /\.js$/,
                    },
                    use: [
                        '@svgr/webpack',
                        {
                            loader: 'file-loader',
                            options: {
                                name: config.outputs.assetName[env.getModeNaming()],
                            },
                        },
                    ],
                },
                {
                    loader: require.resolve('file-loader'),
                    exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
                    options: {
                        name: config.outputs.assetName[env.getModeNaming()],
                    },
                },
            ],
        });

        if (!env.isDebug()) {
            loaders.push({
                test: utils.pathResolve('node_modules/react-deep-force-update/lib/index.js'),
                loader: 'null-loader',
            });
        }

        return {
            rules: loaders,
        };
    };

    return getLoaders();
}
