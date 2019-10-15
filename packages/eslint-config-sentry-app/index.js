// Default: sentry app
module.exports = {
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'sentry-react',
  ],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      legacyDecorators: true,
    },
  },

  env: {
    browser: true,
    es6: true,
    jest: true,
    jquery: true, // hard-loaded into vendor.js
  },

  plugins: ['react', 'import', 'prettier'],

  settings: {
    'import/resolver': 'webpack',
    'import/extensions': ['.js', '.jsx'],
  },

  /**
   * Rules
   */
  rules: {
    /**
     * Restricted imports, e.g. deprecated libraries, etc
     *
     * See: https://eslint.org/docs/rules/no-restricted-imports
     */
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'enzyme',
            message:
              'Please import from `sentry-test/enzyme` instead. See: https://github.com/getsentry/frontend-handbook#undefined-theme-properties-in-tests for more information',
          },
        ],
      },
    ],
  },
};
