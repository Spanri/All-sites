module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // 'eslint:recommended',
  ],
  rules: {
    'no-extra-semi': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [
      2, 'always',
    ],
    'space-before-function-paren': [
      2, 'never',
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parser: 'babel-eslint',
};