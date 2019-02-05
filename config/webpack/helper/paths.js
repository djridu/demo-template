import fs from 'fs';
import path from 'path';

const ROOT_DIR = fs.realpathSync(process.cwd());
const pathResolve = (...args) => path.resolve(ROOT_DIR, ...args);
const config = require(pathResolve('build.config.js'));

export default {
    ROOT_DIR,
    SRC_DIR: pathResolve(config.dir.SRC_DIR),
    BUILD_DIR: pathResolve(config.dir.BUILD_DIR),
    PUBLIC_DIR: pathResolve(config.dir.PUBLIC_DIR),
    PUBLIC_PATH: config.outputs.publicPath,
};
