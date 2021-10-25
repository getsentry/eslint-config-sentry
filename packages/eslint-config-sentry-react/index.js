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

  plugins: ['jest-dom'],

  rules: {
    /**
     * Custom
     */
    // highlights literals in JSX components w/o translation tags
    'getsentry/jsx-needs-il8n': ['off'],
  },
};
