# disallow using %d within tn() (no-digits-in-tn)

This rule prevents %d being used within tn().
We should use %s instead.


## Rule Details

Underlying function of tn() called `ngettext` cannot format numbers > 999 because of a call to `toLocaleString`.
`toLocaleString` will render `999` as `"999"` but `9999` as `"9,999"`. This means that any call with `tn` or `ngettext` cannot use `%d` in the codebase but has to use `%s`. 
This means a string is always being passed in as an argument, but `sprintf-js` implicitly coerces strings that can be parsed as integers into an integer. 
This would break under any locale that used different formatting and other undesirable behaviors.

Examples of **correct** code for this rule:

```js
tn('%s project', '%s projects', 5);
```

Examples of **incorrect** code for this rule:

```js
tn('%d project', '%d projects', 5);
```