// Default: sentry react app
module.exports = {
  extends: [
    'sentry',
    'sentry-react/rules/react',
    'sentry-react/rules/imports',
    'plugin:jest/recommended',
    'sentry-react/rules/jest',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
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

    // Disabled as we have many tests which render as simple validations
    'jest/expect-expect': 'off',

    // Disabled as we have some comment out tests that cannot be
    // uncommented due to typescript errors.
    'jest/no-commented-out-tests': 'off',

    // Disabled as we do sometimes have conditional expects
    'jest/no-conditional-expect': 'off',

    // Useful for exporting some test utilities
    'jest/no-export': 'off',

    'typescript-sort-keys/interface': [
      'error',
      'asc',
      {caseSensitive: true, natural: false, requiredFirst: true},
    ],

    // Disallow importing `import React from 'react'`. This is not needed since
    // React 17. We prefer the named imports for potential tree-shaking gains
    // in the future.
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: 'Prefer named React imports (React types DO NOT need imported!)',
          },
        ],
      },
    ],
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
