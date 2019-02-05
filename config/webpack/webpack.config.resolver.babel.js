import utils from './helper/utils';

const getResolve = () => {
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

module.exports = {
    resolve: getResolve(),
};
