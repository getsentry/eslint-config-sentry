/**
 * @fileoverview Rule to disallow React Hooks
 * @author Matej Minar
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'disallow react hooks',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    schema: [],
  },
  create: function(context) {
    // variables should be defined here
    const hooksRegExp = /^use[A-Z]+/;

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section
    function throwError(node) {
      context.report({
        node,
        message: `Do not use React Hooks.`,
      });
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    // TODO(matej): we should make sure that React is react

    return {
      VariableDeclaration(node) {
        // const {useState, useEffect} = React;
        node.declarations.map(item => {
          if (item.init && item.init.name === 'React') {
            item.id.properties.map(property => {
              if (hooksRegExp.test(property.key && property.key.name)) {
                throwError(node);
              }
            });
          }

          // const [something, setSomething] = React.useState();
          if (
            item.init &&
            item.init.callee &&
            item.init.callee.object &&
            item.init.callee.object.name === 'React' &&
            item.init.callee.property &&
            hooksRegExp.test(item.init.callee.property.name)
          ) {
            throwError(node);
          }
        });
      },

      // React.useEffect(() => {}, [])
      ExpressionStatement(node) {
        if (
          node.expression.callee &&
          node.expression.callee.object &&
          node.expression.callee.object.name === 'React' &&
          hooksRegExp.test(node.expression.callee.property.name)
        ) {
          throwError(node);
        }
      },

      // import {useState} from 'react';
      ImportDeclaration(node) {
        if (node.source.value === 'react') {
          node.specifiers.map(item => {
            if (item.imported && hooksRegExp.test(item.imported.name)) {
              throwError(node);
            }
          });
        }
      },
    };
  },
};
