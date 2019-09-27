// Default: sentry app
module.exports = {
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'sentry-react',
  ],

  parser: 'babel-eslint',
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

  plugins: ['react', 'import', 'getsentry', 'prettier', 'sentry'],

  settings: {
    'import/resolver': 'webpack',
    'import/extensions': ['.js', '.jsx'],
  },

  rules: {
    /**
     * Custom
     */

    // highlights literals in JSX components w/o translation tags
    'getsentry/jsx-needs-il8n': ['off'],
  },
};
