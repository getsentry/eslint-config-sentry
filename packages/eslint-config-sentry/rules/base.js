// Test
module.exports = {
  rules: {
    /**
     * Strict mode
     */
    // https://eslint.org/docs/rules/strict
    strict: ['error', 'global'],

    /**
     * ES6
     */
    // See ./es6.js

    /**
     * Variables
     */
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': ['error'],

    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': ['error'],

    // https://eslint.org/docs/rules/no-undef
    'no-undef': ['error'],

    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',

        // Ignore vars that start with an underscore
        // e.g. if you want to omit a property using object spread:
        //
        //   const {name: _name, ...props} = this.props;
        //
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],

    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', {functions: false}],

    /**
     * Possible errors
     */
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['off', 'always-multiline'],

    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // https://eslint.org/docs/rules/no-console
    'no-console': ['warn'],

    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': ['warn'],

    // https://eslint.org/docs/rules/no-alert
    'no-alert': ['error'],

    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': ['warn'],

    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': ['error'],

    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': ['error'],

    // https://eslint.org/docs/rules/no-empty
    'no-empty': ['error'],

    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': ['error'],

    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': ['error'],

    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': ['error'],

    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': ['error'],

    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': ['error'],

    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': ['error'],

    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': ['error'],

    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': ['error'],

    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': ['error'],

    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': ['error'],

    // https://eslint.org/docs/rules/semi.html
    semi: ['error', 'always'],

    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': ['error'],

    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': ['error'],

    /**
     * Best practices
     */
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': ['error'],

    // https://eslint.org/docs/rules/curly
    curly: ['error'],

    // https://eslint.org/docs/rules/default-case
    'default-case': ['error'],

    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],

    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error'],

    // https://eslint.org/docs/rules/guard-for-in [REVISIT ME]
    'guard-for-in': ['off'],

    // https://eslint.org/docs/rules/no-caller
    'no-caller': ['error'],

    // https://eslint.org/docs/rules/no-else-return [REVISIT ME]
    'no-else-return': ['off'],

    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': ['error'],

    // https://eslint.org/docs/rules/no-eval
    'no-eval': ['error'],

    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': ['error'],

    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': ['error'],

    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': ['error'],

    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': ['error'],

    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': ['error'],

    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': ['error'],

    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': ['error'],

    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': ['error'],

    // https://eslint.org/docs/rules/no-native-reassign
    'no-native-reassign': ['error'],

    // https://eslint.org/docs/rules/no-new
    'no-new': ['error'],

    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': ['error'],

    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': ['error'],

    // https://eslint.org/docs/rules/no-octal
    'no-octal': ['error'],

    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': ['error'],

    // https://eslint.org/docs/rules/no-param-reassign [REVISIT ME]
    'no-param-reassign': ['off'],

    // https://eslint.org/docs/rules/no-proto
    'no-proto': ['error'],

    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': ['error'],

    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error'],

    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': ['error'],

    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': ['error'],

    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': ['error'],

    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': ['error'],

    // https://eslint.org/docs/rules/no-with
    'no-with': ['error'],

    // https://eslint.org/docs/rules/radix
    radix: ['error'],

    // https://eslint.org/docs/rules/space-in-brackets.html
    'computed-property-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/space-in-brackets.html
    'array-bracket-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/space-in-brackets.html
    'object-curly-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'properties'],

    // https://eslint.org/docs/rules/space-infix-ops.html
    'space-infix-ops': ['error'],

    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': ['off'],

    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'any'],

    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error'],

    // https://eslint.org/docs/rules/yoda
    yoda: ['error'],

    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', {allowElseIf: false}],

    // https://eslint.org/docs/rules/require-await
    'require-await': ['error'],

    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['error', 'separate-lines'],

    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {markers: ['/'], exceptions: ['-', '+']},
        block: {exceptions: ['*'], balanced: true},
      },
    ],
  },
};
