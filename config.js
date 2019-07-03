module.exports = {
    extends: ['eslint:recommended', 'prettier', 'prettier/react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    plugins: ['react'],
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-double'],
        'semi': ['error', 'always'],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/react-in-jsx-scope': 2,
    },
};
