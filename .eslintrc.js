const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/babel',
        'prettier/flowtype',
        'prettier/react',
        'prettier/standard',
    ],
    plugins: [
        'react-hooks',
        'babel',
        'flowtype',
        'prettier',
        'react',
        'standard',
        'redux-saga',
        'jsx-a11y',
    ],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {
        __DEV__: true,
        __PROD__: true,
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'config/webpack/webpack.config.resolver.babel.js',
            },
        },
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
    rules: {
        'prettier/prettier': ['error', prettierOptions],

        'react-hooks/rules-of-hooks': 'error',

        'linebreak-style': ['error', 'windows'],

        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': 'off',

        'block-spacing': 'warn',
        camelcase: 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': [
            'error',
            // {
            //     arrays: 'always-multiline',
            //     imports: 'always-multiline',
            //     objects: 'always-multiline',
            //     functions: 'only-multiline',
            // },
        ],
        'dot-notation': 'warn',
        'function-paren-newline': 'off',
        'generator-star-spacing': 'off',
        'global-require': 'off',
        indent: ['warn', 4, { SwitchCase: 1 }],
        'max-len': 'off',
        'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 5 }],

        'no-case-declarations': 'warn',
        'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
        'no-multi-spaces': [
            'warn',
            {
                exceptions: {
                    VariableDeclarator: true,
                    Property: false,
                },
            },
        ],
        'no-nested-ternary': 'warn',
        'no-param-reassign': ['warn', { props: false }],
        'no-plusplus': 'off',
        'no-restricted-globals': ['error', 'fdescribe', 'fit'],
        'no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
        'no-return-assign': ['error', 'except-parens'],
        'no-template-curly-in-string': 'warn',
        'no-trailing-spaces': 'warn',
        'no-underscore-dangle': 'off',
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],

        'object-curly-newline': 'off',
        'object-shorthand': ['warn', 'always'],

        'one-var': 'warn',
        'padded-blocks': 'warn',

        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
        'prefer-const': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-template': 'warn',
        'prefer-promise-reject-errors': 'off',

        quotes: ['warn', 'single', 'avoid-escape'],
        'require-jsdoc': [
            'off',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                },
            },
        ],

        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': 'warn',
        'spaced-comment': [
            'warn',
            'always',
            {
                exceptions: ['-+'],
                markers: [
                    'eslint-disable',
                    'eslint-disable-line',
                    'eslint-disable-next-line',
                    'eslint-enable',
                ],
            },
        ],

        'import/imports-first': 'off',
        'import/newline-after-import': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'error',
        'import/no-webpack-loader-syntax': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',

        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/heading-has-content': 'off',
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                controlComponents: ['Input'],
            },
        ],
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-quotes': 'warn',

        'react/destructuring-assignment': 0,
        'react/jsx-closing-tag-location': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-uses-vars': 2,
        'react/require-extension': 0,
        'react/self-closing-comp': 0,
        'require-yield': 0,

        'react/forbid-prop-types': 'off',
        'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/jsx-key': 'warn',
        'react/jsx-no-target-blank': 'off',
        'react/no-array-index-key': 'off',
        'react/no-danger': 'off',
        'react/no-did-mount-set-state': 'warn',
        'react/no-did-update-set-state': 'warn',
        'react/jsx-boolean-value': 'off',
        'react/jsx-no-duplicate-props': 'warn',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-unused-prop-types': 'warn',
        'react/no-unused-state': 'warn',
        'react/no-unescaped-entities': 'off',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'warn',
        'react/require-default-props': 'off',
        'react/sort-prop-types': 'warn',
        'react/sort-comp': [
            'warn',
            {
                order: ['constructor', 'lifecycle', 'everything-else', 'render'],
                groups: {
                    lifecycle: [
                        'state',
                        'statics',
                        'contextTypes',
                        'childContextTypes',
                        'getChildContext',
                        'propTypes',
                        'defaultProps',
                        'shouldComponentUpdate',
                        'componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'componentWillUpdate',
                        'componentDidUpdate',
                        'componentWillUnmount',
                    ],
                },
            },
        ],
        'redux-saga/no-yield-in-race': 'error',
        'redux-saga/yield-effects': 'error',

        'flowtype/boolean-style': ['error', 'boolean'],
        'flowtype/define-flow-type': 'warn',
        'flowtype/delimiter-dangle': ['error', 'never'],
        'flowtype/generic-spacing': ['error', 'never'],
        'flowtype/no-primitive-constructor-types': 'error',
        'flowtype/no-types-missing-file-annotation': 'error',
        'flowtype/no-weak-types': 'error',
        'flowtype/object-type-delimiter': ['error', 'comma'],
        'flowtype/require-parameter-type': ['warn', { excludeArrowFunctions: true }],
        'flowtype/require-return-type': [
            'error',
            'always',
            {
                annotateUndefined: 'never',
                excludeArrowFunctions: true,
            },
        ],
        'flowtype/require-valid-file-annotation': 'error',
        'flowtype/semi': ['error', 'always'],
        'flowtype/space-after-type-colon': ['error', 'always'],
        'flowtype/space-before-generic-bracket': ['error', 'never'],
        'flowtype/space-before-type-colon': ['error', 'never'],
        'flowtype/type-id-match': ['error', '^([A-Z][a-z0-9]+)+Type$'],
        'flowtype/union-intersection-spacing': ['error', 'always'],
        'flowtype/use-flow-type': 'warn',
        'flowtype/valid-syntax': 'warn',
    },
};
