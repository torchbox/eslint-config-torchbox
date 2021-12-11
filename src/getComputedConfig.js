'use strict';
const { ESLint } = require('eslint');

/**
 * Generates a configuration object with all extended configurations inlined.
 * Note: if the base config contains overrides for different file names,
 * this will only compute the config for '.js' files.
 */
const getComputedConfig = async (baseConfig) => {
    const eslint = new ESLint({
        useEslintrc: false,
        allowInlineConfig: false,
        baseConfig,
    });

    const computedConfig = await eslint.calculateConfigForFile('config.js');
    // Delete env-specific config keys.
    delete computedConfig.filePath;
    delete computedConfig.baseDirectory;

    return computedConfig;
};

module.exports = getComputedConfig;
