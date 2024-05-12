module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    plugins: ['prettier', 'jest'],
    extends: ['eslint:recommended', 'plugin:jest/recommended','prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'no-var': 'error',
        'prettier/prettier': 'error',
    },
};