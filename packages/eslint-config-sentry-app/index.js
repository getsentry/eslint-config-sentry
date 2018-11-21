// Default: sentry app
module.exports = {
  extends: [
    'sentry-react',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  env: {
    browser: true,
    es6: true,
    jest: true,
    jquery: true, // hard-loaded into vendor.js
  },

  plugins: ['react', 'import', 'getsentry', 'prettier'],

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
