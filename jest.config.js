module.exports = {
    // Customise Jest module resolution as it lacks compatibility for Node `exports`.
    // See:
    // - https://nodejs.org/api/packages.html#exports
    // - https://github.com/browserify/resolve/issues/222
    // - https://github.com/facebook/jest/issues/9565
    // - https://github.com/facebook/jest/issues/9430
    moduleNameMapper: {
        '^eslint/use-at-your-own-risk$': 'eslint/lib/unsupported-api.js',
    },
};
