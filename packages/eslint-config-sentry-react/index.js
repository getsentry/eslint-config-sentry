// Default: sentry react app
module.exports = {
  extends: ['sentry', 'sentry-react/rules/react', 'sentry-react/rules/imports'],

  rules: {
    /**
     * Custom
     */
    // highlights literals in JSX components w/o translation tags
    'getsentry/jsx-needs-il8n': ['off'],
  },
};
