const fs = require('fs');
const path = require('path');

const ROOT_DIR = fs.realpathSync(process.cwd());
const pathResolve = (...args) => path.resolve(ROOT_DIR, ...args);
const config = require(pathResolve('build.config.js'));
const eslint = require(pathResolve('.eslintrc.js'));

module.exports = {
    collectCoverage: false,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/**/*.test.{js,jsx}',
        '!src/*/RbGenerated*/*.{js,jsx}',
        '!src/app.js',
        '!src/global-styles.js',
        '!src/*/*/Loadable.{js,jsx}',
        '!flow-typed/**/*',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
    globals: {
        ...eslint.globals,
    },
    moduleDirectories: [...config.modules],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/config/testing/mocks/cssModule.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/config/testing/mocks/image.js',
    },
    modulePathIgnorePatterns: ['<rootDir>/build/'],
    prettierPath: '<rootDir>/node_modules/prettier',
    setupFiles: ['raf/polyfill'],
    setupFilesAfterEnv: ['<rootDir>/config/testing/test-bundler.js'],
    testEnvironment: 'jest-environment-jsdom',
    testRegex: '/tests/.*?\\.(test|spec)\\.js$',
    testURL: 'http://localhost',
    timers: 'real',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};
