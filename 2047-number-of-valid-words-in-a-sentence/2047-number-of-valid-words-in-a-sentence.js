/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    return sentence
        .split(/\s+/)
        .filter(word => /^([!.,]$|[a-z]+(-[a-z]+)?[!.,]?$)/.test(word))
        .length
};