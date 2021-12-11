'use strict';

module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'prettier'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
    },
    rules: {
        // Do not enforce reassignment to properties of object parameters.
        'no-param-reassign': [2, { props: false }],
        // Temporary warning comments are ok.
        'no-warning-comments': [
            1,
            { terms: ['todo', 'fixme', 'xxx'], location: 'start' },
        ],
        // Allow underscore dangle for known offending variables.
        'no-underscore-dangle': [
            2,
            { allow: ['__REDUX_DEVTOOLS_EXTENSION__', '__webpack_hash__'] },
        ],
        // Allow variables to be snake_case (for compatibility with Python backends).
        'camelcase': 0,
        // Allow console.error statements in the code.
        'no-console': [2, { allow: ['error'] }],
        // Only forbid "any" proptype, not array or object.
        'react/forbid-prop-types': [2, { forbid: ['any'] }],
        // Disable requirement to not use bind.
        'react/jsx-no-bind': [0],
        // We do not want files whose content might change to have to be renamed.
        'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
        // We enforce extact props with TypeScript, not PropTypes or Flow.
        'react/prefer-exact-props': [0],
        // Disabled until Airbnb configuration resolves https://github.com/airbnb/javascript/issues/2505.
        'react/function-component-definition': [0],
        // Allow devDependencies to be used in Storybook stories.
        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: [
                    '**/tests/**',
                    '**/stories/**',
                    '**/storybook/**',
                    'spec/**',
                    '**/__tests__/**',
                    '**/__mocks__/**',
                    '**/*{.,_}{test,spec,story,stories}.*',
                    '**/jest.config.*',
                    '**/setupTests.*',
                    '**/webpack.config.*',
                    '**/rollup.config.*',
                    '**/gulpfile.*',
                ],
                optionalDependencies: false,
            },
        ],
        // Do not enforce that single-export files should use export default.
        'import/prefer-default-export': [0],
    },
};
