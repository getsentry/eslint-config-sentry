/**
 * @fileoverview disallow using %d within tn()
 * @author matej minar
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-dynamic-translations'),
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

ruleTester.run('no-dynmaic-translations', rule, {
  valid: [
    {code: "t('This is fine')"},
    {code: 't(`This is fine`)'},
    {code: "t('This is %s', status)"},
    {code: "tn('%s project', '%s projects', 5)"},
    {code: "tct('This is [status]', {status})"},
  ],

  invalid: [
    {
      code: 't(`Your project name is ${project.name}!`)',
      errors: [
        {
          message: `Dynamic value interpolation cannot be used in translation functions. Use a parameterized string literal instead.`,
          type: 'TemplateLiteral',
        },
      ],
    },
    {
      code: 'tn(`thing %s`, `thing ${two} %s`, value)',
      errors: [
        {
          message: `Dynamic value interpolation cannot be used in translation functions. Use a parameterized string literal instead.`,
          type: 'TemplateLiteral',
        },
      ],
    },
    {
      code: 't(someStringVariable)',
      errors: [
        {
          message: `t() cannot be used to translate dynamic values. Use a parameterized string literal instead.`,
          type: 'Identifier',
        },
      ],
    },
    {
      code: "t('string ' + variable + ' string')",
      errors: [
        {
          message: `t() cannot be used to translate dynamic values. Use a parameterized string literal instead.`,
          type: 'BinaryExpression',
        },
      ],
    },
    {
      code: 'tct(someStringVariable, {project: key})',
      errors: [
        {
          message: `tct() cannot be used to translate dynamic values. Use a parameterized string literal instead.`,
          type: 'Identifier',
        },
      ],
    },
  ],
});
