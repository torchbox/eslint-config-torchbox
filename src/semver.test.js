'use strict';

const pkg = require('../package.json');
const config = require('../config');
const getComputedConfig = require('./getComputedConfig');

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('has no dependencies', () => {
        expect(Object.keys(pkg.dependencies)).toHaveLength(0);
    });

    it('has stable peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
            Object {
              "eslint": "^5.0.0",
              "eslint-config-airbnb": "^17.1.0",
              "eslint-config-prettier": "^6.0.0",
              "eslint-plugin-import": "^2.18.0",
              "eslint-plugin-jsx-a11y": "^6.2.0",
              "eslint-plugin-react": "^7.14.0",
            }
        `);
    });

    it('has stable config rules', () => {
        const computed = getComputedConfig(config);
        // Replace values that contain machine-specific information.
        computed.extends = computed.extends.map((extend) =>
            extend.replace(/.*node_modules\//, ''),
        );
        expect(computed).toMatchSnapshot();
    });
});
