// Default: sentry react app
module.exports = {
  extends: [
    'sentry',
    'sentry-react/rules/react',
    'sentry-react/rules/imports',
    'plugin:jest/recommended',
    'sentry-react/rules/jest',
    'plugin:jest-dom/recommended',
  ],

  plugins: ['jest-dom', 'testing-library', 'typescript-sort-keys'],

  rules: {
    /**
     * Custom
     */
    // highlights literals in JSX components w/o translation tags
    'getsentry/jsx-needs-il8n': ['off'],
    'testing-library/render-result-naming-convention': 'off',
    'testing-library/no-unnecessary-act': 'off',
    'typescript-sort-keys/interface': ['error', 'asc', {'caseSensitive': true, 'natural': false, 'requiredFirst': true }],
  },

  /**
   * Our current version of eslint unfortunately does not support extends in
   * overrides. Once we upgrade we can uncomment this and remove local
   * .eslintrc.js files in test folders. It is there to ensure that
   * testing-library rules run only against test files.
   */
  // overrides: [
  //   {
  //     files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  //     extends: ['plugin:testing-library/react'],
  //   },
  // ],
};
