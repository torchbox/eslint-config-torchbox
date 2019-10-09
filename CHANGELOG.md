# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

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
