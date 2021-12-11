'use strict';
const path = require('path');
const { ESLint } = require('eslint');

describe('config', () => {
    it('works', async () => {
        console.error = jest.fn();

        const eslint = new ESLint({
            useEslintrc: false,
            overrideConfigFile: path.join(__dirname, '..', 'config.js'),
        });

        const lintResult = await eslint.lintText('var foo\n');
        expect(lintResult[0]).toMatchObject({
            errorCount: 2,
            warningCount: 0,
        });

        // This project does not depend on React, so using the config will log an error.
        expect(console.error).toHaveBeenCalledWith(
            'Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.',
        );
    });
});
