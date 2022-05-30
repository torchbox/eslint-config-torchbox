# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [1.0.0](https://github.com/torchbox/eslint-config-torchbox/compare/v0.6.0...v1.0.0) (2022-05-30)

> This release is functionally identical to v0.6.0.

The project has reached a high-enough level of stability, with no breaking changes expected in minor releases outside of rules changes [as per ESLint’s policy](https://github.com/eslint/eslint#semantic-versioning-policy).

Note the [experimental TypeScript support](https://github.com/torchbox/eslint-config-torchbox#typescript) is still _experimental_, and opt-in, and as such may still change in minor or patch releases.

## [0.6.0](https://github.com/torchbox/eslint-config-torchbox/compare/v0.5.0...v0.6.0) (2022-03-09)

## Features

- Built-in [TypeScript support](https://github.com/torchbox/eslint-config-torchbox#typescript), via an experimental opt-in `torchbox/typescript` configuration.
- Additional peerDependencies added for TypeScript support: `@typescript-eslint/eslint-plugin`, and `@typescript-eslint/parser`. Both will be installed automatically in npm v7+, and should not change how the base configuration works in any way.

## [0.5.0](https://github.com/torchbox/eslint-config-torchbox/compare/v0.4.0...v0.5.0) (2021-12-13)

## Features

- Update to ESLint v8 and [eslint-config-airbnb v19.0.2](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md), changing rules that are applied with this config.

There are a number of existing rules that are now enforced:

- [default-case-last](https://eslint.org/docs/rules/default-case-last)
- [default-param-last](https://eslint.org/docs/rules/default-param-last)
- [grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)
- [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)
- [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)
- [no-import-assign](https://eslint.org/docs/rules/no-import-assign)
- [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)
- [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)
- [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports) (restricted: default, then)
- [no-setter-return](https://eslint.org/docs/rules/no-setter-return)
- [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)
- [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)
- [prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator) (`**` over `Math.pow`)
- [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)
- [react/jsx-no-script-url](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md)
- [react/jsx-no-useless-fragment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md)

And brand new rules introduced with this release:

- [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)
- [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)
- [import/no-import-module-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)
- [import/no-relative-packages](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md)
- [react/no-arrow-function-lifecycle](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md)
- [react/no-invalid-html-attribute](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md)
- [react/no-namespace](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md)
- [react/no-unstable-nested-components](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md)
- [react/no-unused-class-component-methods](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md)
- [react/jsx-no-constructed-context-values](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md)

### BREAKING CHANGES

This release updates most of the dependencies of the config:

| package                   | from    | to      |
| ------------------------- | ------- | ------- |
| eslint                    | ^7.2.0  | ^8.2.0  |
| eslint-config-airbnb      | ^18.2.1 | ^19.0.2 |
| eslint-config-prettier    | ^8.3.0  | ^8.3.0  |
| eslint-plugin-react       | ^7.24.0 | ^7.27.1 |
| eslint-plugin-react-hooks | ^4.2.0  | ^4.3.0  |
| eslint-plugin-jsx-a11y    | ^6.4.1  | ^6.5.1  |
| eslint-plugin-import      | ^2.23.4 | ^2.25.3 |

Users of npm v7 can `npm install --save-dev eslint-config-torchbox@latest` and this will automatically install all required peer dependencies.

For older versions of npm, use `npx install-peerdeps --dev eslint-config-torchbox@latest` so all other peerDependencies are updated as well.

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
