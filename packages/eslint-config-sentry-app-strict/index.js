module.exports = {
  extends: [
    'sentry-app'
  ],

  rules: {
    "no-console": ['error'],
    "no-debugger": ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    // Recommended to use callback refs instead
    'react/no-find-dom-node': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    // This is now considered legacy, callback refs preferred
    'react/no-string-refs': ['error'],

    'jest/no-large-snapshots': ['error', {maxSize: 2000}],
  },
};
