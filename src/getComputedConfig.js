'use strict';
const { CLIEngine } = require('eslint');

/**
 * Generates a configuration object with all extended configurations inlined.
 * Note: if the base config contains overrides for different file names,
 * this will only compute the config for '.js' files.
 */
const getComputedConfig = (baseConfig) => {
    const cli = new CLIEngine({
        useEslintrc: false,
        allowInlineConfig: false,
        baseConfig,
    });

    const computedConfig = cli.getConfigForFile('config.js');
    // Delete env-specific config keys.
    delete computedConfig.filePath;
    delete computedConfig.baseDirectory;

    return computedConfig;
};

module.exports = getComputedConfig;
