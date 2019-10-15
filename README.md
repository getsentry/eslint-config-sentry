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

## Deployment
Create a new branch and PR when creating and tagging a new release. Then run

```bash
yarn release
```

to bump the verison (it current will always be a minor bump) and create a commit. `lerna` will also try to update relevant `CHANGELOG`s based on conventional commits.

After merging to master, GitHub Actions will be used to publish to the npm registry.
