const path = require('path');
const { ESLint } = require('eslint');

describe('typescript', () => {
    it('works', async () => {
        console.error = jest.fn();

        const eslint = new ESLint({
            useEslintrc: false,
            overrideConfigFile: path.join(__dirname, '..', 'typescript.js'),
        });

        const lintResult = await eslint.lintText(
            'type Foo = string;\nvar foo: Foo\n',
        );
        expect(lintResult[0]).toMatchObject({
            errorCount: 3,
            warningCount: 0,
        });

        // This project does not depend on React, so using the config will log an error.
        expect(console.error).toHaveBeenCalledWith(
            'Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.',
        );
    });
});
