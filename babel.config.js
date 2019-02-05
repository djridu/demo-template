module.exports = {
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [
        ['babel-plugin-styled-components', { fileName: false }], // eslint-disable-line prettier/prettier
        ['@babel/proposal-decorators', { legacy: true }], // eslint-disable-line prettier/prettier
        ['@babel/proposal-class-properties', { loose: false }], // eslint-disable-line prettier/prettier
        '@babel/transform-runtime',
        '@babel/transform-spread',
        '@babel/proposal-object-rest-spread',
        '@babel/proposal-export-namespace-from',
        '@babel/proposal-export-default-from',
        '@babel/syntax-dynamic-import',
        '@babel/syntax-import-meta',
        '@babel/plugin-transform-template-literals',
        '@babel/transform-modules-commonjs',
        ['@babel/transform-async-to-generator', { module: 'bluebird', method: 'coroutine' }], // eslint-disable-line prettier/prettier
        // maybe usage
        '@babel/proposal-function-bind',
        '@babel/proposal-logical-assignment-operators',
        '@babel/proposal-do-expressions',
        '@babel/proposal-function-sent',
        '@babel/proposal-numeric-separator',
        '@babel/proposal-throw-expressions',
        '@babel/proposal-json-strings',
        ['@babel/proposal-optional-chaining', { loose: false }], // eslint-disable-line prettier/prettier
        ['@babel/proposal-pipeline-operator', { proposal: 'minimal' }], // eslint-disable-line prettier/prettier
        ['@babel/proposal-nullish-coalescing-operator', { loose: false }], // eslint-disable-line prettier/prettier
    ],
    env: {
        development: {
            plugins: [],
        },
        production: {
            plugins: [
                'lodash',
                'transform-react-remove-prop-types',
                '@babel/transform-react-inline-elements',
                '@babel/transform-react-constant-elements',
                '@babel/transform-flow-strip-types',
                '@babel/transform-object-assign',
                [
                    'transform-imports',
                    {
                        lodash: {
                            transform: 'lodash/${member}',
                            preventFullImport: true,
                        },
                    },
                ],
            ],
        },
        test: {
            plugins: ['@babel/transform-modules-commonjs', 'dynamic-import-node'],
            sourceMaps: 'both',
        },
    },
};
