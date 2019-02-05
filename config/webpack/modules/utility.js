export const getEntries = ({ paths, utils }) =>
    Object.keys(utils.getConfig.entries).reduce(
        (prev, key) => ({
            ...prev,
            [key]: [
                ...utils.getConfig.entries[key].map(item => utils.pathResolve(paths.SRC_DIR, item)),
            ],
        }),
        {},
    );

export const getOutputs = ({ env, utils }) => ({
    path: utils.pathResolve(utils.getConfig.outputs.path),
    publicPath: utils.getConfig.outputs.publicPath,
    pathinfo: env.isVerbose(),
    filename: `${utils.getConfig.outputs.filename[env.getModeNaming()]}`,
    chunkFilename: `${utils.getConfig.outputs.chunkFilename[env.getModeNaming()]}`,
});

export const getResolve = ({ utils }) => {
    const config = utils.getConfig;

    const getResolveAlias = () => {
        const alias = {};

        utils.getDeps().forEach(dep => {
            if (dep.alias) {
                alias[dep.alias] = dep.path;
            }
        });

        return Object.assign(alias, config.alias || {});
    };

    return {
        alias: getResolveAlias(),
        extensions: config.aliasResolveExtensions,
        modules: [...config.modules],
        mainFields: [...config.mainFields],
    };
};

export const getNode = () => ({
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
});

export const getStats = ({ paths }) => ({
    // assets: env.isVerbose(),
    // cached: env.isVerbose(),
    // cachedAssets: env.isVerbose(),
    // chunks: env.isVerbose(),
    // chunkModules: env.isVerbose(),
    colors: true,
    // hash: env.isVerbose(),
    // modules: env.isVerbose(),
    // reasons: env.isDebug(),
    // timings: true,
    // builtAt: true,
    context: paths.SRC_DIR,
    // errors: true,
    // errorDetails: true,
    // performance: true,
    // version: true,
    // warnings: true,
});

export const getPerformance = ({ env }) => {
    if (env.isDebug()) {
        return {
            hints: false,
        };
    }

    return {
        assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    };
};
