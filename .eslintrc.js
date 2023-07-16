module.exports = {
  env: {
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'off',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 160,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
};
