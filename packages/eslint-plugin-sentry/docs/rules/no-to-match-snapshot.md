# disallow jest `toMatchSnapshot` (no-to-match-snapshot)

We find jest snapshots to be noisy and not very helpful in most cases. Instead we have a `toSnapshot` matcher that serializes the component in HTML and during CI, renders the HTML in a browser and captures it as an image. This way it is easier to see how CSS changes can affect your components.


## Rule Details

This rule prevents the usage of jest's `toMatchSnapshot()` and prefers our custom `toSnapshot()` where possible. 

Examples of **correct** code for this rule:

```js
it('snapshots', function() {
  const wrapper = mount(<MyComponent />);
  expect(wrapper).toSnapshot(); // This will do nothing locally
});
```

Examples of **incorrect** code for this rule:

```js
it('snapshots', function() {
  const wrapper = mount(<MyComponent />);
  expect(wrapper).toMatchSnapshot();
});
```

## When Not To Use It

If you want to be able to use jest snapshots

## Further Reading

* https://github.com/getsentry/sentry/pull/19878
* https://github.com/getsentry/action-visual-snapshot/
