/**
 * @fileoverview Rule to disallow styled (emotion) shortcut e.g. styled.div
 * @author Billy Vong
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'suggestion',

    docs: {
      description: 'disallow styled shorthand',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [], // no options
  },
  create: function(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      TaggedTemplateExpression(node) {
        if (node.tag.type === 'MemberExpression' && node.tag.object.name === 'styled') {
          context.report({
            node,
            message: `Do not use the shorthand/member expression style of styled. Use the function call syntax instead: styled(${
              node.tag.property.name
            }).`,

            fix(fixer) {
              return [
                fixer.replaceTextRange(
                  [node.tag.object.range[1], node.tag.property.range[1]],
                  `('${node.tag.property.name}')`
                ),
              ];
            },
          });
        }
      },
    };
  },
};
