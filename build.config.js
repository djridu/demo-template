const fs = require('fs');
const path = require('path');

const ROOT_DIR = fs.realpathSync(process.cwd());
const pathResolve = (...args) => path.resolve(ROOT_DIR, ...args);

const SRC_DIR = 'src';
const BUILD_DIR = 'build';
const PUBLIC_DIR = 'public';

module.exports = {
    entries: {
        main: ['app.js'],
    },
    outputs: {
        path: 'build',
        publicPath: '',
        filename: {
            development: '[name].[hash:8].js',
            staging: '[name].[hash:8].js',
            production: '[name].[hash:8].js',
        },
        chunkFilename: {
            development: '[name].[hash:8].chunk.js',
            staging: '[name].[hash:8].chunk.js',
            production: '[name].[hash:8].chunk.js',
        },
        css: {
            development: '[name].[hash:8].css',
            staging: '[name].[hash:8].css',
            production: '[name].[hash:8].css',
        },
        assetName: {
            development: '[path][name]_[hash:8].[ext]',
            staging: '[path][name]_[hash:8].[ext]',
            production: '[path][name].[hash:8].[ext]',
        },
    },
    dir: {
        SRC_DIR,
        BUILD_DIR,
        PUBLIC_DIR,
    },
    deps: [
        {
            alias: 'async-injection-reducer-saga',
            path: pathResolve(ROOT_DIR, 'packages/async-injection-reducer-saga'),
        },
        {
            alias: 'configure-store',
            path: pathResolve(ROOT_DIR, 'packages/configure-store'),
        },
        {
            alias: 'create-immer-reducer',
            path: pathResolve(ROOT_DIR, 'packages/create-immer-reducer'),
        },
        {
            alias: 'lazy-loadable',
            path: pathResolve(ROOT_DIR, 'packages/lazy-loadable'),
        },
        {
            alias: 'styled-atoms',
            path: pathResolve(ROOT_DIR, 'packages/styled-atoms'),
        },
    ],
    alias: {},
    modules: ['node_modules', 'packages', 'src', 'src/modules/view'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    aliasResolveExtensions: ['.js', '.jsx', '.react.js'],
    devServer: {
        port: 8094,
        host: 'localhost',
        entry: 'index.html',
    },
    customGlobalsFlags: {
        __TEST__: '--test',
    },
    regexScripts: /\.(js|jsx|mjs)$/,
    regexImgToCss: /\.(bmp|gif)$/,
    regexImgToFile: /\.(jpg|jpeg|png)$/,
};
