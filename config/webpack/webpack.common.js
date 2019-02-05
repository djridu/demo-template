import Config from 'webpack-config';
import helpers from './helper';
import modules from './modules';

const isNeedSourceMap = helpers.env.isStage() || helpers.env.isDebug() ? 'source-map' : false;

const getCoreConfig = () => {
    helpers.env.showState();

    return {
        context: helpers.paths.ROOT_DIR,
        mode: helpers.env.getMode(),
        entry: modules.getEntries(helpers),
        output: modules.getOutputs(helpers),
        resolve: modules.getResolve(helpers),
        module: modules.getLoaders(helpers),
        plugins: modules.getPlugins(helpers),
        bail: !helpers.env.isDebug(),
        stats: modules.getStats(helpers),
        node: modules.getNode(),
        devtool: isNeedSourceMap,
        optimization: modules.getOptimization(helpers),
        performance: modules.getPerformance(helpers),
        target: 'web',
    };
};

export default new Config().merge(getCoreConfig());
