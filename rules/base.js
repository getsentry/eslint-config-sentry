module.exports = {
  rules: {
    /**
     * Strict mode
     */
    // http://eslint.org/docs/rules/strict
    strict: ['error', 'global'],

    /**
     * ES6
     */
    // http://eslint.org/docs/rules/no-var
    'no-var': ['error'],

    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': ['off'],

    /**
     * Variables
     */
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': ['error'],

    // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': ['error'],

    // http://eslint.org/docs/rules/no-undef
    'no-undef': ['error'],

    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none'
      }
    ],

    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error'],

    /**
     * Possible errors
     */
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['off', 'always-multiline'],

    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // http://eslint.org/docs/rules/no-console
    'no-console': ['warn'],

    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': ['warn'],

    // http://eslint.org/docs/rules/no-alert
    'no-alert': ['warn'],

    // http://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': ['warn'],

    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': ['error'],

    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': ['error'],

    // http://eslint.org/docs/rules/no-empty
    'no-empty': ['error'],

    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': ['error'],

    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': ['off'],

    // http://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': ['error'],

    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': ['error'],

    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': ['error'],

    // http://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': ['error'],

    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': ['error'],

    // http://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': ['error'],

    // http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': ['error'],

    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': ['error'],

    // http://eslint.org/docs/rules/semi.html
    semi: ['error', 'always'],

    // http://eslint.org/docs/rules/use-isnan
    'use-isnan': ['error'],

    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': ['error'],

    /**
     * Best practices
     */
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': ['error'],

    // http://eslint.org/docs/rules/curly [REVISIT ME]
    curly: ['off'],

    // http://eslint.org/docs/rules/default-case
    'default-case': ['error'],

        // http://eslint.org/docs/rules/dot-notation
    'dot-notation': [
      'error',
      {
        allowKeywords: true
      }
    ],

    // http://eslint.org/docs/rules/eqeqeq [REVISIT ME]
    eqeqeq: ['off'],

    // http://eslint.org/docs/rules/guard-for-in [REVISIT ME]
    'guard-for-in': ['off'],

    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // http://eslint.org/docs/rules/no-caller
    'no-caller': ['error'],

    // http://eslint.org/docs/rules/no-else-return [REVISIT ME]
    'no-else-return': ['off'],

    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': ['error'],

    // http://eslint.org/docs/rules/no-eval
    'no-eval': ['error'],

    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': ['error'],

    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': ['error'],

    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': ['error'],

    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': ['error'],

    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': ['error'],

    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': ['error'],

    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': ['error'],

    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': ['error'],

    // http://eslint.org/docs/rules/no-native-reassign
    'no-native-reassign': ['error'],

    // http://eslint.org/docs/rules/no-new
    'no-new': ['error'],

    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': ['error'],

    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': ['error'],

    // http://eslint.org/docs/rules/no-octal
    'no-octal': ['error'],

    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': ['error'],

    // http://eslint.org/docs/rules/no-param-reassign [REVISIT ME]
    'no-param-reassign': ['off'],

    // http://eslint.org/docs/rules/no-proto
    'no-proto': ['error'],

    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': ['error'],

    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error'],

    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': ['error'],

    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': ['error'],

    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': ['error'],

    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': ['error'],

    // http://eslint.org/docs/rules/no-with
    'no-with': ['error'],

    // http://eslint.org/docs/rules/quotes.html
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],

    // http://eslint.org/docs/rules/radix
    radix: ['error'],

    // http://eslint.org/docs/rules/space-in-brackets.html
    'computed-property-spacing': ['error', 'never'],

    // http://eslint.org/docs/rules/space-in-brackets.html
    'array-bracket-spacing': ['error', 'never'],

    // http://eslint.org/docs/rules/space-in-brackets.html
    'object-curly-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'properties'],

    // http://eslint.org/docs/rules/space-infix-ops.html
    'space-infix-ops': ['error'],

    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': ['off'],

    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'any'],

    // http://eslint.org/docs/rules/yoda
    yoda: ['error'],
  }
};
