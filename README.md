# [eslint-config-torchbox](https://www.npmjs.com/package/eslint-config-torchbox) [<img src="https://raw.githubusercontent.com/torchbox/eslint-config-torchbox/main/.github/eslint-logo.svg?sanitize=true" alt="ESLint" width="90" height="90" align="right">](https://eslint.org)

> Shareable ESLint config following Torchbox’s code style.

## Usage

Install the config along with its peer dependencies:

```sh
# npm v7 and up:
npm install --save-dev eslint-config-torchbox@latest
# npm v6 and below:
npx install-peerdeps --dev eslint-config-torchbox@latest
```

Then [configure ESLint to use this config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files). As a `.eslintrc.js` in the root of your project:

```js
module.exports = {
  // See https://github.com/torchbox/eslint-config-torchbox for rules.
  extends: 'torchbox',
};
```

### TypeScript

TypeScript support is currently experimental, and available separately. Make sure to install `typescript` v3 or v4 on your project, then:

```js
module.exports = {
  // See https://github.com/torchbox/eslint-config-torchbox for rules.
  extends: 'torchbox/typescript',
};
```

The TypeScript configuration uses the same rules as the base configuration, with two exceptions:

- Rules which will be checked by the TypeScript compiler anyway are disabled.
- Rules which would work differently for TypeScript code have been replaced by their [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin) counterparts, where this is possible without requiring type checking as part of linting (see [Design decisions](#design-decisions)).

This configuration can be used as-is even for mixed or JavaScript-only projects, but does require the `typescript` package to be installed.

#### Advanced TypeScript usage

For projects wanting stricter checks, consider using [linting with type information](https://typescript-eslint.io/docs/linting/type-linting/). Here is a sample ESLint configuration:

```js
module.exports = {
  // See https://github.com/torchbox/eslint-config-torchbox for rules.
  extends: [
    'torchbox/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  // See https://typescript-eslint.io/docs/linting/type-linting/.
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
```

### Tips

#### Linting setup for ongoing projects

Review our [CHANGELOG](https://github.com/torchbox/eslint-config-torchbox/blob/main/CHANGELOG.md) for guidance on how to upgrade a project’s linting to a specific version.

More generally, when retrofitting stricter linting onto an existing project, consider [a gradual approach to linting strictness](https://thib.me/upgrading-to-stricter-eslint-config), so you can start using linting without having to change significant portions of the project’s code.

#### Common CLI flags

We recommend the following `run` script to add to your `package.json`:

```json
"lint:js": "eslint --ext .js,.ts,.tsx --report-unused-disable-directives .",
```

- Use the [`--ext`](https://eslint.org/docs/user-guide/command-line-interface#--ext) flag so ESLint knows which files to lint.
- Use [`--report-unused-disable-directives`](https://eslint.org/docs/user-guide/command-line-interface#--report-unused-disable-directives) flag to ensure you do not use more `eslint-disable` comments than needed.
- Consider using ESLint’s [`--cache`](https://eslint.org/docs/user-guide/command-line-interface#--cache) for larger projects.

#### `.eslintignore`

We recommend using a [`.eslintignore`](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file) to avoid running ESLint over large folders. Note the point of the ignore file isn’t just to determine which JS files we don’t want to be linted, but also speed up linting by excluding large folders. Here’s an example:

```txt
.git
node_modules
coverage
static_compiled
venv
```

#### `overrides`

If relevant, use ESLint’s [`overrides`](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files) feature to make it more permissive for certain files – for example Storybook stories or unit tests, where code standards are different.

Here is an example of using `overrides` to disable a few specific rules for stories:

```js
module.exports = {
  // […]
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        // Don’t mandate typing for Storybook stories.
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
  ],
};
```

### React

This config is meant first and foremost for React projects, where it will detect which rules to apply based on the version of React used on the project. The config can also be used on non-React projects – just make sure to disable the version check by adding the following in your config:

```js
module.exports = {
  // [...]
  settings: {
    // Manually set the version to disable automated detection of the "react" dependency.
    react: { version: 'latest' },
  },
};
```

### Vue

We do not include linting for Vue out of the box. Have a look at the [eslint-plugin-vue user guide](https://eslint.vuejs.org/user-guide/), in particular:

1. Choose the right predefined configuration based on the Vue version and desired level of strictness
2. Use the `--ext` flag to lint `.vue` files.
3. Make sure pre-commit hooks are configured to run ESLint on `.vue` files.
4. If using a custom parser (for example TypeScript’s), make sure to set it up [alongside `vue-eslint-parser` as documented](https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser).

### Prettier

This config is [Prettier](https://prettier.io/)-compatible, there isn’t anything extra needed.

### pre-commit

The [pre-commit](https://pre-commit.com/) pre-commit hook framework doesn’t work well with ESLint. There are three major points to set up correctly:

- Peer dependencies aren’t automatically installed like in other npm v7+ environment. We need to tell pre-commit what to install via its `additional_dependencies` configuration.
- Dependency versions aren’t locked. Always pin exact versions in the configuration to have as stable of an installation as possible.
- By default, the ESLint hook will only run `.js` files. Make sure to override its `types` attribute as well as `files` with the correct extensions (TypeScript, Vue).

Here is a sample setup with our recommended configuration:

```yaml
default_language_version:
  node: system
repos:
  - repo: https://github.com/pre-commit/mirrors-eslint
    rev: v8.10.0
    hooks:
      - id: eslint
        types: [file]
        files: \.(js|ts|tsx)$
        args: [--report-unused-disable-directives]
        additional_dependencies:
          # Use the same versions as the project’s package-lock.json.
          - eslint@8.10.0
          - eslint-config-torchbox@1.0.0
          - typescript@4.6.2
          # Even on npm v7+, we need to specify all peerDependencies
          # as pre-commit installs `additional_dependencies` globally.
          - '@typescript-eslint/eslint-plugin@5.14.0'
          - '@typescript-eslint/parser@5.14.0'
          - eslint-config-airbnb@19.0.4
          - eslint-config-prettier@8.5.0
          - eslint-plugin-import@2.25.4
          - eslint-plugin-jsx-a11y@6.5.1
          - eslint-plugin-react@7.29.3
          - eslint-plugin-react-hooks@4.3.0
```

The latest versions to install can be resolved with either:

```bash
# Retrieve latest versions from npm:
npx install-peerdeps --dry-run --dev eslint-config-torchbox@latest
# Or retrieve currently-installed versions from the current project:
npm ls eslint eslint-config-torchbox typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks | grep -v deduped
```

### Experimental syntax

By default, this config uses ESLint’s built-in parser, which doesn’t support [experimental ECMAScript features](https://github.com/eslint/eslint/blob/a675c89573836adaf108a932696b061946abf1e6/README.md#what-about-experimental-features). If your code uses experimental syntax with Babel, make sure to set the ESLint parser to [babel-eslint](https://github.com/babel/babel-eslint):

```js
module.exports = {
  // See https://github.com/torchbox/eslint-config-torchbox for rules.
  extends: 'torchbox',
  // Support non-standard, experimental JS features that Babel knows how to process.
  parser: 'babel-eslint',
};
```

## Design decisions

This configuration strikes a balance between ease of use for users, and ease of maintenance.

- We use the same React-aware configuration everywhere, even non-React projects.
- There is a single package with a single set of dependencies.

The base configuration is kept very simple, extending from the Airbnb configuration, with Prettier compatibility and more permissive rules.

### TypeScript support

We use a separate TypeScript configuration file only due to its experimental nature. The TypeScript configuration does not rely on type checking, so it can also be used for JavaScript projects.

In the future, we may decide to use TypeScript for the default configuration, and have a separate configuration file for vanilla JS projects. Or document how to use the TypeScript configuration on vanilla projects (resetting the `parser` should be the only necessary change).

### Dependencies as peerDependencies

Most of the configuration’s dependencies are specified as `peerDependencies`. This is necessary due to how ESLint configurations resolve their dependencies – see [Support having plugins as dependencies in shareable config #3458](https://github.com/eslint/eslint/issues/3458). This will be changed in a future version of ESLint.

## What’s included

> See [`config.js`](./config.js) for the config definition, and [`src/rules.test.js`](./src/rules.test.js) for the whole set of rules and settings.

### Extends

- [`airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)
- [`airbnb/hooks`](https://www.npmjs.com/package/eslint-config-airbnb)
- [`prettier`](https://github.com/prettier/eslint-config-prettier)
- Additionally for TypeScript, [`plugin:@typescript-eslint/recommended`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#supported-rules)

<!-- Generated with: npm run build -->

### Custom rules

- [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign): `2, props: false`
- [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments): `1, terms: todo, fixme, xxx, location: start`
- [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle): `2, allow: __REDUX_DEVTOOLS_EXTENSION__, __webpack_hash__, al…`
- [camelcase](https://eslint.org/docs/rules/camelcase): `0`
- [no-console](https://eslint.org/docs/rules/no-console): `2, allow: error`
- [react/forbid-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md): `2, forbid: any`
- [react/jsx-no-bind](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md): `0`
- [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md): `2, extensions: .js`
- [react/prefer-exact-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md): `0`
- [react/function-component-definition](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md): `0`
- [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md): `2, devDependencies: **/tests/**, **/stories/**, **/storybook…`
- [import/prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md): `0`

### Inherited rules

- [react-hooks/rules-of-hooks](https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md)
- [react-hooks/exhaustive-deps](https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md)
- [jsx-a11y/alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md): `error, elements: img, object, area, inputtype=\image\, img: …`
- [jsx-a11y/anchor-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md): `error, components: `
- [jsx-a11y/anchor-is-valid](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md): `error, components: Link, specialLink: to, aspects: noHref, i…`
- [jsx-a11y/aria-activedescendant-has-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)
- [jsx-a11y/aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)
- [jsx-a11y/aria-proptypes](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)
- [jsx-a11y/aria-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md): `error, ignoreNonDOM: false`
- [jsx-a11y/aria-unsupported-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)
- [jsx-a11y/click-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)
- [jsx-a11y/control-has-associated-label](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md): `error, labelAttributes: label, controlComponents: , ignoreEl…`
- [jsx-a11y/heading-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md): `error, components: `
- [jsx-a11y/html-has-lang](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md)
- [jsx-a11y/iframe-has-title](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)
- [jsx-a11y/img-redundant-alt](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)
- [jsx-a11y/interactive-supports-focus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)
- [jsx-a11y/label-has-associated-control](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md): `error, labelComponents: , labelAttributes: , controlComponen…`
- [jsx-a11y/lang](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md)
- [jsx-a11y/media-has-caption](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md): `error, audio: , video: , track: `
- [jsx-a11y/mouse-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md)
- [jsx-a11y/no-access-key](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)
- [jsx-a11y/no-autofocus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md): `error, ignoreNonDOM: true`
- [jsx-a11y/no-distracting-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md): `error, elements: marquee, blink`
- [jsx-a11y/no-interactive-element-to-noninteractive-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md): `error, tr: none, presentation`
- [jsx-a11y/no-noninteractive-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md): `error, handlers: onClick, onMouseDown, onMouseUp, onKeyPress…`
- [jsx-a11y/no-noninteractive-element-to-interactive-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md): `error, ul: listbox, menu, menubar, radiogroup, tablist, tree…`
- [jsx-a11y/no-noninteractive-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md): `error, tags: , roles: tabpanel`
- [jsx-a11y/no-redundant-roles](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)
- [jsx-a11y/no-static-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md): `error, handlers: onClick, onMouseDown, onMouseUp, onKeyPress…`
- [jsx-a11y/role-has-required-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)
- [jsx-a11y/role-supports-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)
- [jsx-a11y/scope](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)
- [jsx-a11y/tabindex-no-positive](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md)
- [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this): `error, exceptMethods: render, getInitialState, getDefaultPro…`
- [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md): `error, never, always: `
- [react/jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md): `error, ignoreCase: true`
- [react/jsx-no-undef](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)
- [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md): `error, allowAllCaps: true, ignore: `
- [react/jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)
- [react/jsx-uses-vars](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)
- [react/no-danger](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md): `warn`
- [react/no-deprecated](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)
- [react/no-did-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)
- [react/no-will-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)
- [react/no-is-mounted](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)
- [react/no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)
- [react/no-unknown-property](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)
- [react/prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md): `error, always`
- [react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md): `error, ignorePureComponents: true`
- [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md): `error, ignore: , customValidators: , skipUndeclared: false`
- [react/react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)
- [react/require-render-return](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)
- [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)
- [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md): `error, order: static-variables, static-methods, instance-var…`
- [react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md): `error, enforceDynamicLinks: always, links: true, forms: false`
- [react/jsx-no-comment-textnodes](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)
- [react/no-render-return-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)
- [react/no-find-dom-node](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)
- [react/no-danger-with-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)
- [react/no-unused-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md): `error, customValidators: , skipShapeProps: true`
- [react/style-prop-object](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)
- [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)
- [react/no-children-prop](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)
- [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)
- [react/require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md): `error, forbidDefaultForRequired: true`
- [react/forbid-foreign-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md): `warn, allowInPropTypes: true`
- [react/void-dom-elements-no-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)
- [react/default-props-match-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md): `error, allowRequiredDefaults: false`
- [react/no-redundant-should-component-update](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)
- [react/no-unused-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md)
- [react/no-typos](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md)
- [react/jsx-curly-brace-presence](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md): `error, props: never, children: never`
- [react/destructuring-assignment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md): `error, always`
- [react/no-access-state-in-setstate](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)
- [react/button-has-type](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md): `error, button: true, submit: true, reset: false`
- [react/no-this-in-sfc](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)
- [react/jsx-fragments](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md): `error, syntax`
- [react/state-in-constructor](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md): `error, always`
- [react/static-property-placement](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md): `error, property assignment`
- [react/jsx-props-no-spreading](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md): `error, html: enforce, custom: enforce, explicitSpread: ignor…`
- [react/jsx-no-script-url](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md): `error, name: Link, props: to`
- [react/jsx-no-useless-fragment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md)
- [react/jsx-no-constructed-context-values](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md)
- [react/no-unstable-nested-components](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md)
- [react/no-namespace](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md)
- [react/no-arrow-function-lifecycle](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md)
- [react/no-invalid-html-attribute](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md)
- [react/no-unused-class-component-methods](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md)
- [strict](https://eslint.org/docs/rules/strict): `error, never`
- [import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md): `error, commonjs: true, caseSensitive: true, caseSensitiveStrict: false`
- [import/named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)
- [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)
- [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)
- [import/no-named-as-default-member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)
- [import/no-mutable-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)
- [import/no-amd](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)
- [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)
- [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)
- [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md): `error, ignorePackages, js: never, mjs: never, jsx: never`
- [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md): `error, groups: builtin, external, internal, warnOnUnassigned…`
- [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)
- [import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)
- [import/no-dynamic-require](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)
- [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
- [import/no-named-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)
- [import/no-self-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)
- [import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md): `error, maxDepth: ∞, ignoreExternal: false`
- [import/no-useless-path-segments](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md): `error, commonjs: true`
- [import/no-import-module-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md): `error, exceptions: `
- [import/no-relative-packages](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md)
- [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style): `error, as-needed, requireReturnForObjectLiteral: false`
- [constructor-super](https://eslint.org/docs/rules/constructor-super)
- [no-class-assign](https://eslint.org/docs/rules/no-class-assign)
- [no-const-assign](https://eslint.org/docs/rules/no-const-assign)
- [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)
- [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)
- [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports): `error, restrictedNamedExports: default, then`
- [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)
- [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)
- [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)
- [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename): `error, ignoreDestructuring: false, ignoreImport: false, igno…`
- [no-var](https://eslint.org/docs/rules/no-var)
- [object-shorthand](https://eslint.org/docs/rules/object-shorthand): `error, always, ignoreConstructors: false, avoidQuotes: true`
- [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback): `error, allowNamedFunctions: false, allowUnboundThis: true`
- [prefer-const](https://eslint.org/docs/rules/prefer-const): `error, destructuring: any, ignoreReadBeforeAssign: true`
- [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring): `error, VariableDeclarator: array: false, object: true, Assig…`
- [prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)
- [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)
- [prefer-spread](https://eslint.org/docs/rules/prefer-spread)
- [prefer-template](https://eslint.org/docs/rules/prefer-template)
- [require-yield](https://eslint.org/docs/rules/require-yield)
- [symbol-description](https://eslint.org/docs/rules/symbol-description)
- [no-delete-var](https://eslint.org/docs/rules/no-delete-var)
- [no-label-var](https://eslint.org/docs/rules/no-label-var)
- [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals): `error, name: isFinite, message: Use Number.isFinite instead …`
- [no-shadow](https://eslint.org/docs/rules/no-shadow)
- [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)
- [no-undef](https://eslint.org/docs/rules/no-undef)
- [no-undef-init](https://eslint.org/docs/rules/no-undef-init)
- [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars): `error, vars: all, args: after-used, ignoreRestSiblings: true`
- [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define): `error, functions: true, classes: true, variables: true`
- [func-names](https://eslint.org/docs/rules/func-names): `warn`
- [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members): `error, always, exceptAfterSingleLine: false`
- [lines-around-directive](https://eslint.org/docs/rules/lines-around-directive): `error, before: always, after: always`
- [new-cap](https://eslint.org/docs/rules/new-cap): `error, newIsCap: true, newIsCapExceptions: , capIsNew: false…`
- [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)
- [no-bitwise](https://eslint.org/docs/rules/no-bitwise)
- [no-continue](https://eslint.org/docs/rules/no-continue)
- [no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)
- [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)
- [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)
- [no-new-object](https://eslint.org/docs/rules/no-new-object)
- [no-plusplus](https://eslint.org/docs/rules/no-plusplus)
- [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax): `error, selector: ForInStatement, message: for..in loops iter…`
- [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary): `error, defaultAssignment: false`
- [one-var](https://eslint.org/docs/rules/one-var): `error, never`
- [operator-assignment](https://eslint.org/docs/rules/operator-assignment): `error, always`
- [prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator)
- [prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)
- [spaced-comment](https://eslint.org/docs/rules/spaced-comment): `error, always, line: exceptions: -, +, markers: =, !, /, blo…`
- [global-require](https://eslint.org/docs/rules/global-require)
- [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)
- [no-new-require](https://eslint.org/docs/rules/no-new-require)
- [no-path-concat](https://eslint.org/docs/rules/no-path-concat)
- [for-direction](https://eslint.org/docs/rules/for-direction)
- [getter-return](https://eslint.org/docs/rules/getter-return): `error, allowImplicit: true`
- [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)
- [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)
- [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)
- [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign): `error, always`
- [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition): `warn`
- [no-control-regex](https://eslint.org/docs/rules/no-control-regex)
- [no-debugger](https://eslint.org/docs/rules/no-debugger)
- [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)
- [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)
- [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)
- [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)
- [no-empty](https://eslint.org/docs/rules/no-empty)
- [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)
- [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)
- [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)
- [no-func-assign](https://eslint.org/docs/rules/no-func-assign)
- [no-import-assign](https://eslint.org/docs/rules/no-import-assign)
- [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)
- [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)
- [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)
- [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)
- [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)
- [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)
- [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)
- [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
- [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)
- [no-setter-return](https://eslint.org/docs/rules/no-setter-return)
- [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)
- [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)
- [no-unreachable](https://eslint.org/docs/rules/no-unreachable)
- [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop): `error, ignore: `
- [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)
- [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)
- [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining): `error, disallowArithmeticOperators: true`
- [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)
- [use-isnan](https://eslint.org/docs/rules/use-isnan)
- [valid-typeof](https://eslint.org/docs/rules/valid-typeof): `error, requireStringLiterals: true`
- [array-callback-return](https://eslint.org/docs/rules/array-callback-return): `error, allowImplicit: true, checkForEach: false`
- [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)
- [consistent-return](https://eslint.org/docs/rules/consistent-return)
- [default-case](https://eslint.org/docs/rules/default-case): `error, commentPattern: ^no default$`
- [default-case-last](https://eslint.org/docs/rules/default-case-last)
- [default-param-last](https://eslint.org/docs/rules/default-param-last)
- [dot-notation](https://eslint.org/docs/rules/dot-notation): `error, allowKeywords: true, allowPattern: `
- [eqeqeq](https://eslint.org/docs/rules/eqeqeq): `error, always, null: ignore`
- [grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)
- [guard-for-in](https://eslint.org/docs/rules/guard-for-in)
- [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file): `error, 1`
- [no-alert](https://eslint.org/docs/rules/no-alert): `warn`
- [no-caller](https://eslint.org/docs/rules/no-caller)
- [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)
- [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)
- [no-else-return](https://eslint.org/docs/rules/no-else-return): `error, allowElseIf: false`
- [no-empty-function](https://eslint.org/docs/rules/no-empty-function): `error, allow: arrowFunctions, functions, methods`
- [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)
- [no-eval](https://eslint.org/docs/rules/no-eval)
- [no-extend-native](https://eslint.org/docs/rules/no-extend-native)
- [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)
- [no-extra-label](https://eslint.org/docs/rules/no-extra-label)
- [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)
- [no-global-assign](https://eslint.org/docs/rules/no-global-assign): `error, exceptions: `
- [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)
- [no-iterator](https://eslint.org/docs/rules/no-iterator)
- [no-labels](https://eslint.org/docs/rules/no-labels): `error, allowLoop: false, allowSwitch: false`
- [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)
- [no-loop-func](https://eslint.org/docs/rules/no-loop-func)
- [no-multi-str](https://eslint.org/docs/rules/no-multi-str)
- [no-new](https://eslint.org/docs/rules/no-new)
- [no-new-func](https://eslint.org/docs/rules/no-new-func)
- [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)
- [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)
- [no-octal](https://eslint.org/docs/rules/no-octal)
- [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)
- [no-proto](https://eslint.org/docs/rules/no-proto)
- [no-redeclare](https://eslint.org/docs/rules/no-redeclare)
- [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties): `error, object: arguments, property: callee, message: argumen…`
- [no-return-assign](https://eslint.org/docs/rules/no-return-assign): `error, always`
- [no-return-await](https://eslint.org/docs/rules/no-return-await)
- [no-script-url](https://eslint.org/docs/rules/no-script-url)
- [no-self-assign](https://eslint.org/docs/rules/no-self-assign): `error, props: true`
- [no-self-compare](https://eslint.org/docs/rules/no-self-compare)
- [no-sequences](https://eslint.org/docs/rules/no-sequences)
- [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)
- [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions): `error, allowShortCircuit: false, allowTernary: false, allowT…`
- [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)
- [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)
- [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)
- [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)
- [no-useless-return](https://eslint.org/docs/rules/no-useless-return)
- [no-void](https://eslint.org/docs/rules/no-void)
- [no-with](https://eslint.org/docs/rules/no-with)
- [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors): `error, allowEmptyReject: true`
- [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals): `error, disallowRedundantWrapping: true`
- [radix](https://eslint.org/docs/rules/radix)
- [vars-on-top](https://eslint.org/docs/rules/vars-on-top)
- [yoda](https://eslint.org/docs/rules/yoda)

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for guidance and setup instructions.
