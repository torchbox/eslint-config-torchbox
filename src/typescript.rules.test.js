'use strict';

const config = require('../typescript');
const getComputedConfig = require('./getComputedConfig');

describe('semver for TypeScript rules - should those tests break, consider releasing a new major version of the package', () => {
    it('has stable config rules', async () => {
        const computed = await getComputedConfig(config);
        // Remove absolute paths.
        computed.parser = computed.parser.replace(
            /.+\/node_modules\/(.+)$/,
            '$1',
        );
        expect(computed).toMatchInlineSnapshot(`
            Object {
              "env": Object {
                "es6": true,
                "node": true,
              },
              "globals": Object {},
              "ignorePatterns": Array [],
              "noInlineConfig": undefined,
              "parser": "@typescript-eslint/parser/dist/index.js",
              "parserOptions": Object {
                "ecmaFeatures": Object {
                  "generators": false,
                  "jsx": true,
                  "objectLiteralDuplicateProperties": false,
                },
                "ecmaVersion": 2018,
                "sourceType": "module",
              },
              "plugins": Array [
                "import",
                "react",
                "jsx-a11y",
                "react-hooks",
                "@typescript-eslint",
              ],
              "reportUnusedDisableDirectives": undefined,
              "rules": Object {
                "@babel/object-curly-spacing": Array [
                  "off",
                ],
                "@babel/semi": Array [
                  "off",
                ],
                "@typescript-eslint/adjacent-overload-signatures": Array [
                  "error",
                ],
                "@typescript-eslint/ban-ts-comment": Array [
                  "error",
                ],
                "@typescript-eslint/ban-types": Array [
                  "error",
                ],
                "@typescript-eslint/brace-style": Array [
                  "off",
                ],
                "@typescript-eslint/comma-dangle": Array [
                  "off",
                ],
                "@typescript-eslint/comma-spacing": Array [
                  "off",
                ],
                "@typescript-eslint/default-param-last": Array [
                  "error",
                ],
                "@typescript-eslint/func-call-spacing": Array [
                  "off",
                ],
                "@typescript-eslint/indent": Array [
                  "off",
                ],
                "@typescript-eslint/keyword-spacing": Array [
                  "off",
                ],
                "@typescript-eslint/member-delimiter-style": Array [
                  "off",
                ],
                "@typescript-eslint/no-array-constructor": Array [
                  "error",
                ],
                "@typescript-eslint/no-dupe-class-members": Array [
                  "error",
                ],
                "@typescript-eslint/no-empty-function": Array [
                  "error",
                  Object {
                    "allow": Array [
                      "arrowFunctions",
                      "functions",
                      "methods",
                    ],
                  },
                ],
                "@typescript-eslint/no-empty-interface": Array [
                  "error",
                ],
                "@typescript-eslint/no-explicit-any": Array [
                  "warn",
                ],
                "@typescript-eslint/no-extra-non-null-assertion": Array [
                  "error",
                ],
                "@typescript-eslint/no-extra-parens": Array [
                  "off",
                ],
                "@typescript-eslint/no-extra-semi": Array [
                  "off",
                ],
                "@typescript-eslint/no-inferrable-types": Array [
                  "error",
                ],
                "@typescript-eslint/no-loop-func": Array [
                  "error",
                ],
                "@typescript-eslint/no-loss-of-precision": Array [
                  "error",
                ],
                "@typescript-eslint/no-misused-new": Array [
                  "error",
                ],
                "@typescript-eslint/no-namespace": Array [
                  "error",
                ],
                "@typescript-eslint/no-non-null-asserted-optional-chain": Array [
                  "error",
                ],
                "@typescript-eslint/no-non-null-assertion": Array [
                  "warn",
                ],
                "@typescript-eslint/no-redeclare": Array [
                  "error",
                ],
                "@typescript-eslint/no-shadow": Array [
                  "error",
                ],
                "@typescript-eslint/no-this-alias": Array [
                  "error",
                ],
                "@typescript-eslint/no-unnecessary-type-constraint": Array [
                  "error",
                ],
                "@typescript-eslint/no-unused-expressions": Array [
                  "error",
                  Object {
                    "allowShortCircuit": false,
                    "allowTaggedTemplates": false,
                    "allowTernary": false,
                    "enforceForJSX": false,
                  },
                ],
                "@typescript-eslint/no-unused-vars": Array [
                  "error",
                  Object {
                    "args": "after-used",
                    "ignoreRestSiblings": true,
                    "vars": "all",
                  },
                ],
                "@typescript-eslint/no-use-before-define": Array [
                  "error",
                  Object {
                    "classes": true,
                    "functions": true,
                    "variables": true,
                  },
                ],
                "@typescript-eslint/no-useless-constructor": Array [
                  "error",
                ],
                "@typescript-eslint/no-var-requires": Array [
                  "error",
                ],
                "@typescript-eslint/object-curly-spacing": Array [
                  "off",
                ],
                "@typescript-eslint/prefer-as-const": Array [
                  "error",
                ],
                "@typescript-eslint/prefer-namespace-keyword": Array [
                  "error",
                ],
                "@typescript-eslint/quotes": Array [
                  0,
                ],
                "@typescript-eslint/semi": Array [
                  "off",
                ],
                "@typescript-eslint/space-before-function-paren": Array [
                  "off",
                ],
                "@typescript-eslint/space-infix-ops": Array [
                  "off",
                ],
                "@typescript-eslint/triple-slash-reference": Array [
                  "error",
                ],
                "@typescript-eslint/type-annotation-spacing": Array [
                  "off",
                ],
                "accessor-pairs": Array [
                  "off",
                ],
                "array-bracket-newline": Array [
                  "off",
                  "consistent",
                ],
                "array-bracket-spacing": Array [
                  "off",
                  "never",
                ],
                "array-callback-return": Array [
                  "error",
                  Object {
                    "allowImplicit": true,
                    "checkForEach": false,
                  },
                ],
                "array-element-newline": Array [
                  "off",
                  Object {
                    "minItems": 3,
                    "multiline": true,
                  },
                ],
                "arrow-body-style": Array [
                  "error",
                  "as-needed",
                  Object {
                    "requireReturnForObjectLiteral": false,
                  },
                ],
                "arrow-parens": Array [
                  "off",
                  "always",
                ],
                "arrow-spacing": Array [
                  "off",
                  Object {
                    "after": true,
                    "before": true,
                  },
                ],
                "babel/object-curly-spacing": Array [
                  "off",
                ],
                "babel/quotes": Array [
                  0,
                ],
                "babel/semi": Array [
                  "off",
                ],
                "block-scoped-var": Array [
                  "error",
                ],
                "block-spacing": Array [
                  "off",
                  "always",
                ],
                "brace-style": Array [
                  "off",
                  "1tbs",
                  Object {
                    "allowSingleLine": true,
                  },
                ],
                "callback-return": Array [
                  "off",
                ],
                "camelcase": Array [
                  0,
                  Object {
                    "ignoreDestructuring": false,
                    "ignoreGlobals": false,
                    "ignoreImports": false,
                    "properties": "never",
                  },
                ],
                "capitalized-comments": Array [
                  "off",
                  "never",
                  Object {
                    "block": Object {
                      "ignoreConsecutiveComments": true,
                      "ignoreInlineComments": true,
                      "ignorePattern": ".*",
                    },
                    "line": Object {
                      "ignoreConsecutiveComments": true,
                      "ignoreInlineComments": true,
                      "ignorePattern": ".*",
                    },
                  },
                ],
                "class-methods-use-this": Array [
                  "error",
                  Object {
                    "enforceForClassFields": true,
                    "exceptMethods": Array [
                      "render",
                      "getInitialState",
                      "getDefaultProps",
                      "getChildContext",
                      "componentWillMount",
                      "UNSAFE_componentWillMount",
                      "componentDidMount",
                      "componentWillReceiveProps",
                      "UNSAFE_componentWillReceiveProps",
                      "shouldComponentUpdate",
                      "componentWillUpdate",
                      "UNSAFE_componentWillUpdate",
                      "componentDidUpdate",
                      "componentWillUnmount",
                      "componentDidCatch",
                      "getSnapshotBeforeUpdate",
                    ],
                  },
                ],
                "comma-dangle": Array [
                  "off",
                  Object {
                    "arrays": "always-multiline",
                    "exports": "always-multiline",
                    "functions": "always-multiline",
                    "imports": "always-multiline",
                    "objects": "always-multiline",
                  },
                ],
                "comma-spacing": Array [
                  "off",
                  Object {
                    "after": true,
                    "before": false,
                  },
                ],
                "comma-style": Array [
                  "off",
                  "last",
                  Object {
                    "exceptions": Object {
                      "ArrayExpression": false,
                      "ArrayPattern": false,
                      "ArrowFunctionExpression": false,
                      "CallExpression": false,
                      "FunctionDeclaration": false,
                      "FunctionExpression": false,
                      "ImportDeclaration": false,
                      "NewExpression": false,
                      "ObjectExpression": false,
                      "ObjectPattern": false,
                      "VariableDeclaration": false,
                    },
                  },
                ],
                "complexity": Array [
                  "off",
                  20,
                ],
                "computed-property-spacing": Array [
                  "off",
                  "never",
                ],
                "consistent-return": Array [
                  "error",
                ],
                "consistent-this": Array [
                  "off",
                ],
                "constructor-super": Array [
                  "error",
                ],
                "curly": Array [
                  0,
                  "multi-line",
                ],
                "default-case": Array [
                  "error",
                  Object {
                    "commentPattern": "^no default$",
                  },
                ],
                "default-case-last": Array [
                  "error",
                ],
                "default-param-last": Array [
                  "off",
                ],
                "dot-location": Array [
                  "off",
                  "property",
                ],
                "dot-notation": Array [
                  "error",
                  Object {
                    "allowKeywords": true,
                    "allowPattern": "",
                  },
                ],
                "eol-last": Array [
                  "off",
                  "always",
                ],
                "eqeqeq": Array [
                  "error",
                  "always",
                  Object {
                    "null": "ignore",
                  },
                ],
                "flowtype/boolean-style": Array [
                  "off",
                ],
                "flowtype/delimiter-dangle": Array [
                  "off",
                ],
                "flowtype/generic-spacing": Array [
                  "off",
                ],
                "flowtype/object-type-curly-spacing": Array [
                  "off",
                ],
                "flowtype/object-type-delimiter": Array [
                  "off",
                ],
                "flowtype/quotes": Array [
                  "off",
                ],
                "flowtype/semi": Array [
                  "off",
                ],
                "flowtype/space-after-type-colon": Array [
                  "off",
                ],
                "flowtype/space-before-generic-bracket": Array [
                  "off",
                ],
                "flowtype/space-before-type-colon": Array [
                  "off",
                ],
                "flowtype/union-intersection-spacing": Array [
                  "off",
                ],
                "for-direction": Array [
                  "error",
                ],
                "func-call-spacing": Array [
                  "off",
                  "never",
                ],
                "func-name-matching": Array [
                  "off",
                  "always",
                  Object {
                    "considerPropertyDescriptor": true,
                    "includeCommonJSModuleExports": false,
                  },
                ],
                "func-names": Array [
                  "warn",
                ],
                "func-style": Array [
                  "off",
                  "expression",
                ],
                "function-call-argument-newline": Array [
                  "off",
                  "consistent",
                ],
                "function-paren-newline": Array [
                  "off",
                  "multiline-arguments",
                ],
                "generator-star": Array [
                  "off",
                ],
                "generator-star-spacing": Array [
                  "off",
                  Object {
                    "after": true,
                    "before": false,
                  },
                ],
                "getter-return": Array [
                  "error",
                  Object {
                    "allowImplicit": true,
                  },
                ],
                "global-require": Array [
                  "error",
                ],
                "grouped-accessor-pairs": Array [
                  "error",
                ],
                "guard-for-in": Array [
                  "error",
                ],
                "handle-callback-err": Array [
                  "off",
                ],
                "id-denylist": Array [
                  "off",
                ],
                "id-length": Array [
                  "off",
                ],
                "id-match": Array [
                  "off",
                ],
                "implicit-arrow-linebreak": Array [
                  "off",
                  "beside",
                ],
                "import/default": Array [
                  "off",
                ],
                "import/dynamic-import-chunkname": Array [
                  "off",
                  Object {
                    "importFunctions": Array [],
                    "webpackChunknameFormat": "[0-9a-zA-Z-_/.]+",
                  },
                ],
                "import/export": Array [
                  "error",
                ],
                "import/exports-last": Array [
                  "off",
                ],
                "import/extensions": Array [
                  2,
                  "always",
                  Object {
                    "ignorePackages": true,
                    "pattern": Object {
                      "js": "never",
                      "ts": "never",
                      "tsx": "never",
                    },
                  },
                ],
                "import/first": Array [
                  "error",
                ],
                "import/group-exports": Array [
                  "off",
                ],
                "import/imports-first": Array [
                  "off",
                ],
                "import/max-dependencies": Array [
                  "off",
                  Object {
                    "max": 10,
                  },
                ],
                "import/named": Array [
                  "error",
                ],
                "import/namespace": Array [
                  "off",
                ],
                "import/newline-after-import": Array [
                  "error",
                ],
                "import/no-absolute-path": Array [
                  "error",
                ],
                "import/no-amd": Array [
                  "error",
                ],
                "import/no-anonymous-default-export": Array [
                  "off",
                  Object {
                    "allowAnonymousClass": false,
                    "allowAnonymousFunction": false,
                    "allowArray": false,
                    "allowArrowFunction": false,
                    "allowLiteral": false,
                    "allowObject": false,
                  },
                ],
                "import/no-commonjs": Array [
                  "off",
                ],
                "import/no-cycle": Array [
                  "error",
                  Object {
                    "ignoreExternal": false,
                    "maxDepth": "∞",
                  },
                ],
                "import/no-default-export": Array [
                  "off",
                ],
                "import/no-deprecated": Array [
                  "off",
                ],
                "import/no-duplicates": Array [
                  "error",
                ],
                "import/no-dynamic-require": Array [
                  "error",
                ],
                "import/no-extraneous-dependencies": Array [
                  2,
                  Object {
                    "devDependencies": Array [
                      "**/tests/**",
                      "**/stories/**",
                      "**/storybook/**",
                      "spec/**",
                      "**/__tests__/**",
                      "**/__mocks__/**",
                      "**/*{.,_}{test,spec,story,stories}.*",
                      "**/jest.config.*",
                      "**/setupTests.*",
                      "**/webpack.config.*",
                      "**/rollup.config.*",
                      "**/gulpfile.*",
                    ],
                    "optionalDependencies": false,
                  },
                ],
                "import/no-import-module-exports": Array [
                  "error",
                  Object {
                    "exceptions": Array [],
                  },
                ],
                "import/no-internal-modules": Array [
                  "off",
                  Object {
                    "allow": Array [],
                  },
                ],
                "import/no-mutable-exports": Array [
                  "error",
                ],
                "import/no-named-as-default": Array [
                  "error",
                ],
                "import/no-named-as-default-member": Array [
                  "error",
                ],
                "import/no-named-default": Array [
                  "error",
                ],
                "import/no-named-export": Array [
                  "off",
                ],
                "import/no-namespace": Array [
                  "off",
                ],
                "import/no-nodejs-modules": Array [
                  "off",
                ],
                "import/no-relative-packages": Array [
                  "error",
                ],
                "import/no-relative-parent-imports": Array [
                  "off",
                ],
                "import/no-restricted-paths": Array [
                  "off",
                ],
                "import/no-self-import": Array [
                  "error",
                ],
                "import/no-unassigned-import": Array [
                  "off",
                ],
                "import/no-unresolved": Array [
                  "error",
                  Object {
                    "caseSensitive": true,
                    "caseSensitiveStrict": false,
                    "commonjs": true,
                  },
                ],
                "import/no-unused-modules": Array [
                  "off",
                  Object {
                    "ignoreExports": Array [],
                    "missingExports": true,
                    "unusedExports": true,
                  },
                ],
                "import/no-useless-path-segments": Array [
                  "error",
                  Object {
                    "commonjs": true,
                  },
                ],
                "import/no-webpack-loader-syntax": Array [
                  "error",
                ],
                "import/order": Array [
                  "error",
                  Object {
                    "groups": Array [
                      Array [
                        "builtin",
                        "external",
                        "internal",
                      ],
                    ],
                    "warnOnUnassignedImports": false,
                  },
                ],
                "import/prefer-default-export": Array [
                  0,
                ],
                "import/unambiguous": Array [
                  "off",
                ],
                "indent": Array [
                  "off",
                  2,
                  Object {
                    "ArrayExpression": 1,
                    "CallExpression": Object {
                      "arguments": 1,
                    },
                    "FunctionDeclaration": Object {
                      "body": 1,
                      "parameters": 1,
                    },
                    "FunctionExpression": Object {
                      "body": 1,
                      "parameters": 1,
                    },
                    "ImportDeclaration": 1,
                    "ObjectExpression": 1,
                    "SwitchCase": 1,
                    "VariableDeclarator": 1,
                    "flatTernaryExpressions": false,
                    "ignoreComments": false,
                    "ignoredNodes": Array [
                      "JSXElement",
                      "JSXElement > *",
                      "JSXAttribute",
                      "JSXIdentifier",
                      "JSXNamespacedName",
                      "JSXMemberExpression",
                      "JSXSpreadAttribute",
                      "JSXExpressionContainer",
                      "JSXOpeningElement",
                      "JSXClosingElement",
                      "JSXFragment",
                      "JSXOpeningFragment",
                      "JSXClosingFragment",
                      "JSXText",
                      "JSXEmptyExpression",
                      "JSXSpreadChild",
                    ],
                    "offsetTernaryExpressions": false,
                    "outerIIFEBody": 1,
                  },
                ],
                "indent-legacy": Array [
                  "off",
                ],
                "init-declarations": Array [
                  "off",
                ],
                "jsx-a11y/accessible-emoji": Array [
                  "off",
                ],
                "jsx-a11y/alt-text": Array [
                  "error",
                  Object {
                    "area": Array [],
                    "elements": Array [
                      "img",
                      "object",
                      "area",
                      "input[type=\\"image\\"]",
                    ],
                    "img": Array [],
                    "input[type=\\"image\\"]": Array [],
                    "object": Array [],
                  },
                ],
                "jsx-a11y/anchor-has-content": Array [
                  "error",
                  Object {
                    "components": Array [],
                  },
                ],
                "jsx-a11y/anchor-is-valid": Array [
                  "error",
                  Object {
                    "aspects": Array [
                      "noHref",
                      "invalidHref",
                      "preferButton",
                    ],
                    "components": Array [
                      "Link",
                    ],
                    "specialLink": Array [
                      "to",
                    ],
                  },
                ],
                "jsx-a11y/aria-activedescendant-has-tabindex": Array [
                  "error",
                ],
                "jsx-a11y/aria-props": Array [
                  "error",
                ],
                "jsx-a11y/aria-proptypes": Array [
                  "error",
                ],
                "jsx-a11y/aria-role": Array [
                  "error",
                  Object {
                    "ignoreNonDOM": false,
                  },
                ],
                "jsx-a11y/aria-unsupported-elements": Array [
                  "error",
                ],
                "jsx-a11y/autocomplete-valid": Array [
                  "off",
                  Object {
                    "inputComponents": Array [],
                  },
                ],
                "jsx-a11y/click-events-have-key-events": Array [
                  "error",
                ],
                "jsx-a11y/control-has-associated-label": Array [
                  "error",
                  Object {
                    "controlComponents": Array [],
                    "depth": 5,
                    "ignoreElements": Array [
                      "audio",
                      "canvas",
                      "embed",
                      "input",
                      "textarea",
                      "tr",
                      "video",
                    ],
                    "ignoreRoles": Array [
                      "grid",
                      "listbox",
                      "menu",
                      "menubar",
                      "radiogroup",
                      "row",
                      "tablist",
                      "toolbar",
                      "tree",
                      "treegrid",
                    ],
                    "labelAttributes": Array [
                      "label",
                    ],
                  },
                ],
                "jsx-a11y/heading-has-content": Array [
                  "error",
                  Object {
                    "components": Array [
                      "",
                    ],
                  },
                ],
                "jsx-a11y/html-has-lang": Array [
                  "error",
                ],
                "jsx-a11y/iframe-has-title": Array [
                  "error",
                ],
                "jsx-a11y/img-redundant-alt": Array [
                  "error",
                ],
                "jsx-a11y/interactive-supports-focus": Array [
                  "error",
                ],
                "jsx-a11y/label-has-associated-control": Array [
                  "error",
                  Object {
                    "assert": "both",
                    "controlComponents": Array [],
                    "depth": 25,
                    "labelAttributes": Array [],
                    "labelComponents": Array [],
                  },
                ],
                "jsx-a11y/label-has-for": Array [
                  "off",
                  Object {
                    "allowChildren": false,
                    "components": Array [],
                    "required": Object {
                      "every": Array [
                        "nesting",
                        "id",
                      ],
                    },
                  },
                ],
                "jsx-a11y/lang": Array [
                  "error",
                ],
                "jsx-a11y/media-has-caption": Array [
                  "error",
                  Object {
                    "audio": Array [],
                    "track": Array [],
                    "video": Array [],
                  },
                ],
                "jsx-a11y/mouse-events-have-key-events": Array [
                  "error",
                ],
                "jsx-a11y/no-access-key": Array [
                  "error",
                ],
                "jsx-a11y/no-autofocus": Array [
                  "error",
                  Object {
                    "ignoreNonDOM": true,
                  },
                ],
                "jsx-a11y/no-distracting-elements": Array [
                  "error",
                  Object {
                    "elements": Array [
                      "marquee",
                      "blink",
                    ],
                  },
                ],
                "jsx-a11y/no-interactive-element-to-noninteractive-role": Array [
                  "error",
                  Object {
                    "tr": Array [
                      "none",
                      "presentation",
                    ],
                  },
                ],
                "jsx-a11y/no-noninteractive-element-interactions": Array [
                  "error",
                  Object {
                    "handlers": Array [
                      "onClick",
                      "onMouseDown",
                      "onMouseUp",
                      "onKeyPress",
                      "onKeyDown",
                      "onKeyUp",
                    ],
                  },
                ],
                "jsx-a11y/no-noninteractive-element-to-interactive-role": Array [
                  "error",
                  Object {
                    "li": Array [
                      "menuitem",
                      "option",
                      "row",
                      "tab",
                      "treeitem",
                    ],
                    "ol": Array [
                      "listbox",
                      "menu",
                      "menubar",
                      "radiogroup",
                      "tablist",
                      "tree",
                      "treegrid",
                    ],
                    "table": Array [
                      "grid",
                    ],
                    "td": Array [
                      "gridcell",
                    ],
                    "ul": Array [
                      "listbox",
                      "menu",
                      "menubar",
                      "radiogroup",
                      "tablist",
                      "tree",
                      "treegrid",
                    ],
                  },
                ],
                "jsx-a11y/no-noninteractive-tabindex": Array [
                  "error",
                  Object {
                    "roles": Array [
                      "tabpanel",
                    ],
                    "tags": Array [],
                  },
                ],
                "jsx-a11y/no-onchange": Array [
                  "off",
                ],
                "jsx-a11y/no-redundant-roles": Array [
                  "error",
                ],
                "jsx-a11y/no-static-element-interactions": Array [
                  "error",
                  Object {
                    "handlers": Array [
                      "onClick",
                      "onMouseDown",
                      "onMouseUp",
                      "onKeyPress",
                      "onKeyDown",
                      "onKeyUp",
                    ],
                  },
                ],
                "jsx-a11y/role-has-required-aria-props": Array [
                  "error",
                ],
                "jsx-a11y/role-supports-aria-props": Array [
                  "error",
                ],
                "jsx-a11y/scope": Array [
                  "error",
                ],
                "jsx-a11y/tabindex-no-positive": Array [
                  "error",
                ],
                "jsx-quotes": Array [
                  "off",
                  "prefer-double",
                ],
                "key-spacing": Array [
                  "off",
                  Object {
                    "afterColon": true,
                    "beforeColon": false,
                  },
                ],
                "keyword-spacing": Array [
                  "off",
                  Object {
                    "after": true,
                    "before": true,
                    "overrides": Object {
                      "case": Object {
                        "after": true,
                      },
                      "return": Object {
                        "after": true,
                      },
                      "throw": Object {
                        "after": true,
                      },
                    },
                  },
                ],
                "line-comment-position": Array [
                  "off",
                  Object {
                    "applyDefaultPatterns": true,
                    "ignorePattern": "",
                    "position": "above",
                  },
                ],
                "linebreak-style": Array [
                  "off",
                  "unix",
                ],
                "lines-around-comment": Array [
                  0,
                ],
                "lines-around-directive": Array [
                  "error",
                  Object {
                    "after": "always",
                    "before": "always",
                  },
                ],
                "lines-between-class-members": Array [
                  "error",
                  "always",
                  Object {
                    "exceptAfterSingleLine": false,
                  },
                ],
                "max-classes-per-file": Array [
                  "error",
                  1,
                ],
                "max-depth": Array [
                  "off",
                  4,
                ],
                "max-len": Array [
                  0,
                  100,
                  2,
                  Object {
                    "ignoreComments": false,
                    "ignoreRegExpLiterals": true,
                    "ignoreStrings": true,
                    "ignoreTemplateLiterals": true,
                    "ignoreUrls": true,
                  },
                ],
                "max-lines": Array [
                  "off",
                  Object {
                    "max": 300,
                    "skipBlankLines": true,
                    "skipComments": true,
                  },
                ],
                "max-lines-per-function": Array [
                  "off",
                  Object {
                    "IIFEs": true,
                    "max": 50,
                    "skipBlankLines": true,
                    "skipComments": true,
                  },
                ],
                "max-nested-callbacks": Array [
                  "off",
                ],
                "max-params": Array [
                  "off",
                  3,
                ],
                "max-statements": Array [
                  "off",
                  10,
                ],
                "max-statements-per-line": Array [
                  "off",
                  Object {
                    "max": 1,
                  },
                ],
                "multiline-comment-style": Array [
                  "off",
                  "starred-block",
                ],
                "multiline-ternary": Array [
                  "off",
                  "never",
                ],
                "new-cap": Array [
                  "error",
                  Object {
                    "capIsNew": false,
                    "capIsNewExceptions": Array [
                      "Immutable.Map",
                      "Immutable.Set",
                      "Immutable.List",
                    ],
                    "newIsCap": true,
                    "newIsCapExceptions": Array [],
                    "properties": true,
                  },
                ],
                "new-parens": Array [
                  "off",
                ],
                "newline-after-var": Array [
                  "off",
                ],
                "newline-before-return": Array [
                  "off",
                ],
                "newline-per-chained-call": Array [
                  "off",
                  Object {
                    "ignoreChainWithDepth": 4,
                  },
                ],
                "no-alert": Array [
                  "warn",
                ],
                "no-array-constructor": Array [
                  "off",
                ],
                "no-arrow-condition": Array [
                  "off",
                ],
                "no-async-promise-executor": Array [
                  "error",
                ],
                "no-await-in-loop": Array [
                  "error",
                ],
                "no-bitwise": Array [
                  "error",
                ],
                "no-buffer-constructor": Array [
                  "error",
                ],
                "no-caller": Array [
                  "error",
                ],
                "no-case-declarations": Array [
                  "error",
                ],
                "no-catch-shadow": Array [
                  "off",
                ],
                "no-class-assign": Array [
                  "error",
                ],
                "no-comma-dangle": Array [
                  "off",
                ],
                "no-compare-neg-zero": Array [
                  "error",
                ],
                "no-cond-assign": Array [
                  "error",
                  "always",
                ],
                "no-confusing-arrow": Array [
                  0,
                  Object {
                    "allowParens": true,
                  },
                ],
                "no-console": Array [
                  2,
                  Object {
                    "allow": Array [
                      "error",
                    ],
                  },
                ],
                "no-const-assign": Array [
                  "error",
                ],
                "no-constant-condition": Array [
                  "warn",
                ],
                "no-constructor-return": Array [
                  "error",
                ],
                "no-continue": Array [
                  "error",
                ],
                "no-control-regex": Array [
                  "error",
                ],
                "no-debugger": Array [
                  "error",
                ],
                "no-delete-var": Array [
                  "error",
                ],
                "no-div-regex": Array [
                  "off",
                ],
                "no-dupe-args": Array [
                  "error",
                ],
                "no-dupe-class-members": Array [
                  "off",
                ],
                "no-dupe-else-if": Array [
                  "error",
                ],
                "no-dupe-keys": Array [
                  "error",
                ],
                "no-duplicate-case": Array [
                  "error",
                ],
                "no-duplicate-imports": Array [
                  "off",
                ],
                "no-else-return": Array [
                  "error",
                  Object {
                    "allowElseIf": false,
                  },
                ],
                "no-empty": Array [
                  "error",
                ],
                "no-empty-character-class": Array [
                  "error",
                ],
                "no-empty-function": Array [
                  "off",
                  Object {
                    "allow": Array [
                      "arrowFunctions",
                      "functions",
                      "methods",
                    ],
                  },
                ],
                "no-empty-pattern": Array [
                  "error",
                ],
                "no-eq-null": Array [
                  "off",
                ],
                "no-eval": Array [
                  "error",
                ],
                "no-ex-assign": Array [
                  "error",
                ],
                "no-extend-native": Array [
                  "error",
                ],
                "no-extra-bind": Array [
                  "error",
                ],
                "no-extra-boolean-cast": Array [
                  "error",
                ],
                "no-extra-label": Array [
                  "error",
                ],
                "no-extra-parens": Array [
                  "off",
                  "all",
                  Object {
                    "conditionalAssign": true,
                    "enforceForArrowConditionals": false,
                    "ignoreJSX": "all",
                    "nestedBinaryExpressions": false,
                    "returnAssign": false,
                  },
                ],
                "no-extra-semi": Array [
                  "off",
                ],
                "no-fallthrough": Array [
                  "error",
                ],
                "no-floating-decimal": Array [
                  "off",
                ],
                "no-func-assign": Array [
                  "error",
                ],
                "no-global-assign": Array [
                  "error",
                  Object {
                    "exceptions": Array [],
                  },
                ],
                "no-implicit-coercion": Array [
                  "off",
                  Object {
                    "allow": Array [],
                    "boolean": false,
                    "number": true,
                    "string": true,
                  },
                ],
                "no-implicit-globals": Array [
                  "off",
                ],
                "no-implied-eval": Array [
                  "error",
                ],
                "no-import-assign": Array [
                  "error",
                ],
                "no-inline-comments": Array [
                  "off",
                ],
                "no-inner-declarations": Array [
                  "error",
                ],
                "no-invalid-regexp": Array [
                  "error",
                ],
                "no-invalid-this": Array [
                  "off",
                ],
                "no-irregular-whitespace": Array [
                  "error",
                ],
                "no-iterator": Array [
                  "error",
                ],
                "no-label-var": Array [
                  "error",
                ],
                "no-labels": Array [
                  "error",
                  Object {
                    "allowLoop": false,
                    "allowSwitch": false,
                  },
                ],
                "no-lone-blocks": Array [
                  "error",
                ],
                "no-lonely-if": Array [
                  "error",
                ],
                "no-loop-func": Array [
                  "off",
                ],
                "no-loss-of-precision": Array [
                  "off",
                ],
                "no-magic-numbers": Array [
                  "off",
                  Object {
                    "detectObjects": false,
                    "enforceConst": true,
                    "ignore": Array [],
                    "ignoreArrayIndexes": true,
                  },
                ],
                "no-misleading-character-class": Array [
                  "error",
                ],
                "no-mixed-operators": Array [
                  0,
                  Object {
                    "allowSamePrecedence": false,
                    "groups": Array [
                      Array [
                        "%",
                        "**",
                      ],
                      Array [
                        "%",
                        "+",
                      ],
                      Array [
                        "%",
                        "-",
                      ],
                      Array [
                        "%",
                        "*",
                      ],
                      Array [
                        "%",
                        "/",
                      ],
                      Array [
                        "/",
                        "*",
                      ],
                      Array [
                        "&",
                        "|",
                        "<<",
                        ">>",
                        ">>>",
                      ],
                      Array [
                        "==",
                        "!=",
                        "===",
                        "!==",
                      ],
                      Array [
                        "&&",
                        "||",
                      ],
                    ],
                  },
                ],
                "no-mixed-requires": Array [
                  "off",
                  false,
                ],
                "no-mixed-spaces-and-tabs": Array [
                  "off",
                ],
                "no-multi-assign": Array [
                  "error",
                ],
                "no-multi-spaces": Array [
                  "off",
                  Object {
                    "ignoreEOLComments": false,
                  },
                ],
                "no-multi-str": Array [
                  "error",
                ],
                "no-multiple-empty-lines": Array [
                  "off",
                  Object {
                    "max": 1,
                    "maxBOF": 0,
                    "maxEOF": 0,
                  },
                ],
                "no-native-reassign": Array [
                  "off",
                ],
                "no-negated-condition": Array [
                  "off",
                ],
                "no-negated-in-lhs": Array [
                  "off",
                ],
                "no-nested-ternary": Array [
                  "error",
                ],
                "no-new": Array [
                  "error",
                ],
                "no-new-func": Array [
                  "error",
                ],
                "no-new-object": Array [
                  "error",
                ],
                "no-new-require": Array [
                  "error",
                ],
                "no-new-symbol": Array [
                  "error",
                ],
                "no-new-wrappers": Array [
                  "error",
                ],
                "no-nonoctal-decimal-escape": Array [
                  "error",
                ],
                "no-obj-calls": Array [
                  "error",
                ],
                "no-octal": Array [
                  "error",
                ],
                "no-octal-escape": Array [
                  "error",
                ],
                "no-param-reassign": Array [
                  2,
                  Object {
                    "props": false,
                  },
                ],
                "no-path-concat": Array [
                  "error",
                ],
                "no-plusplus": Array [
                  "error",
                ],
                "no-process-env": Array [
                  "off",
                ],
                "no-process-exit": Array [
                  "off",
                ],
                "no-promise-executor-return": Array [
                  "error",
                ],
                "no-proto": Array [
                  "error",
                ],
                "no-prototype-builtins": Array [
                  "error",
                ],
                "no-redeclare": Array [
                  "off",
                ],
                "no-regex-spaces": Array [
                  "error",
                ],
                "no-reserved-keys": Array [
                  "off",
                ],
                "no-restricted-exports": Array [
                  "error",
                  Object {
                    "restrictedNamedExports": Array [
                      "default",
                      "then",
                    ],
                  },
                ],
                "no-restricted-globals": Array [
                  "error",
                  Object {
                    "message": "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
                    "name": "isFinite",
                  },
                  Object {
                    "message": "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
                    "name": "isNaN",
                  },
                  "addEventListener",
                  "blur",
                  "close",
                  "closed",
                  "confirm",
                  "defaultStatus",
                  "defaultstatus",
                  "event",
                  "external",
                  "find",
                  "focus",
                  "frameElement",
                  "frames",
                  "history",
                  "innerHeight",
                  "innerWidth",
                  "length",
                  "location",
                  "locationbar",
                  "menubar",
                  "moveBy",
                  "moveTo",
                  "name",
                  "onblur",
                  "onerror",
                  "onfocus",
                  "onload",
                  "onresize",
                  "onunload",
                  "open",
                  "opener",
                  "opera",
                  "outerHeight",
                  "outerWidth",
                  "pageXOffset",
                  "pageYOffset",
                  "parent",
                  "print",
                  "removeEventListener",
                  "resizeBy",
                  "resizeTo",
                  "screen",
                  "screenLeft",
                  "screenTop",
                  "screenX",
                  "screenY",
                  "scroll",
                  "scrollbars",
                  "scrollBy",
                  "scrollTo",
                  "scrollX",
                  "scrollY",
                  "self",
                  "status",
                  "statusbar",
                  "stop",
                  "toolbar",
                  "top",
                ],
                "no-restricted-imports": Array [
                  "off",
                  Object {
                    "paths": Array [],
                    "patterns": Array [],
                  },
                ],
                "no-restricted-modules": Array [
                  "off",
                ],
                "no-restricted-properties": Array [
                  "error",
                  Object {
                    "message": "arguments.callee is deprecated",
                    "object": "arguments",
                    "property": "callee",
                  },
                  Object {
                    "message": "Please use Number.isFinite instead",
                    "object": "global",
                    "property": "isFinite",
                  },
                  Object {
                    "message": "Please use Number.isFinite instead",
                    "object": "self",
                    "property": "isFinite",
                  },
                  Object {
                    "message": "Please use Number.isFinite instead",
                    "object": "window",
                    "property": "isFinite",
                  },
                  Object {
                    "message": "Please use Number.isNaN instead",
                    "object": "global",
                    "property": "isNaN",
                  },
                  Object {
                    "message": "Please use Number.isNaN instead",
                    "object": "self",
                    "property": "isNaN",
                  },
                  Object {
                    "message": "Please use Number.isNaN instead",
                    "object": "window",
                    "property": "isNaN",
                  },
                  Object {
                    "message": "Please use Object.defineProperty instead.",
                    "property": "__defineGetter__",
                  },
                  Object {
                    "message": "Please use Object.defineProperty instead.",
                    "property": "__defineSetter__",
                  },
                  Object {
                    "message": "Use the exponentiation operator (**) instead.",
                    "object": "Math",
                    "property": "pow",
                  },
                ],
                "no-restricted-syntax": Array [
                  "error",
                  Object {
                    "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
                    "selector": "ForInStatement",
                  },
                  Object {
                    "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
                    "selector": "ForOfStatement",
                  },
                  Object {
                    "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
                    "selector": "LabeledStatement",
                  },
                  Object {
                    "message": "\`with\` is disallowed in strict mode because it makes code impossible to predict and optimize.",
                    "selector": "WithStatement",
                  },
                ],
                "no-return-assign": Array [
                  "error",
                  "always",
                ],
                "no-return-await": Array [
                  "error",
                ],
                "no-script-url": Array [
                  "error",
                ],
                "no-self-assign": Array [
                  "error",
                  Object {
                    "props": true,
                  },
                ],
                "no-self-compare": Array [
                  "error",
                ],
                "no-sequences": Array [
                  "error",
                ],
                "no-setter-return": Array [
                  "error",
                ],
                "no-shadow": Array [
                  "off",
                ],
                "no-shadow-restricted-names": Array [
                  "error",
                ],
                "no-space-before-semi": Array [
                  "off",
                ],
                "no-spaced-func": Array [
                  "off",
                ],
                "no-sparse-arrays": Array [
                  "error",
                ],
                "no-sync": Array [
                  "off",
                ],
                "no-tabs": Array [
                  0,
                ],
                "no-template-curly-in-string": Array [
                  "error",
                ],
                "no-ternary": Array [
                  "off",
                ],
                "no-this-before-super": Array [
                  "error",
                ],
                "no-throw-literal": Array [
                  "error",
                ],
                "no-trailing-spaces": Array [
                  "off",
                  Object {
                    "ignoreComments": false,
                    "skipBlankLines": false,
                  },
                ],
                "no-undef": Array [
                  "error",
                ],
                "no-undef-init": Array [
                  "error",
                ],
                "no-undefined": Array [
                  "off",
                ],
                "no-underscore-dangle": Array [
                  2,
                  Object {
                    "allow": Array [
                      "__REDUX_DEVTOOLS_EXTENSION__",
                      "__webpack_hash__",
                    ],
                    "allowAfterSuper": false,
                    "allowAfterThis": false,
                    "allowAfterThisConstructor": false,
                    "allowFunctionParams": true,
                    "enforceInMethodNames": false,
                  },
                ],
                "no-unexpected-multiline": Array [
                  0,
                ],
                "no-unmodified-loop-condition": Array [
                  "off",
                ],
                "no-unneeded-ternary": Array [
                  "error",
                  Object {
                    "defaultAssignment": false,
                  },
                ],
                "no-unreachable": Array [
                  "error",
                ],
                "no-unreachable-loop": Array [
                  "error",
                  Object {
                    "ignore": Array [],
                  },
                ],
                "no-unsafe-finally": Array [
                  "error",
                ],
                "no-unsafe-negation": Array [
                  "error",
                ],
                "no-unsafe-optional-chaining": Array [
                  "error",
                  Object {
                    "disallowArithmeticOperators": true,
                  },
                ],
                "no-unused-expressions": Array [
                  "off",
                  Object {
                    "allowShortCircuit": false,
                    "allowTaggedTemplates": false,
                    "allowTernary": false,
                    "enforceForJSX": false,
                  },
                ],
                "no-unused-labels": Array [
                  "error",
                ],
                "no-unused-private-class-members": Array [
                  "off",
                ],
                "no-unused-vars": Array [
                  "off",
                  Object {
                    "args": "after-used",
                    "ignoreRestSiblings": true,
                    "vars": "all",
                  },
                ],
                "no-use-before-define": Array [
                  "off",
                  Object {
                    "classes": true,
                    "functions": true,
                    "variables": true,
                  },
                ],
                "no-useless-backreference": Array [
                  "error",
                ],
                "no-useless-call": Array [
                  "off",
                ],
                "no-useless-catch": Array [
                  "error",
                ],
                "no-useless-computed-key": Array [
                  "error",
                ],
                "no-useless-concat": Array [
                  "error",
                ],
                "no-useless-constructor": Array [
                  "off",
                ],
                "no-useless-escape": Array [
                  "error",
                ],
                "no-useless-rename": Array [
                  "error",
                  Object {
                    "ignoreDestructuring": false,
                    "ignoreExport": false,
                    "ignoreImport": false,
                  },
                ],
                "no-useless-return": Array [
                  "error",
                ],
                "no-var": Array [
                  "error",
                ],
                "no-void": Array [
                  "error",
                ],
                "no-warning-comments": Array [
                  1,
                  Object {
                    "location": "start",
                    "terms": Array [
                      "todo",
                      "fixme",
                      "xxx",
                    ],
                  },
                ],
                "no-whitespace-before-property": Array [
                  "off",
                ],
                "no-with": Array [
                  "error",
                ],
                "no-wrap-func": Array [
                  "off",
                ],
                "nonblock-statement-body-position": Array [
                  "off",
                  "beside",
                  Object {
                    "overrides": Object {},
                  },
                ],
                "object-curly-newline": Array [
                  "off",
                  Object {
                    "ExportDeclaration": Object {
                      "consistent": true,
                      "minProperties": 4,
                      "multiline": true,
                    },
                    "ImportDeclaration": Object {
                      "consistent": true,
                      "minProperties": 4,
                      "multiline": true,
                    },
                    "ObjectExpression": Object {
                      "consistent": true,
                      "minProperties": 4,
                      "multiline": true,
                    },
                    "ObjectPattern": Object {
                      "consistent": true,
                      "minProperties": 4,
                      "multiline": true,
                    },
                  },
                ],
                "object-curly-spacing": Array [
                  "off",
                  "always",
                ],
                "object-property-newline": Array [
                  "off",
                  Object {
                    "allowAllPropertiesOnSameLine": true,
                    "allowMultiplePropertiesPerLine": false,
                  },
                ],
                "object-shorthand": Array [
                  "error",
                  "always",
                  Object {
                    "avoidQuotes": true,
                    "ignoreConstructors": false,
                  },
                ],
                "one-var": Array [
                  "error",
                  "never",
                ],
                "one-var-declaration-per-line": Array [
                  "off",
                  "always",
                ],
                "operator-assignment": Array [
                  "error",
                  "always",
                ],
                "operator-linebreak": Array [
                  "off",
                  "before",
                  Object {
                    "overrides": Object {
                      "=": "none",
                    },
                  },
                ],
                "padded-blocks": Array [
                  "off",
                  Object {
                    "blocks": "never",
                    "classes": "never",
                    "switches": "never",
                  },
                  Object {
                    "allowSingleLineBlocks": true,
                  },
                ],
                "padding-line-between-statements": Array [
                  "off",
                ],
                "prefer-arrow-callback": Array [
                  "error",
                  Object {
                    "allowNamedFunctions": false,
                    "allowUnboundThis": true,
                  },
                ],
                "prefer-const": Array [
                  "error",
                  Object {
                    "destructuring": "any",
                    "ignoreReadBeforeAssign": true,
                  },
                ],
                "prefer-destructuring": Array [
                  "error",
                  Object {
                    "AssignmentExpression": Object {
                      "array": true,
                      "object": false,
                    },
                    "VariableDeclarator": Object {
                      "array": false,
                      "object": true,
                    },
                  },
                  Object {
                    "enforceForRenamedProperties": false,
                  },
                ],
                "prefer-exponentiation-operator": Array [
                  "error",
                ],
                "prefer-named-capture-group": Array [
                  "off",
                ],
                "prefer-numeric-literals": Array [
                  "error",
                ],
                "prefer-object-spread": Array [
                  "error",
                ],
                "prefer-promise-reject-errors": Array [
                  "error",
                  Object {
                    "allowEmptyReject": true,
                  },
                ],
                "prefer-reflect": Array [
                  "off",
                ],
                "prefer-regex-literals": Array [
                  "error",
                  Object {
                    "disallowRedundantWrapping": true,
                  },
                ],
                "prefer-rest-params": Array [
                  "error",
                ],
                "prefer-spread": Array [
                  "error",
                ],
                "prefer-template": Array [
                  "error",
                ],
                "quote-props": Array [
                  "off",
                  "as-needed",
                  Object {
                    "keywords": false,
                    "numbers": false,
                    "unnecessary": true,
                  },
                ],
                "quotes": Array [
                  0,
                  "single",
                  Object {
                    "avoidEscape": true,
                  },
                ],
                "radix": Array [
                  "error",
                ],
                "react-hooks/exhaustive-deps": Array [
                  "error",
                ],
                "react-hooks/rules-of-hooks": Array [
                  "error",
                ],
                "react/boolean-prop-naming": Array [
                  "off",
                  Object {
                    "message": "",
                    "propTypeNames": Array [
                      "bool",
                      "mutuallyExclusiveTrueProps",
                    ],
                    "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
                  },
                ],
                "react/button-has-type": Array [
                  "error",
                  Object {
                    "button": true,
                    "reset": false,
                    "submit": true,
                  },
                ],
                "react/default-props-match-prop-types": Array [
                  "error",
                  Object {
                    "allowRequiredDefaults": false,
                  },
                ],
                "react/destructuring-assignment": Array [
                  "error",
                  "always",
                ],
                "react/display-name": Array [
                  "off",
                  Object {
                    "ignoreTranspilerName": false,
                  },
                ],
                "react/forbid-component-props": Array [
                  "off",
                  Object {
                    "forbid": Array [],
                  },
                ],
                "react/forbid-dom-props": Array [
                  "off",
                  Object {
                    "forbid": Array [],
                  },
                ],
                "react/forbid-elements": Array [
                  "off",
                  Object {
                    "forbid": Array [],
                  },
                ],
                "react/forbid-foreign-prop-types": Array [
                  "warn",
                  Object {
                    "allowInPropTypes": true,
                  },
                ],
                "react/forbid-prop-types": Array [
                  2,
                  Object {
                    "forbid": Array [
                      "any",
                    ],
                  },
                ],
                "react/function-component-definition": Array [
                  0,
                  Object {
                    "namedComponents": "function-expression",
                    "unnamedComponents": "function-expression",
                  },
                ],
                "react/jsx-boolean-value": Array [
                  "error",
                  "never",
                  Object {
                    "always": Array [],
                  },
                ],
                "react/jsx-child-element-spacing": Array [
                  "off",
                ],
                "react/jsx-closing-bracket-location": Array [
                  "off",
                  "line-aligned",
                ],
                "react/jsx-closing-tag-location": Array [
                  "off",
                ],
                "react/jsx-curly-brace-presence": Array [
                  "error",
                  Object {
                    "children": "never",
                    "props": "never",
                  },
                ],
                "react/jsx-curly-newline": Array [
                  "off",
                  Object {
                    "multiline": "consistent",
                    "singleline": "consistent",
                  },
                ],
                "react/jsx-curly-spacing": Array [
                  "off",
                  "never",
                  Object {
                    "allowMultiline": true,
                  },
                ],
                "react/jsx-equals-spacing": Array [
                  "off",
                  "never",
                ],
                "react/jsx-filename-extension": Array [
                  2,
                  Object {
                    "extensions": Array [
                      ".js",
                      ".tsx",
                    ],
                  },
                ],
                "react/jsx-first-prop-new-line": Array [
                  "off",
                  "multiline-multiprop",
                ],
                "react/jsx-fragments": Array [
                  "error",
                  "syntax",
                ],
                "react/jsx-handler-names": Array [
                  "off",
                  Object {
                    "eventHandlerPrefix": "handle",
                    "eventHandlerPropPrefix": "on",
                  },
                ],
                "react/jsx-indent": Array [
                  "off",
                  2,
                ],
                "react/jsx-indent-props": Array [
                  "off",
                  2,
                ],
                "react/jsx-key": Array [
                  "off",
                ],
                "react/jsx-max-depth": Array [
                  "off",
                ],
                "react/jsx-max-props-per-line": Array [
                  "off",
                  Object {
                    "maximum": 1,
                    "when": "multiline",
                  },
                ],
                "react/jsx-newline": Array [
                  "off",
                ],
                "react/jsx-no-bind": Array [
                  0,
                  Object {
                    "allowArrowFunctions": true,
                    "allowBind": false,
                    "allowFunctions": false,
                    "ignoreDOMComponents": true,
                    "ignoreRefs": true,
                  },
                ],
                "react/jsx-no-comment-textnodes": Array [
                  "error",
                ],
                "react/jsx-no-constructed-context-values": Array [
                  "error",
                ],
                "react/jsx-no-duplicate-props": Array [
                  "error",
                  Object {
                    "ignoreCase": true,
                  },
                ],
                "react/jsx-no-literals": Array [
                  "off",
                  Object {
                    "noStrings": true,
                  },
                ],
                "react/jsx-no-script-url": Array [
                  "error",
                  Array [
                    Object {
                      "name": "Link",
                      "props": Array [
                        "to",
                      ],
                    },
                  ],
                ],
                "react/jsx-no-target-blank": Array [
                  "error",
                  Object {
                    "enforceDynamicLinks": "always",
                    "forms": false,
                    "links": true,
                  },
                ],
                "react/jsx-no-undef": Array [
                  "error",
                ],
                "react/jsx-no-useless-fragment": Array [
                  "error",
                ],
                "react/jsx-one-expression-per-line": Array [
                  "off",
                  Object {
                    "allow": "single-child",
                  },
                ],
                "react/jsx-pascal-case": Array [
                  "error",
                  Object {
                    "allowAllCaps": true,
                    "ignore": Array [],
                  },
                ],
                "react/jsx-props-no-multi-spaces": Array [
                  "off",
                ],
                "react/jsx-props-no-spreading": Array [
                  "error",
                  Object {
                    "custom": "enforce",
                    "exceptions": Array [],
                    "explicitSpread": "ignore",
                    "html": "enforce",
                  },
                ],
                "react/jsx-sort-default-props": Array [
                  "off",
                  Object {
                    "ignoreCase": true,
                  },
                ],
                "react/jsx-sort-prop-types": Array [
                  "off",
                ],
                "react/jsx-sort-props": Array [
                  "off",
                  Object {
                    "callbacksLast": false,
                    "ignoreCase": true,
                    "noSortAlphabetically": false,
                    "reservedFirst": true,
                    "shorthandFirst": false,
                    "shorthandLast": false,
                  },
                ],
                "react/jsx-space-before-closing": Array [
                  "off",
                  "always",
                ],
                "react/jsx-tag-spacing": Array [
                  "off",
                  Object {
                    "afterOpening": "never",
                    "beforeClosing": "never",
                    "beforeSelfClosing": "always",
                    "closingSlash": "never",
                  },
                ],
                "react/jsx-uses-react": Array [
                  "error",
                ],
                "react/jsx-uses-vars": Array [
                  "error",
                ],
                "react/jsx-wrap-multilines": Array [
                  "off",
                  Object {
                    "arrow": "parens-new-line",
                    "assignment": "parens-new-line",
                    "condition": "parens-new-line",
                    "declaration": "parens-new-line",
                    "logical": "parens-new-line",
                    "prop": "parens-new-line",
                    "return": "parens-new-line",
                  },
                ],
                "react/no-access-state-in-setstate": Array [
                  "error",
                ],
                "react/no-adjacent-inline-elements": Array [
                  "off",
                ],
                "react/no-array-index-key": Array [
                  "error",
                ],
                "react/no-arrow-function-lifecycle": Array [
                  "error",
                ],
                "react/no-children-prop": Array [
                  "error",
                ],
                "react/no-danger": Array [
                  "warn",
                ],
                "react/no-danger-with-children": Array [
                  "error",
                ],
                "react/no-deprecated": Array [
                  "error",
                ],
                "react/no-did-mount-set-state": Array [
                  "off",
                ],
                "react/no-did-update-set-state": Array [
                  "error",
                ],
                "react/no-direct-mutation-state": Array [
                  "off",
                ],
                "react/no-find-dom-node": Array [
                  "error",
                ],
                "react/no-invalid-html-attribute": Array [
                  "error",
                ],
                "react/no-is-mounted": Array [
                  "error",
                ],
                "react/no-multi-comp": Array [
                  "off",
                ],
                "react/no-namespace": Array [
                  "error",
                ],
                "react/no-redundant-should-component-update": Array [
                  "error",
                ],
                "react/no-render-return-value": Array [
                  "error",
                ],
                "react/no-set-state": Array [
                  "off",
                ],
                "react/no-string-refs": Array [
                  "error",
                ],
                "react/no-this-in-sfc": Array [
                  "error",
                ],
                "react/no-typos": Array [
                  "error",
                ],
                "react/no-unescaped-entities": Array [
                  "error",
                ],
                "react/no-unknown-property": Array [
                  "error",
                ],
                "react/no-unsafe": Array [
                  "off",
                ],
                "react/no-unstable-nested-components": Array [
                  "error",
                ],
                "react/no-unused-class-component-methods": Array [
                  "error",
                ],
                "react/no-unused-prop-types": Array [
                  "error",
                  Object {
                    "customValidators": Array [],
                    "skipShapeProps": true,
                  },
                ],
                "react/no-unused-state": Array [
                  "error",
                ],
                "react/no-will-update-set-state": Array [
                  "error",
                ],
                "react/prefer-es6-class": Array [
                  "error",
                  "always",
                ],
                "react/prefer-exact-props": Array [
                  0,
                ],
                "react/prefer-read-only-props": Array [
                  "off",
                ],
                "react/prefer-stateless-function": Array [
                  "error",
                  Object {
                    "ignorePureComponents": true,
                  },
                ],
                "react/prop-types": Array [
                  "error",
                  Object {
                    "customValidators": Array [],
                    "ignore": Array [],
                    "skipUndeclared": false,
                  },
                ],
                "react/react-in-jsx-scope": Array [
                  "error",
                ],
                "react/require-default-props": Array [
                  "error",
                  Object {
                    "forbidDefaultForRequired": true,
                  },
                ],
                "react/require-optimization": Array [
                  "off",
                  Object {
                    "allowDecorators": Array [],
                  },
                ],
                "react/require-render-return": Array [
                  "error",
                ],
                "react/self-closing-comp": Array [
                  "error",
                ],
                "react/sort-comp": Array [
                  "error",
                  Object {
                    "groups": Object {
                      "lifecycle": Array [
                        "displayName",
                        "propTypes",
                        "contextTypes",
                        "childContextTypes",
                        "mixins",
                        "statics",
                        "defaultProps",
                        "constructor",
                        "getDefaultProps",
                        "getInitialState",
                        "state",
                        "getChildContext",
                        "getDerivedStateFromProps",
                        "componentWillMount",
                        "UNSAFE_componentWillMount",
                        "componentDidMount",
                        "componentWillReceiveProps",
                        "UNSAFE_componentWillReceiveProps",
                        "shouldComponentUpdate",
                        "componentWillUpdate",
                        "UNSAFE_componentWillUpdate",
                        "getSnapshotBeforeUpdate",
                        "componentDidUpdate",
                        "componentDidCatch",
                        "componentWillUnmount",
                      ],
                      "rendering": Array [
                        "/^render.+$/",
                        "render",
                      ],
                    },
                    "order": Array [
                      "static-variables",
                      "static-methods",
                      "instance-variables",
                      "lifecycle",
                      "/^handle.+$/",
                      "/^on.+$/",
                      "getters",
                      "setters",
                      "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                      "instance-methods",
                      "everything-else",
                      "rendering",
                    ],
                  },
                ],
                "react/sort-prop-types": Array [
                  "off",
                  Object {
                    "callbacksLast": false,
                    "ignoreCase": true,
                    "requiredFirst": false,
                    "sortShapeProp": true,
                  },
                ],
                "react/state-in-constructor": Array [
                  "error",
                  "always",
                ],
                "react/static-property-placement": Array [
                  "error",
                  "property assignment",
                ],
                "react/style-prop-object": Array [
                  "error",
                ],
                "react/void-dom-elements-no-children": Array [
                  "error",
                ],
                "require-atomic-updates": Array [
                  "off",
                ],
                "require-await": Array [
                  "off",
                ],
                "require-jsdoc": Array [
                  "off",
                ],
                "require-unicode-regexp": Array [
                  "off",
                ],
                "require-yield": Array [
                  "error",
                ],
                "rest-spread-spacing": Array [
                  "off",
                  "never",
                ],
                "semi": Array [
                  "off",
                  "always",
                ],
                "semi-spacing": Array [
                  "off",
                  Object {
                    "after": true,
                    "before": false,
                  },
                ],
                "semi-style": Array [
                  "off",
                  "last",
                ],
                "sort-imports": Array [
                  "off",
                  Object {
                    "ignoreCase": false,
                    "ignoreDeclarationSort": false,
                    "ignoreMemberSort": false,
                    "memberSyntaxSortOrder": Array [
                      "none",
                      "all",
                      "multiple",
                      "single",
                    ],
                  },
                ],
                "sort-keys": Array [
                  "off",
                  "asc",
                  Object {
                    "caseSensitive": false,
                    "natural": true,
                  },
                ],
                "sort-vars": Array [
                  "off",
                ],
                "space-after-function-name": Array [
                  "off",
                ],
                "space-after-keywords": Array [
                  "off",
                ],
                "space-before-blocks": Array [
                  "off",
                ],
                "space-before-function-paren": Array [
                  "off",
                  Object {
                    "anonymous": "always",
                    "asyncArrow": "always",
                    "named": "never",
                  },
                ],
                "space-before-function-parentheses": Array [
                  "off",
                ],
                "space-before-keywords": Array [
                  "off",
                ],
                "space-in-brackets": Array [
                  "off",
                ],
                "space-in-parens": Array [
                  "off",
                  "never",
                ],
                "space-infix-ops": Array [
                  "off",
                ],
                "space-return-throw-case": Array [
                  "off",
                ],
                "space-unary-ops": Array [
                  "off",
                  Object {
                    "nonwords": false,
                    "overrides": Object {},
                    "words": true,
                  },
                ],
                "space-unary-word-ops": Array [
                  "off",
                ],
                "spaced-comment": Array [
                  "error",
                  "always",
                  Object {
                    "block": Object {
                      "balanced": true,
                      "exceptions": Array [
                        "-",
                        "+",
                      ],
                      "markers": Array [
                        "=",
                        "!",
                        ":",
                        "::",
                      ],
                    },
                    "line": Object {
                      "exceptions": Array [
                        "-",
                        "+",
                      ],
                      "markers": Array [
                        "=",
                        "!",
                        "/",
                      ],
                    },
                  },
                ],
                "standard/array-bracket-even-spacing": Array [
                  "off",
                ],
                "standard/computed-property-even-spacing": Array [
                  "off",
                ],
                "standard/object-curly-even-spacing": Array [
                  "off",
                ],
                "strict": Array [
                  "error",
                  "never",
                ],
                "switch-colon-spacing": Array [
                  "off",
                  Object {
                    "after": true,
                    "before": false,
                  },
                ],
                "symbol-description": Array [
                  "error",
                ],
                "template-curly-spacing": Array [
                  "off",
                ],
                "template-tag-spacing": Array [
                  "off",
                  "never",
                ],
                "unicode-bom": Array [
                  "off",
                  "never",
                ],
                "unicorn/empty-brace-spaces": Array [
                  "off",
                ],
                "unicorn/no-nested-ternary": Array [
                  "off",
                ],
                "unicorn/number-literal-case": Array [
                  "off",
                ],
                "use-isnan": Array [
                  "error",
                ],
                "valid-jsdoc": Array [
                  "off",
                ],
                "valid-typeof": Array [
                  "error",
                  Object {
                    "requireStringLiterals": true,
                  },
                ],
                "vars-on-top": Array [
                  "error",
                ],
                "vue/array-bracket-newline": Array [
                  "off",
                ],
                "vue/array-bracket-spacing": Array [
                  "off",
                ],
                "vue/arrow-spacing": Array [
                  "off",
                ],
                "vue/block-spacing": Array [
                  "off",
                ],
                "vue/block-tag-newline": Array [
                  "off",
                ],
                "vue/brace-style": Array [
                  "off",
                ],
                "vue/comma-dangle": Array [
                  "off",
                ],
                "vue/comma-spacing": Array [
                  "off",
                ],
                "vue/comma-style": Array [
                  "off",
                ],
                "vue/dot-location": Array [
                  "off",
                ],
                "vue/func-call-spacing": Array [
                  "off",
                ],
                "vue/html-closing-bracket-newline": Array [
                  "off",
                ],
                "vue/html-closing-bracket-spacing": Array [
                  "off",
                ],
                "vue/html-end-tags": Array [
                  "off",
                ],
                "vue/html-indent": Array [
                  "off",
                ],
                "vue/html-quotes": Array [
                  "off",
                ],
                "vue/html-self-closing": Array [
                  0,
                ],
                "vue/key-spacing": Array [
                  "off",
                ],
                "vue/keyword-spacing": Array [
                  "off",
                ],
                "vue/max-attributes-per-line": Array [
                  "off",
                ],
                "vue/max-len": Array [
                  0,
                ],
                "vue/multiline-html-element-content-newline": Array [
                  "off",
                ],
                "vue/mustache-interpolation-spacing": Array [
                  "off",
                ],
                "vue/no-extra-parens": Array [
                  "off",
                ],
                "vue/no-multi-spaces": Array [
                  "off",
                ],
                "vue/no-spaces-around-equal-signs-in-attribute": Array [
                  "off",
                ],
                "vue/object-curly-newline": Array [
                  "off",
                ],
                "vue/object-curly-spacing": Array [
                  "off",
                ],
                "vue/object-property-newline": Array [
                  "off",
                ],
                "vue/operator-linebreak": Array [
                  "off",
                ],
                "vue/script-indent": Array [
                  "off",
                ],
                "vue/singleline-html-element-content-newline": Array [
                  "off",
                ],
                "vue/space-in-parens": Array [
                  "off",
                ],
                "vue/space-infix-ops": Array [
                  "off",
                ],
                "vue/space-unary-ops": Array [
                  "off",
                ],
                "vue/template-curly-spacing": Array [
                  "off",
                ],
                "wrap-iife": Array [
                  "off",
                  "outside",
                  Object {
                    "functionPrototypeMethods": false,
                  },
                ],
                "wrap-regex": Array [
                  "off",
                ],
                "yield-star-spacing": Array [
                  "off",
                  "after",
                ],
                "yoda": Array [
                  "error",
                ],
              },
              "settings": Object {
                "import/core-modules": Array [],
                "import/extensions": Array [
                  ".js",
                  ".mjs",
                  ".ts",
                  ".tsx",
                  ".d.ts",
                ],
                "import/external-module-folders": Array [
                  "node_modules",
                  "node_modules/@types",
                ],
                "import/ignore": Array [
                  "node_modules",
                  "\\\\.(coffee|scss|css|less|hbs|svg|json)$",
                ],
                "import/parsers": Object {
                  "@typescript-eslint/parser": Array [
                    ".ts",
                    ".tsx",
                    ".d.ts",
                  ],
                },
                "import/resolver": Object {
                  "node": Object {
                    "extensions": Array [
                      ".js",
                      ".json",
                      ".ts",
                      ".tsx",
                      ".d.ts",
                    ],
                  },
                },
                "propWrapperFunctions": Array [
                  "forbidExtraProps",
                  "exact",
                  "Object.freeze",
                ],
                "react": Object {
                  "pragma": "React",
                  "version": "detect",
                },
              },
            }
        `);
    });
});