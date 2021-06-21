# eslint-plugin-sentry

sentry.io eslint plugin

## Installation

You'll first need to install [ESLint](https://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-sentry`:

```
$ npm install eslint-plugin-sentry --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-sentry` globally.

## Usage

Add `sentry` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "sentry"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "sentry/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





