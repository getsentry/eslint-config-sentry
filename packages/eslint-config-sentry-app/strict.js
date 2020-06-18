const relaxedRules = require('.');

module.exports = {
  extends: ['sentry-app'],

  rules: {
    'no-console': ['error'],
    'no-debugger': ['error'],

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
          {
            name: 'reflexbox',
            message:
              '`reflexbox` (previously `grid-emotion`) is deprecated. Please remove usage of `reflexbox` unless you are editing a Panel component or a component with breakpoints. See https://github.com/getsentry/frontend-handbook/blob/master/migration-guides/grid-emotion.md for migration help.',
          },
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
