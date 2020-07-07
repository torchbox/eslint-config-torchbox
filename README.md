# [eslint-config-torchbox](https://www.npmjs.com/package/eslint-config-torchbox) [<img src="https://raw.githubusercontent.com/torchbox/eslint-config-torchbox/master/.github/eslint-logo.svg?sanitize=true" alt="ESLint" width="90" height="90" align="right">](https://eslint.org)

[![eslint-config-torchbox on npm](https://img.shields.io/npm/v/eslint-config-torchbox.svg)](https://www.npmjs.com/package/eslint-config-torchbox) [![Build Status](https://travis-ci.com/torchbox/eslint-config-torchbox.svg?branch=master)](https://travis-ci.com/torchbox/eslint-config-torchbox)

> Shareable ESLint config following Torchbox’s code style.

## Usage

Install the config along with its peer dependencies:

```sh
npx install-peerdeps --dev eslint-config-torchbox@latest
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
- We recommend using a `.eslintignore` so ESLint can be targeted at all files, with a blacklist of files to ignore.
- If relevant, use ESLint’s [`overrides`](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files) feature to make it more permissive for certain files – for example Storybook stories or unit tests, where code standards are different.

Here’s a package.json `run` script and an ignore file to get you started:

```json
"lint:js": "eslint --report-unused-disable-directives .",
```

`.eslintignore` (adapt to your project):

```
.git
node_modules
coverage
static_compiled
venv
```

Note the point of the ignore file isn’t just to determine which JS files we don’t want to be linted, but also speed up linting by excluding large folders.

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

This config is meant first and foremost for React projects, where it will detect which rules to apply based on the version of React used on the project. The config can also be used on non-React projects – just make sure to disable the version check by adding: the following in your config:

```js
module.exports = {
  // [...]
  settings: {
    // Manually set the version to disable automated detection of the "react" dependency.
    react: { version: 'latest' },
  },
};
```

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

### TypeScript

This config doesn’t include TypeScript support out of the box. We can install and configure a TypeScript parser and ESLint plugin to make it compatible. Here is how to proceed:

```sh
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

And update your ESLint configuration to:

```js
module.exports = {
  // See https://github.com/torchbox/eslint-config-torchbox for rules.
  extends: [
    'torchbox',
    // TypeScript-aware plugins which either add extra rules for TS code, or override built-in rules for compatibility.
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript compatibility rule changes.
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'import/extensions': [
      2,
      'always',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      },
    ],
  },
};
```

As of ESLint v6, you will also need to tell ESLint to parse TypeScript files with the `--ext` flag:

```sh
eslint --report-unused-disable-directives --ext .js,.jsx,.ts,.tsx .
```

Note that the TypeScript-friendly rules included in the config above aren’t as strict as our baseline config. To bridge this gap, consider using `--max-warnings 0` to treat all warnings as errors:

```sh
eslint --max-warnings 0 --report-unused-disable-directives --ext .js,.jsx,.ts,.tsx .
```

## What’s included

> See [`config.js`](./config.js) for the config definition, and [`semver.test.js.snap`](./src/__snapshots__/semver.test.js.snap) for the whole set of rules and settings.

### Extends

- [`airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)
- [`prettier`](https://github.com/prettier/eslint-config-prettier)
- [`prettier/react`](https://github.com/prettier/eslint-config-prettier)

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
- [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md): `2, devDependencies: **/tests/**, **/stories/**, **/storybook…`
- [import/prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md): `0`

### Inherited rules

- [react-hooks/rules-of-hooks](https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md)
- [react-hooks/exhaustive-deps](https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md)
- [jsx-a11y/anchor-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md): `error, components:`
- [jsx-a11y/aria-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md): `error, ignoreNonDom: false, ignoreNonDOM: false`
- [jsx-a11y/aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)
- [jsx-a11y/aria-proptypes](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)
- [jsx-a11y/aria-unsupported-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)
- [jsx-a11y/alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md): `error, elements: img, object, area, inputtype=\image\, img: …`
- [jsx-a11y/img-redundant-alt](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)
- [jsx-a11y/label-has-associated-control](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md): `error, labelComponents: , labelAttributes: , controlComponen…`
- [jsx-a11y/control-has-associated-label](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md): `error, labelAttributes: label, controlComponents: , ignoreEl…`
- [jsx-a11y/mouse-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md)
- [jsx-a11y/no-access-key](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)
- [jsx-a11y/interactive-supports-focus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)
- [jsx-a11y/role-has-required-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)
- [jsx-a11y/role-supports-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)
- [jsx-a11y/tabindex-no-positive](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md)
- [jsx-a11y/heading-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md): `error, components:`
- [jsx-a11y/html-has-lang](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md)
- [jsx-a11y/lang](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md)
- [jsx-a11y/no-distracting-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md): `error, elements: marquee, blink`
- [jsx-a11y/scope](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)
- [jsx-a11y/click-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)
- [jsx-a11y/no-static-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md): `error, handlers: onClick, onMouseDown, onMouseUp, onKeyPress…`
- [jsx-a11y/no-noninteractive-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md): `error, handlers: onClick, onMouseDown, onMouseUp, onKeyPress…`
- [jsx-a11y/accessible-emoji](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)
- [jsx-a11y/aria-activedescendant-has-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)
- [jsx-a11y/iframe-has-title](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)
- [jsx-a11y/no-autofocus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md): `error, ignoreNonDOM: true`
- [jsx-a11y/no-redundant-roles](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)
- [jsx-a11y/media-has-caption](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md): `error, audio: , video: , track:`
- [jsx-a11y/no-interactive-element-to-noninteractive-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md): `error, tr: none, presentation`
- [jsx-a11y/no-noninteractive-element-to-interactive-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md): `error, ul: listbox, menu, menubar, radiogroup, tablist, tree…`
- [jsx-a11y/no-noninteractive-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md): `error, tags: , roles: tabpanel`
- [jsx-a11y/anchor-is-valid](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md): `error, components: Link, specialLink: to, aspects: noHref, i…`
- [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this): `error, exceptMethods: render, getInitialState, getDefaultPro…`
- [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md): `error, never, always:`
- [react/jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md): `error, ignoreCase: true`
- [react/jsx-no-undef](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)
- [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md): `error, allowAllCaps: true, ignore:`
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
- [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md): `error, order: static-methods, instance-variables, lifecycle,…`
- [react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md): `error, enforceDynamicLinks: always`
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
- [react/jsx-props-no-spreading](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md): `error, html: enforce, custom: enforce, exceptions:`
- [strict](https://eslint.org/docs/rules/strict): `error, never`
- [import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md): `error, commonjs: true, caseSensitive: true`
- [import/named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)
- [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)
- [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)
- [import/no-named-as-default-member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)
- [import/no-mutable-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)
- [import/no-amd](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)
- [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)
- [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)
- [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md): `error, ignorePackages, js: never, mjs: never, jsx: never`
- [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md): `error, groups: builtin, external, internal`
- [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)
- [import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)
- [import/no-dynamic-require](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)
- [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
- [import/no-named-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)
- [import/no-self-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)
- [import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md): `error, maxDepth: null`
- [import/no-useless-path-segments](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)
- [constructor-super](https://eslint.org/docs/rules/constructor-super)
- [no-class-assign](https://eslint.org/docs/rules/no-class-assign)
- [no-const-assign](https://eslint.org/docs/rules/no-const-assign)
- [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)
- [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)
- [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)
- [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)
- [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)
- [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename): `error, ignoreDestructuring: false, ignoreImport: false, igno…`
- [no-var](https://eslint.org/docs/rules/no-var)
- [object-shorthand](https://eslint.org/docs/rules/object-shorthand): `error, always, ignoreConstructors: false, avoidQuotes: true`
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
- [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals): `error, isFinite, isNaN, addEventListener, blur, close, close…`
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
- [prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)
- [spaced-comment](https://eslint.org/docs/rules/spaced-comment): `error, always, line: exceptions: -, +, markers: =, !, block:…`
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
- [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)
- [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)
- [no-empty](https://eslint.org/docs/rules/no-empty)
- [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)
- [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)
- [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)
- [no-func-assign](https://eslint.org/docs/rules/no-func-assign)
- [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)
- [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)
- [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)
- [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)
- [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)
- [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
- [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)
- [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)
- [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)
- [no-unreachable](https://eslint.org/docs/rules/no-unreachable)
- [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)
- [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)
- [use-isnan](https://eslint.org/docs/rules/use-isnan)
- [valid-typeof](https://eslint.org/docs/rules/valid-typeof): `error, requireStringLiterals: true`
- [array-callback-return](https://eslint.org/docs/rules/array-callback-return): `error, allowImplicit: true`
- [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)
- [consistent-return](https://eslint.org/docs/rules/consistent-return)
- [default-case](https://eslint.org/docs/rules/default-case): `error, commentPattern: ^no default$`
- [dot-notation](https://eslint.org/docs/rules/dot-notation): `error, allowKeywords: true, allowPattern:`
- [eqeqeq](https://eslint.org/docs/rules/eqeqeq): `error, always, null: ignore`
- [guard-for-in](https://eslint.org/docs/rules/guard-for-in)
- [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file): `error, 1`
- [no-alert](https://eslint.org/docs/rules/no-alert): `warn`
- [no-caller](https://eslint.org/docs/rules/no-caller)
- [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)
- [no-else-return](https://eslint.org/docs/rules/no-else-return): `error, allowElseIf: false`
- [no-empty-function](https://eslint.org/docs/rules/no-empty-function): `error, allow: arrowFunctions, functions, methods`
- [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)
- [no-eval](https://eslint.org/docs/rules/no-eval)
- [no-extend-native](https://eslint.org/docs/rules/no-extend-native)
- [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)
- [no-extra-label](https://eslint.org/docs/rules/no-extra-label)
- [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)
- [no-global-assign](https://eslint.org/docs/rules/no-global-assign): `error, exceptions:`
- [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)
- [no-iterator](https://eslint.org/docs/rules/no-iterator)
- [no-labels](https://eslint.org/docs/rules/no-labels): `error, allowLoop: false, allowSwitch: false`
- [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)
- [no-loop-func](https://eslint.org/docs/rules/no-loop-func)
- [no-multi-str](https://eslint.org/docs/rules/no-multi-str)
- [no-new](https://eslint.org/docs/rules/no-new)
- [no-new-func](https://eslint.org/docs/rules/no-new-func)
- [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)
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
- [radix](https://eslint.org/docs/rules/radix)
- [vars-on-top](https://eslint.org/docs/rules/vars-on-top)
- [yoda](https://eslint.org/docs/rules/yoda)

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for guidance and setup instructions.
