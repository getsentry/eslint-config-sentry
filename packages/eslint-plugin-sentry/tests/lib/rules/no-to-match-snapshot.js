/**
 * @fileoverview Disallow use of `toMatchSnapshot()`
 * @author Billy Vong
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-to-match-snapshot'),
  path = require('path'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
});
var ruleTester = new RuleTester();

ruleTester.run('no-to-match-snapshot', rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "expect(wrapper).toHaveLength(1)",
    },
  ],

  invalid: [
    {
      code: "expect(wrapper).toMatchSnapshot()",
      errors: [
        {
          message: "Do not use jest snapshots, instead use `toSnapshot()` for visual snapshots",
          type: 'Identifier',
        },
      ],
    },
  ],
});
