// Default: sentry react app
module.exports = {
  extends: [
    'sentry',
    './rules/react',
    './rules/imports',
    'plugin:jest/recommended',
    './rules/jest',
  ],

  rules: {
    /**
     * Custom
     */
    // highlights literals in JSX components w/o translation tags
    'getsentry/jsx-needs-il8n': ['off'],
  },
};
