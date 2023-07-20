/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    return s.split(" ").reduce((acc, word, i) => i < k ? acc + (i !== 0 ? " " : "") + word : acc, "")
};