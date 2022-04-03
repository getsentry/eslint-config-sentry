/**
 * @fileoverview Disallow use of `toMatchSnapshot()`
 * @author Billy Vong
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'disallow use of `toMatchSnapshot()`',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: true,
    schema: [],
  },
  create: function (context) {
    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Identifier(node) {
        if (node.name !== 'toMatchSnapshot') {
          return;
        }

        context.report({
          node,
          message:
            'Do not use jest snapshots, instead use `toSnapshot()` for visual snapshots',

          fix(fixer) {
            return [fixer.replaceText(node, 'toSnapshot')];
          },
        });
      },
    };
  },
};
