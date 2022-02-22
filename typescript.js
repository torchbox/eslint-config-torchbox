/**
 * TypeScript configuration, expanding upon the base.
 * This configuration is based on eslint-config-airbnb-typescript.
 * See https://github.com/iamturns/eslint-config-airbnb-typescript.
 *
 * It doesn’t use `airbnb-typescript` directly because:
 * - It’s not an official Airbnb project
 * - Some of its rules (for example naming conventions) require type checking.
 *   - This is slow.
 *   - And it means we would have to type check all files we’d want to lint.
 *   - See https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#recommended-configs for further details.
 * - A lot of its rules are cosmetic only, which we disable anyway.
 */

const best = require('eslint-config-airbnb-base/rules/best-practices');
const errors = require('eslint-config-airbnb-base/rules/errors');
const es6 = require('eslint-config-airbnb-base/rules/es6');
// const imports = require('eslint-config-airbnb-base/rules/imports');
const style = require('eslint-config-airbnb-base/rules/style');
const vars = require('eslint-config-airbnb-base/rules/variables');

const base = require('./config');

/**
 * Rules from airbnb-typescript, with problematic rules commented out, for ease of maintenance.
 * See https://github.com/iamturns/eslint-config-airbnb-typescript/blob/d30b7d2a41f3f2cf899cad3ed69e3b7eacbc7234/lib/shared.js.
 * When changing rules / upgrading the configuration make sure to:
 * - Add a comment specifying why the rule is commented out.
 * - Check all enabled rules do **not** rely on type information (https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#extension-rules).
 */
const airbnbTypeScript = {
    // TBX note: not needed.
    // Replace Airbnb 'brace-style' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    // 'brace-style': 'off',
    // '@typescript-eslint/brace-style': style.rules['brace-style'],

    // TBX note: would be nice, but relies on type checking.
    // Replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    // 'camelcase': 'off',
    // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
    // '@typescript-eslint/naming-convention': [],

    // TBX note: not needed.
    // Replace Airbnb 'comma-dangle' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    // The TypeScript version also adds 3 new options, all of which should be set to the same value as the base config
    // 'comma-dangle': 'off',
    // '@typescript-eslint/comma-dangle': [],

    // TBX note: not needed.
    // Replace Airbnb 'comma-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    // 'comma-spacing': 'off',
    // '@typescript-eslint/comma-spacing': style.rules['comma-spacing'],

    // Replace Airbnb 'default-param-last' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/default-param-last.md
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': best.rules['default-param-last'],

    // TBX note: would be nice, but relies on type checking.
    // Replace Airbnb 'dot-notation' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    // 'dot-notation': 'off',
    // '@typescript-eslint/dot-notation': best.rules['dot-notation'],

    // TBX note: not needed.
    // Replace Airbnb 'func-call-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    // 'func-call-spacing': 'off',
    // '@typescript-eslint/func-call-spacing': style.rules['func-call-spacing'],

    // TBX note: not needed.
    // Replace Airbnb 'indent' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    // 'indent': 'off',
    // '@typescript-eslint/indent': style.rules.indent,

    // TBX note: not needed.
    // Replace Airbnb 'keyword-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    // 'keyword-spacing': 'off',
    // '@typescript-eslint/keyword-spacing': style.rules['keyword-spacing'],

    // TBX note: not needed.
    // Replace Airbnb 'lines-between-class-members' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    // 'lines-between-class-members': 'off',
    // '@typescript-eslint/lines-between-class-members':
    //     style.rules['lines-between-class-members'],

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor':
        style.rules['no-array-constructor'],

    // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members':
        es6.rules['no-dupe-class-members'],

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': best.rules['no-empty-function'],

    // TBX note: not needed.
    // Replace Airbnb 'no-extra-parens' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    // 'no-extra-parens': 'off',
    // '@typescript-eslint/no-extra-parens': errors.rules['no-extra-parens'],

    // TBX note: not needed.
    // Replace Airbnb 'no-extra-semi' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    // 'no-extra-semi': 'off',
    // '@typescript-eslint/no-extra-semi': errors.rules['no-extra-semi'],

    // TBX note: would be nice, but relies on type checking.
    // Replace Airbnb 'no-implied-eval' and 'no-new-func' rules with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    // 'no-implied-eval': 'off',
    // 'no-new-func': 'off',
    // '@typescript-eslint/no-implied-eval': best.rules['no-implied-eval'],

    // Replace Airbnb 'no-loss-of-precision' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision':
        errors.rules['no-loss-of-precision'],

    // Replace Airbnb 'no-loop-func' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': best.rules['no-loop-func'],

    // TBX note: not needed.
    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    // 'no-magic-numbers': 'off',
    // '@typescript-eslint/no-magic-numbers': best.rules['no-magic-numbers'],

    // Replace Airbnb 'no-redeclare' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': best.rules['no-redeclare'],

    // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': vars.rules['no-shadow'],

    // TBX note: would be nice, but relies on type checking.
    // Replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    // 'no-throw-literal': 'off',
    // '@typescript-eslint/no-throw-literal': best.rules['no-throw-literal'],

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
        best.rules['no-unused-expressions'],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': vars.rules['no-unused-vars'],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define':
        vars.rules['no-use-before-define'],

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor':
        es6.rules['no-useless-constructor'],

    // TBX note: not needed.
    // Replace Airbnb 'quotes' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    // 'quotes': 'off',
    // '@typescript-eslint/quotes': style.rules.quotes,

    // TBX note: not needed.
    // Replace Airbnb 'semi' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    // 'semi': 'off',
    // '@typescript-eslint/semi': style.rules.semi,

    // TBX note: not needed.
    // Replace Airbnb 'space-before-function-paren' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    // 'space-before-function-paren': 'off',
    // '@typescript-eslint/space-before-function-paren':
    //     style.rules['space-before-function-paren'],

    // TBX note: would be nice, but relies on type checking.
    // Replace Airbnb 'require-await' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    // 'require-await': 'off',
    // '@typescript-eslint/require-await': best.rules['require-await'],

    // TBX note: would be nice, but relies on type checking.
    // Replace Airbnb 'no-return-await' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    // 'no-return-await': 'off',
    // '@typescript-eslint/return-await': best.rules['no-return-await'],

    // TBX note: not needed.
    // Replace Airbnb 'space-infix-ops' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
    // 'space-infix-ops': 'off',
    // '@typescript-eslint/space-infix-ops': style.rules['space-infix-ops'],

    // TBX note: not needed.
    // Replace Airbnb 'object-curly-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md
    // 'object-curly-spacing': 'off',
    // '@typescript-eslint/object-curly-spacing':
    //     style.rules['object-curly-spacing'],

    // TBX note: not needed (already overriding this rule).
    // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // 'import/extensions': [
    //     imports.rules['import/extensions'][0],
    //     imports.rules['import/extensions'][1],
    //     {
    //         ...imports.rules['import/extensions'][2],
    //         ts: 'never',
    //         tsx: 'never',
    //     },
    // ],

    // TBX note: not needed.
    // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // 'import/no-extraneous-dependencies': [],
};

