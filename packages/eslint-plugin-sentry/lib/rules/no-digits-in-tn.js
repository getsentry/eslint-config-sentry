/**
 * @fileoverview Rule to disallow using %d within tn()
 * @author Matej Minar
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'disallow using %d within tn()',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },
  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      CallExpression(node) {
        if (node.callee.name === 'tn') {
          node.arguments.forEach(argument => {
            if (
              argument.value &&
              argument.value.includes &&
              argument.value.includes('%d')
            ) {
              context.report({
                node,
                message: `Do not use '%d' within 'tn()'. Use '%s' instead.`,
                fix(fixer) {
                  return [
                    fixer.replaceTextRange(
                      [argument.range[0] + 1, argument.range[1] - 1],
                      argument.value.replace(/%d/g, '%s')
                    ),
                  ];
                },
              });
            }
          });
        }
      },
    };
  },
};
