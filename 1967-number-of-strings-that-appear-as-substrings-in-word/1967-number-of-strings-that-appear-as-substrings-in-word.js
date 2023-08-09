/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    return patterns.reduce((acc, substr) => acc + (word.includes(substr) ? 1 : 0), 0)
};