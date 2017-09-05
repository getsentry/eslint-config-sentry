// Default: sentry react app
module.exports = {
  extends: [
    'sentry/rules/base',
    'sentry/rules/es6',
    'sentry/rules/react',
    'sentry/rules/imports'
  ],

  rules: {
    /**
     * Custom
     */
    // highlights literals in JSX components w/o translation tags
    'getsentry/jsx-needs-il8n': ["off"],
  }
};
