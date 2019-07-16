# [eslint-config-torchbox](https://www.npmjs.com/package/eslint-config-torchbox) [<img src="https://raw.githubusercontent.com/torchbox/eslint-config-torchbox/master/.github/eslint-logo.svg?sanitize=true" alt="ESLint" width="90" height="90" align="right">](https://eslint.org)

[![eslint-config-torchbox on npm](https://img.shields.io/npm/v/eslint-config-torchbox.svg)](https://www.npmjs.com/package/eslint-config-torchbox) [![Build Status](https://travis-ci.com/torchbox/eslint-config-torchbox.svg?branch=master)](https://travis-ci.com/torchbox/eslint-config-torchbox)

> Shareable ESLint config following Torchbox’s code style.

## Usage

Install the config along with its peer dependencies:

```sh
npx install-peerdeps --dev eslint-config-torchbox
```

Then [configure ESLint to use this config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files). As a `.eslintrc.js` in the root of your project:

```js
module.exports = {
  // See https://github.com/torchbox/eslint-config-torchbox for rules.
  extends: 'torchbox',
};
```

### Tips

- Use ESLint’s [`--report-unused-disable-directives`](https://eslint.org/docs/user-guide/command-line-interface#--report-unused-disable-directives) flag to ensure you do not use more `eslint-disable` comments than needed.
- This config is [Prettier](https://prettier.io/)-compatible, but it is still usable by projects which do not wish to use Prettier.

### Experimental syntax

By default, this config uses ESLint’s built-in parser, which doesn’t support [experimental ECMAScript features](https://github.com/eslint/eslint/blob/a675c89573836adaf108a932696b061946abf1e6/README.md#what-about-experimental-features). If your code uses experimental syntax transpiled with Babel, make sure to set the ESLint parser to [babel-eslint](https://github.com/babel/babel-eslint):

```js
module.exports = {
  // See https://github.com/torchbox/eslint-config-torchbox for rules.
  extends: 'torchbox',
  // Support non-standard, experimental JS features that Babel knows how to process.
  parser: 'babel-eslint',
};
```

## What’s included

> See [`config.js`](./config.js) for the config defintion, and [`semver.test.js.snap`](./src/__snapshots__/semver.test.js.snap) for the whole set of rules and settings.

### Extends

- [`airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)
- [`prettier`](https://github.com/prettier/eslint-config-prettier)
- [`prettier/react`](https://github.com/prettier/eslint-config-prettier)

### Custom rules
