const relaxedRules = require('.');

module.exports = {
  extends: ['sentry-app'],

  rules: {
    'no-console': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    // Recommended to use callback refs instead
    'react/no-find-dom-node': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    // This is now considered legacy, callback refs preferred
    'react/no-string-refs': ['error'],

    'jest/no-large-snapshots': ['error', {maxSize: 2000}],

    'sentry/no-styled-shortcut': ['error'],

    'no-restricted-imports': [
      'error',
      {
        paths: [
          ...relaxedRules.rules['no-restricted-imports'][1].paths,
          // Additional Strict import restrictions go here
        ],
      },
    ],
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
