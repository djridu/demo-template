const fs = require('fs');
const path = require('path');

const ROOT_DIR = fs.realpathSync(process.cwd());
const pathResolve = (...args) => path.resolve(ROOT_DIR, ...args);
const config = require(pathResolve('build.config.js'));
const eslint = require(pathResolve('.eslintrc.js'));

module.exports = {
    collectCoverage: false,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.test.{js,jsx,ts,tsx}',
        '!src/app.tsx',
        '!src/*/*/Loadable.{js,jsx}',
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
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/config/testing/mocks/cssModule.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/config/testing/mocks/image.js',
    },
    modulePathIgnorePatterns: ['<rootDir>/build/'],
    prettierPath: '<rootDir>/node_modules/prettier',
    setupFiles: ['@babel/polyfill', 'react-app-polyfill/jsdom'],
    // setupFilesAfterEnv: ['<rootDir>/config/testing/test-bundler.js'],
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>/src/**/tests/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
    ],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/testing/cssTransform.js',
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/testing/fileTransform.js',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
};
