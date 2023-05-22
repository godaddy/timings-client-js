module.exports = {
  env: {
    es2020: true,
    node: true,
    mocha: true
  },
  extends: 'godaddy',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'eqeqeq': ['error', 'smart'],
    'max-statements': 'off',
    'complexity': 'off',
    'no-process-env': 'off',
    'no-console': 'off',
    'mocha/no-exclusive-tests': 'error',
    'quote-props': 'off'
  }
};
