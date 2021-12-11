'use strict';
const fs = require('fs');
const path = require('path');
const getRuleURI = require('eslint-rule-documentation');
const getComputedConfig = require('./getComputedConfig');

const baseConfig = require('../config');

/**
 * Generates inline rules documentation in the project’s README,
 * to easily understand the config and have basic versioned docs.
 */

const MAX_RULE_CONFIG_LENGTH = 60;
const README_PATH = path.join(__dirname, '..', 'README.md');
const README_MARKER = '<!-- Generated with: npm run build -->';

const isOn = (rule) =>
    Array.isArray(rule) ? isOn(rule[0]) : rule !== 'off' && rule !== 0;

const formatRuleName = (name) => `[${name}](${getRuleURI(name).url})`;

/**
 * Formats a rule’s value to be displayed in the rules documentation.
 */
const formatRuleValue = (value) => {
    let printableValue = value;

    if (typeof value !== 'string' && typeof value !== 'number') {
        // Print the data structure as concisely as possible.
        printableValue = JSON.stringify(value)
            .replace(/[[\]"{}]/g, '')
            .replace(/([:,])/g, '$1 ');
    }

    if (printableValue.length > MAX_RULE_CONFIG_LENGTH * 1.2) {
        printableValue = `${printableValue.substring(
            0,
            MAX_RULE_CONFIG_LENGTH,
        )}…`;
    }

    return `\`${printableValue}\``;
};

const formatRows = (rules, rulesOptions) => {
    const rows = rules
        .map((name) => formatRule(name, rulesOptions[name]))
        .reduce((print, row) => {
            const newRows = [];

            if (row[1]) {
                newRows.push([`${row[0]}: ${row[1]}`]);
            } else {
                newRows.push(row);
            }

            return print.concat(newRows);
        }, []);

    const list = [''].concat(rows).join('\n- ');

    return list;
};

const formatRule = (name, options) => {
    const value =
        Array.isArray(options) && options.length === 1 ? options[0] : options;
    const row = [formatRuleName(name)];

    if (value !== 'error') {
        row.push(formatRuleValue(value));
    }

    return row;
};

const generate = async () => {
    const config = await getComputedConfig(baseConfig);
    const { rules } = config;

    const customRules = Object.keys(baseConfig.rules);

    // Only display inherited rules that are active, not disabled rules.
    const inheritedRules = Object.keys(rules)
        .filter((name) => isOn(rules[name]))
        .filter((name) => !customRules.includes(name));

    const rulesDocumentation = `
### Custom rules

${formatRows(customRules, baseConfig.rules)}

### Inherited rules

${formatRows(inheritedRules, rules)}

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for guidance and setup instructions.
`;

    const oldREADME = fs
        .readFileSync(README_PATH, 'utf-8')
        .split(README_MARKER)[0];
    const newREADME = `${oldREADME}${README_MARKER}\n${rulesDocumentation}`;

    fs.writeFileSync(README_PATH, newREADME, 'utf-8');
    console.log('Updated README.md with rules docs:', rulesDocumentation);
};

generate();
