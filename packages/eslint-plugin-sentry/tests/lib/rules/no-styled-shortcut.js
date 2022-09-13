/**
 * @fileoverview disallow styled shorthand
 * @author billy vong
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-styled-shortcut'),
  path = require('path'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
  },
});
var ruleTester = new RuleTester();

ruleTester.run('no-styled-shortcut', rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "var Test = styled('div')",
    },
  ],

  invalid: [
    {
      code: 'var Test = styled.div``;',
      output: "var Test = styled('div')``;",
      errors: [
        {
          message:
            'Do not use the shorthand/member expression style of styled. Use the function call syntax instead: styled(div).',
          type: 'TaggedTemplateExpression',
        },
      ],
    },
  ],
});
