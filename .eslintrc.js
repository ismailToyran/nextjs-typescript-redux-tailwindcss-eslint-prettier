module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'unicorn/prevent-abbreviations': 'off'
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'unicorn'],
  extends: ['airbnb-typescript', 'plugin:react-hooks/recommended', 'plugin:unicorn/recommended', 'prettier'],
  ignorePatterns: ['.eslintrc.js']
};
