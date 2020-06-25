// Default: sentry app
module.exports = {
  extends: [
    'sentry',

    "plugin:@typescript-eslint/recommended"


    // These prettier plugins need to be last so they can override plugin rules
    // See https://github.com/prettier/eslint-config-prettier/blob/master/README.md#installation
    // for plugin exclusions
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  rules: {
    'no-unused-vars': 'off',

    // This only override the `args` rule (which is "none"). There are too many errors and it's difficult to manually
    // fix them all, so we'll have to incrementally update.
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',

        // Ignore vars that start with an underscore
        // e.g. if you want to omit a property using object spread:
        //
        //   const {name: _name, ...props} = this.props;
        //
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
  }
};
