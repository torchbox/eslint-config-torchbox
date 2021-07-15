# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [0.4.0](https://github.com/torchbox/eslint-config-torchbox/compare/v0.3.3...v0.4.0) (2021-07-15)

## Features

- Update to ESLint v7 and [eslint-config-airbnb v18.2.1](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md), changing rules that are applied with this config.
- Update to eslint-config-prettier v8, which no longer requires specifying sub-configurations separately for different frameworks or syntaxes.

Here is a summary of significant rule changes:

```diff
jsx-a11y/aria-role (https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md):
-`error, ignoreNonDom: false`
+`error, ignoreNonDOM: false`
react/sort-comp (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md):
-`error, order: static-methods, instance-variables, lifecycle,…`
+`error, order: static-variables, static-methods, instance-var…`
react/jsx-props-no-spreading (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md):
-`error, html: enforce, custom: enforce, exceptions:`
+`error, html: enforce, custom: enforce, explicitSpread: ignore`
import/order (https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md):
-`error, groups: builtin, external, internal`
+`error, groups: builtin, external, internal, warnOnUnassigned…`
import/no-cycle (https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md):
-`error, maxDepth: null`
+`error, maxDepth: ∞, ignoreExternal: false`
import/no-useless-path-segments (https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)
- `error`
+`error, commonjs: true`
array-callback-return (https://eslint.org/docs/rules/array-callback-return):
-`error, allowImplicit: true`
+`error, allowImplicit: true, checkForEach: false`

No longer enforced:

- jsx-a11y/accessible-emoji (https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md) (deprecated)
```

### BREAKING CHANGES

This release updates most of the dependencies of the config:

| package                   | from    | to      |
| ------------------------- | ------- | ------- |
| eslint                    | ^6.0.0  | ^7.2.0  |
| eslint-config-airbnb      | ^18.0.0 | ^18.2.1 |
| eslint-config-prettier    | ^6.0.0  | ^8.3.0  |
| eslint-plugin-react       | ^7.16.0 | ^7.24.0 |
| eslint-plugin-react-hooks | ^1.7.0  | ^4.2.0  |
| eslint-plugin-jsx-a11y    | ^6.2.0  | ^6.4.1  |
| eslint-plugin-import      | ^2.18.0 | ^2.23.4 |

Users of npm v7 can `npm install --save-dev eslint-config-torchbox@latest` and this will automatically install all required peer dependencies.

For older versions of npm, use `npx install-peerdeps --dev eslint-config-torchbox@latest` so all other peerDependencies are updated as well.

## [0.3.3](https://github.com/torchbox/eslint-config-torchbox/compare/v0.3.2...v0.3.3) (2020-03-12)

### Bug fixes

- Fix dev dependencies warnings in Storybook config and stories written in `.stories.js` files.

## [0.3.2](https://github.com/torchbox/eslint-config-torchbox/compare/v0.3.1...v0.3.2) (2019-10-15)

### Bug fixes

- Whitelist `setupTests` files for devDependencies imports check.

## [0.3.1](https://github.com/torchbox/eslint-config-torchbox/compare/v0.3.0...v0.3.1) (2019-10-09)

### Bug fixes

- Add missing `airbnb/hooks` extend for the React [Rules of hooks](https://reactjs.org/docs/hooks-rules.html) ([#3](https://github.com/torchbox/eslint-config-torchbox/issues/3), [#10](https://github.com/torchbox/eslint-config-torchbox/pull/10)).

## [0.3.0](https://github.com/torchbox/eslint-config-torchbox/compare/v0.2.0...v0.3.0) (2019-10-08)

### Features

- Update to ESLint v6 and eslint-config-airbnb v18, significantly changing rules that are applied with this config ([#4](https://github.com/torchbox/eslint-config-torchbox/issues/4), [#10](https://github.com/torchbox/eslint-config-torchbox/pull/10)).
- Include rules for the React [Rules of hooks](https://reactjs.org/docs/hooks-rules.html) ([#3](https://github.com/torchbox/eslint-config-torchbox/issues/3), [#10](https://github.com/torchbox/eslint-config-torchbox/pull/10)), from the airbnb config update.
- Automatically detect which version of React is being used on the project to lint accordingly (part of the airbnb config update) ([#10](https://github.com/torchbox/eslint-config-torchbox/pull/10)).

### BREAKING CHANGES

This release updates most of the dependencies of the config:

| package                   | from    | to      |
| ------------------------- | ------- | ------- |
| eslint                    | ^5.0.0  | ^6.0.0  |
| eslint-config-airbnb      | ^17.1.0 | ^18.0.0 |
| eslint-plugin-react       | ^7.14.0 | ^7.16.0 |
| eslint-plugin-react-hooks | N/A     | ^1.7.0  |

To update, use `npx install-peerdeps --dev eslint-config-torchbox@latest` so all other peerDependencies are updated as well.

---

Additionally, this config now requires `react` to be defined as a dependency on the project. Please refer to our [React configuration instructions](https://github.com/torchbox/eslint-config-torchbox#react) if you wish to bypass this.

## [0.2.0](https://github.com/torchbox/eslint-config-torchbox/compare/v0.1.0...v0.2.0) (2019-07-16)

### Features

- The configuration is now defined based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) ([#1](https://github.com/torchbox/eslint-config-torchbox/issues/1), [#2](https://github.com/torchbox/eslint-config-torchbox/pull/2)).
- Now includes environment configuration for [Jest](https://jestjs.io/) tests.

#### BREAKING CHANGES

- The configuration is now defined based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) ([#1](https://github.com/torchbox/eslint-config-torchbox/issues/1), [#2](https://github.com/torchbox/eslint-config-torchbox/pull/2)).

## [0.1.0](https://github.com/torchbox/eslint-config-torchbox/releases/tag/v0.1.0) (2019-07-04)

First release

## [x.y.z](https://github.com/torchbox/eslint-config-torchbox/compare/va.b.c...vx.y.z) (YYYY-MM-DD)

### Bug Fixes

### Features

### BREAKING CHANGES
