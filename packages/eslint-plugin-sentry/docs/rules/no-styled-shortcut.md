# disallow styled shorthand (no-styled-shortcut)

There are two ways to define styled components for native elements, but only one way to style a custom component.


## Rule Details

This rule aims to have a uniform way to define styled components.

Examples of **incorrect** code for this rule:

```js

styled.div`
  display: flex;
`

```

Examples of **correct** code for this rule:

```js

styled('div')`
  display: flex;
`

```

## When Not To Use It

If you want to be able to use the shorthand to style a native element.

## Further Reading

* https://emotion.sh/docs/styled

