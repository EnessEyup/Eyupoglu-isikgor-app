module.exports = {
  root: true,
  extends: ['@react-native/eslint-config', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react-native/no-inline-styles': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          'CallExpression[callee.object.name="console"][callee.property.name=/^(log|info|warn|error)$/]',
        message: 'Use logger instead of console',
      },
    ],
  },
  overrides: [
    {
      files: ['**/logger.js', '**/scripts/**'],
      rules: {
        'no-console': 'off',
        'no-restricted-syntax': 'off',
      },
    },
    {
      files: ['scripts/**/*.js'],
      rules: {
        'no-console': 'off',
        'no-restricted-syntax': 'off',
      },
    },
  ],
};
