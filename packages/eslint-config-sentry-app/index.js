const eslintConfigSentryReact = require('eslint-config-sentry-react/rules/imports') 

// Default: sentry app
const config = {
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

  plugins: ['react', 'prettier', 'sentry', 'import'],

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

          {
            name: 'marked',
            message:
              "Please import marked from 'app/utils/marked' so that we can ensure sanitation of marked output.",
          },

          {
            name: 'lodash',
            message:
              "Please import lodash utilities individually. e.g. `import isEqual from 'lodash/isEqual';`. See https://github.com/getsentry/frontend-handbook#lodash from for information",
          },
        ],
      },
    ],

    'sentry/no-react-hooks': ['error'],
    
    'sentry/no-digits-in-tn': ['error'],
  },
};

//reuses the common rule import/order from the package 'eslint-config-sentry-react'
config.rules['import/order'] = eslintConfigSentryReact.rules['import/order']

// and includes a sentry/getSentry package-specific rule - pathGroups
config.rules['import/order'][1] = {
  ...config.rules['import/order'][1],
  pathGroups: [
    {
      pattern: '@emotion/styled',
      group: 'external',
    },
    {
      pattern: 'sentry*/**',
      group: 'internal',
    },
  ],
  pathGroupsExcludedImportTypes: ['builtin'],
}

module.exports = config