// Default: sentry app
module.exports = {
  extends: [
    'sentry-react',

    // These prettier plugins need to be last so they can override plugin rules
    // See https://github.com/prettier/eslint-config-prettier/blob/master/README.md#installation
    // for plugin exclusions
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],

  parser: '@typescript-eslint/parser',

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

  plugins: [
    '@typescript-eslint',
    '@emotion',
    'import',
    'prettier',
    'react',
    'simple-import-sort',
    'no-lookahead-lookbehind-regexp',
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      webpack: {},
    },
    'import/extensions': ['.js', '.jsx'],
  },

  /**
   * Rules
   */
  rules: {
    /**
     * emotion rules for v10
     *
     * This probably aren't as necessary anymore, but let's remove when we move to v11
     */
    '@emotion/jsx-import': 'off',
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',

    // no-undef is redundant with typescript as tsc will complain
    // A downside is that we won't get eslint errors about it, but your editors should
    // support tsc errors so....
    'no-undef': 'off',

    // Override prettier's configuration of this rule
    curly: ['error'],

    // Override prettier's configuration of this rule
    'arrow-body-style': 'off',

    /**
     * Need to use typescript version of these rules
     */
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // This only override the `args` rule (which is "none"). There are too many errors and it's difficult to manually
    // fix them all, so we'll have to incrementally update.
    'no-unused-vars': 'off',
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

    'no-use-before-define': 'off',
    // This seems to have been turned on while previously it had been off
    '@typescript-eslint/no-use-before-define': ['off'],

    /**
     * Better import sorting
     */
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],

          // Node.js builtins.
          [`^(${require('module').builtinModules.join('|')})(/|$)`],

          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],

          // Style imports.
          ['^.+\\.scss$'],

          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],

    // XXX: Duplicated from eslint-config-sentry-app, we should pull out
    //
    // Based on https://github.com/xojs/eslint-config-xo-typescript/blob/2a7e3b0b3c28b0c25866721298e67947a95767ab/index.js#L123
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string',
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number',
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean',
          },
          Symbol: {
            message: 'Use `symbol` instead.',
            fixWith: 'symbol',
          },
          BigInt: {
            message: 'Use `bigint` instead.',
            fixWith: 'bigint',
          },
          Object: {
            message:
              'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          // TODO(scttcper): Turn these on to make our types more strict
          // object: {
          // 	message: 'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
          // 	fixWith: 'Record<string, unknown>'
          // },
          // Function: 'Use a specific function type instead, like `() => void`.',
          '[]': "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
          '[[]]':
            "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
          '[[[]]]': "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
        },
      },
    ],

    // Don't allow lookbehind expressions in regexp as they crash safari
    // We've accidentally used lookbehinds a few times and caused problems.
    'no-lookahead-lookbehind-regexp/no-lookahead-lookbehind-regexp': [
      'error',
      'no-lookbehind',
      'no-negative-lookbehind',
    ],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      /**
       * Override rules for typescript files
       */
      rules: {},
    },
  ],
};
