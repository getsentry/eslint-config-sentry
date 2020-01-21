/**
 * @fileoverview disallow react hooks
 * @author matej minar
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-react-hooks'),
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

ruleTester.run('no-react-hooks', rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "useAutoDeploy()",
    },
    {
      code: "import React from 'react'"
    }
  ],

  invalid: [
    {
      code: "import React, {useRef} from 'react'",
      errors: [
        {
          message: 'Do not use React Hooks.',
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "const [burger, setBurger] = React.useState()",
      errors: [
        {
          message: 'Do not use React Hooks.',
          type: 'VariableDeclaration',
        },
      ],
    },
    {
      code: "const {useState} = React",
      errors: [
        {
          message: 'Do not use React Hooks.',
          type: 'VariableDeclaration',
        },
      ],
    },
    {
      code: "React.useEffect(() => {}, [])",
      errors: [
        {
          message: 'Do not use React Hooks.',
          type: 'ExpressionStatement',
        },
      ],
    },
  ],
});
