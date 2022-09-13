/**
 * @fileoverview disallow using %d within tn()
 * @author matej minar
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-digits-in-tn'),
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

ruleTester.run('no-digits-in-tn', rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "tn('%s project', '%s projects', 5)",
    },
  ],

  invalid: [
    {
      code: "tn('%s project', '%d projects', 5)",
      output: "tn('%s project', '%s projects', 5)",
      errors: [
        {
          message: `Do not use '%d' within 'tn()'. Use '%s' instead.`,
          type: 'CallExpression',
        },
      ],
    },
  ],
});
