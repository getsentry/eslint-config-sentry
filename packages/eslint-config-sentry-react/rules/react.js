/**
 * React
 */

module.exports = {
  'settings': {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use, default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "15.4.0" // React version, default to the latest React stable release
      //"flowVersion": "0.53" // Flow version
    },
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': [
      'off',
      {
        ignoreStateless: true
      }
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': ['error'],

    // Prevent usage of unsafe target='_blank'
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['error'],

    /**
     * Deprecation related rules
     */
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': ['warn'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    // Recommended to use callback refs instead
    // TODO: Upgrade sentry to use callback refs
    'react/no-find-dom-node': ['warn'],

    // Prevent usage of the return value of React.render 
    // deprecation: https://facebook.github.io/react/docs/react-dom.html#render
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': ['error'],

    // Children should always be actual children, not passed in as a prop.
    // When using JSX, the children should be nested between the opening and closing tags. When not using JSX, the children should be passed as additional arguments to React.createElement.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': ['error'],

    // This rule helps prevent problems caused by using children and the dangerouslySetInnerHTML prop at the same time.
    // React will throw a warning if this rule is ignored.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': ['error'],

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md"
    'react/no-did-update-set-state': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    // This is now considered legacy, callback refs preferred
    'react/no-string-refs': ['warn'],

    // Prevent invalid characters from appearing in markup 
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    // skipShapeProps because there are cases where it's impossible to detect if a shape's properties are being used
    'react/no-unused-prop-types': ['warn', { skipShapeProps: true }],

    'react/prop-types': [
      'error',
      {
        ignore: ['className', 'children', 'location', 'params']
      }
    ],

    // When writing the render method in a component it is easy to forget to return the JSX content.
    // This rule will warn if the return statement is missing.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': ['error'],

    // Disabled because of prettier
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
    'react/jsx-wrap-multilines': ['off']
  }
};
