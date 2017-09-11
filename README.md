# Install
`yarn add -D eslint-config-sentry`

For packages that use react:
`yarn add -D eslint-config-sentry-react`

## Configuration
In your `.eslintrc` (or equivalent config file)

Use `sentry` for base rules, `sentry-react` contains rules for [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
and [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

```json
{
  "extends": [
    "sentry-react",
  ],
}
```
