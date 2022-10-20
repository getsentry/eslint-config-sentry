/**
 * @fileoverview Rule to disallow using anything but strings in `t`, `tn`, and `tct`
 * @author Evan Purkhiser
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const TRANSLATION_FNS = ['t', 'tn', 'tct'];

module.exports = {
  meta: {
    docs: {
      description: 'disallow using non string literals in t(), tn(), and tct()',
      category: 'Best Practices',
      recommended: true,
    },
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
        if (!TRANSLATION_FNS.includes(node.callee.name)) {
          return;
        }

        if (node.arguments.length === 0) {
          return;
        }

        function checkTranslationArg(arg) {
          // Template literals should not be used
          if (arg.type === 'TemplateLiteral') {
            // Nothing to do if there are no expressions. That's fine
            if (arg.expressions.length === 0) {
              return;
            }

            context.report({
              node: arg,
              message:
                'Dynamic value interpolation cannot be used in translation functions. Use a parameterized string literal instead.',
            });

            return;
          }

          // Anything that's not a string is no good
          if (arg.type !== 'Literal') {
            context.report({
              node: arg,
              message: `${node.callee.name}() cannot be used to translate dynamic values. Use a parameterized string literal instead.`,
            });

            return;
          }
        }

        checkTranslationArg(node.arguments[0]);

        // We need to check both args for `tn`
        if (node.callee.name === 'tn' && node.arguments.length > 1) {
          checkTranslationArg(node.arguments[1]);
        }
      },
    };
  },
};
