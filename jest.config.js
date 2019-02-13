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
        '!src/app.js',
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
    resolver: 'jest-pnp-resolver',
    moduleDirectories: [...config.modules],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/config/testing/mocks/cssModule.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/config/testing/mocks/image.js',
    },
    modulePathIgnorePatterns: ['<rootDir>/build/'],
    prettierPath: '<rootDir>/node_modules/prettier',
    setupFiles: ['@babel/polyfill', 'react-app-polyfill/jsdom'],
    // setupFilesAfterEnv: ['<rootDir>/config/testing/test-bundler.js'],
    setupFilesAfterEnv: ['react-testing-library/cleanup-after-each'],
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>/src/**/tests/**/*.{js,jsx}',
        '<rootDir>/src/**/?(*.)(spec|test).{js,jsx}',
    ],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/testing/cssTransform.js',
        '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/testing/fileTransform.js',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
};