module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    settings: {
        // Apply special parsing for TypeScript files
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        // Append 'ts', 'tsx' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: ['.js', '.json', '.ts', '.tsx', '.d.ts'],
            },
        },
        // Append 'ts' extensions to Airbnb 'import/extensions' setting
        'import/extensions': ['.js', '.mjs', '.ts', '.tsx', '.d.ts'],
        // Resolve type definition packages
        'import/external-module-folders': [
            'node_modules',
            'node_modules/@types',
        ],
    },
    rules: {
        ...base.rules,
        ...airbnbTypeScript,
        'import/extensions': [
            2,
            'always',
            {
                ignorePackages: true,
                pattern: {
                    js: 'never',
                    ts: 'never',
                    tsx: 'never',
                },
            },
        ],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.tsx'] }],
    },
    overrides: [
        {
            // Copy from eslint-config-airbnb-typescript
            // https://github.com/iamturns/eslint-config-airbnb-typescript/blob/d30b7d2a41f3f2cf899cad3ed69e3b7eacbc7234/lib/shared.js#L256
            files: ['*.ts', '*.tsx'],
            rules: {
                // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
                // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
                'constructor-super': 'off',
                'getter-return': 'off',
                'no-const-assign': 'off',
                'no-dupe-args': 'off',
                'no-dupe-class-members': 'off',
                'no-dupe-keys': 'off',
                'no-func-assign': 'off',
                'no-new-symbol': 'off',
                'no-obj-calls': 'off',
                'no-redeclare': 'off',
                'no-this-before-super': 'off',
                'no-undef': 'off',
                'no-unreachable': 'off',
                'no-unsafe-negation': 'off',
                'valid-typeof': 'off',
                'import/named': 'off',
                'import/no-unresolved': 'off',
            },
        },
    ],
};
