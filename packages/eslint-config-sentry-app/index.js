// Default: sentry app
module.exports = {
  extends: [
    'sentry-react',

    // These prettier plugins need to be last so they can override plugin rules
    // See https://github.com/prettier/eslint-config-prettier/blob/master/README.md#installation
    // for plugin exclusions
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],

  parser: '@typescript-eslint/parser',

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

  plugins: ['@typescript-eslint', 'emotion', 'import', 'prettier', 'react', 'sentry'],

  settings: {
    'import/resolver': 'webpack',
    'import/extensions': ['.js', '.jsx'],
  },

  /**
   * Rules
   */
  rules: {
    /**
     * emotion rules for v10
     *
     * This probably aren't as necessary anymore, but let's remove when we move to v11
     */
    'emotion/jsx-import': 'off',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',

    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',

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
          {
            name: 'lodash/get',
            message:
              'Optional chaining `?.` and nullish coalescing operators `??` are available and preferred over using `lodash/get`. See https://github.com/getsentry/frontend-handbook#new-syntax for more information',
          },
        ],
      },
    ],

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
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
      },
    ],

    'sentry/no-react-hooks': ['error'],

    'sentry/no-digits-in-tn': ['error'],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      /**
       * Override rules for typescript files
       */
      rules: {},
    },
  ],
};
