import fs from 'fs';
import path from 'path';

const pathResolve = (...args) => path.resolve(fs.realpathSync(process.cwd()), ...args);
const getPackageJson = require(pathResolve('package.json'));
const getBabelrc = require(pathResolve('babel.config.js'));
const getConfig = require(pathResolve('build.config.js'));
const getDeps = () =>
    (getConfig.deps || []).map(dep => ({ ...dep, path: fs.realpathSync(dep.path) }));

export default {
    pathResolve,
    getPackageJson,
    getBabelrc,
    getConfig,
    getDeps,
};
