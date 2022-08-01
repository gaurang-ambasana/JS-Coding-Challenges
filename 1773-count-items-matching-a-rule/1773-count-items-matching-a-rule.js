/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = (items, ruleKey, ruleValue) => items.map(([type, color, name]) => ({ type, color, name })).reduce((match, item) => item[ruleKey] === ruleValue ? ++match : match, 0);