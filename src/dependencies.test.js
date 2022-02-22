'use strict';

const pkg = require('../package.json');

describe('semver for dependencies - should those tests break, consider releasing a new major version of the package', () => {
    it('has stable dependencies', () => {
        expect(pkg.dependencies).toMatchInlineSnapshot(`undefined`);
    });

    it('has stable peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
            Object {
              "eslint": "^8.2.0",
              "eslint-config-airbnb": "^19.0.2",
              "eslint-config-prettier": "^8.3.0",
              "eslint-plugin-import": "^2.25.3",
              "eslint-plugin-jsx-a11y": "^6.5.1",
              "eslint-plugin-react": "^7.27.1",
              "eslint-plugin-react-hooks": "^4.3.0",
            }
        `);
    });
});
