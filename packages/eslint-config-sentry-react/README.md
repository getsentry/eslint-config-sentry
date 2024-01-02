# Install

`yarn add -D eslint-config-sentry`

## Configuration

In your `.eslintrc` (or equivalent config file)

Use `sentry` for base rules, `sentry/app` contains rules for [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
and [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

```json
{
  "extends": ["sentry/app"]
}
```

## Updating React Version

Is react being updated in sentry/getsentry? Update the version in react.js settings to match.
