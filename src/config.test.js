'use strict';
const path = require('path');
const { CLIEngine } = require('eslint');

describe('config', () => {
    it('works', () => {
        console.error = jest.fn();

        const cli = new CLIEngine({
            useEslintrc: false,
            configFile: path.join(__dirname, '..', 'config.js'),
        });

        expect(cli.executeOnText('var foo\n')).toMatchObject({
            errorCount: 2,
            warningCount: 0,
        });

        // This project does not depend on React, so using the config will log an error.
        expect(console.error).toHaveBeenCalledWith(
            'Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.',
        );
    });
});
