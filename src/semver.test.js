'use strict';

const pkg = require('../package.json');
const config = require('../config');
const getComputedConfig = require('./getComputedConfig');

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('has no dependencies', () => {
        expect(typeof pkg.dependencies).toBe('undefined');
    });

    it('has stable peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
Object {
  "eslint": "^7.2.0",
  "eslint-config-airbnb": "^18.2.1",
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-import": "^2.23.4",
  "eslint-plugin-jsx-a11y": "^6.4.1",
  "eslint-plugin-react": "^7.24.0",
  "eslint-plugin-react-hooks": "^4.2.0",
}
`);
    });

    it('has stable config rules', () => {
        const computed = getComputedConfig(config);
        expect(computed).toMatchSnapshot();
    });
});
