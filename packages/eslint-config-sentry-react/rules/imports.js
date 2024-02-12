/**
 * Imports (defaults from airbnb guide unless noted)
 * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
 */

module.exports = {
  rules: {
    // Not recommended to be enabled with typescript-eslint
    // https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting/#eslint-plugin-import
    'import/no-unresolved': ['off'],
    'import/named': ['off'],
    'import/default': ['off'],
    'import/export': ['off'],
    'import/no-named-as-default-member': ['off'],

    // Redflags
    // do not allow a default import name to match a named export (airbnb: error)
    // Issue with `DefaultIssuePlugin` and `app/plugins/index`
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': ['off'],

    // disallow use of jsdoc-marked-deprecated imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': ['off'],

    // Forbid mutable exports (airbnb: error)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    // TODO: enable?
    'import/no-mutable-exports': ['off'],

    // disallow require()
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/no-commonjs': ['off'],

    // disallow AMD require/define
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': ['error'],

    // disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': ['error'],

    // disallow namespace imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': ['off'],

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // TODO this fucks up getsentry
    'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': ['error'],

    // Require modules with a single export to use a default export (airbnb: error)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': ['off'],

    // Restrict which files can be imported in a given folder
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': ['off'],

    // Forbid modules to have too many dependencies
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': ['off', {max: 10}],

    // Forbid import of modules using absolute paths
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': ['error'],

    // Forbid require() calls with expressions (airbnb: error)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': ['off'],

    // Use webpack default chunk names
    'import/dynamic-import-chunkname': ['off'],

    // prevent importing the submodules of other modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/no-internal-modules': [
      'off',
      {
        allow: [],
      },
    ],

    // Warn if a module could be mistakenly parsed as a script by a consumer
    // leveraging Unambiguous JavaScript Grammar
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    // this should not be enabled until this proposal has at least been *presented* to TC39.
    // At the moment, it"s not a thing.
    'import/unambiguous': ['off'],

    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': ['error'],

    // Prevent unassigned imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    // importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': ['off'],

    // Prevent importing the default as if it were named
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': ['error'],

    // Reports if a module"s default export is unnamed
    // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: false,
      },
    ],
  },
};
