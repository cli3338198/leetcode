/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    return items.reduce((acc, [type, color, name]) => acc + ((ruleKey === "type" && ruleValue === type) || (ruleKey === "color" && ruleValue === color) || (ruleKey === "name" && ruleValue === name) ? 1 : 0), 0)
};