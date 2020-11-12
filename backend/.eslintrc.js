module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'semi': ["error", "never"],
        "quotes": ["error", "single"],
        'no-multiple-empty-lines': ['warn', {"max": 2, "maxEOF": 0}]
    },
};
