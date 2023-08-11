/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const map = {}
    let res = 0
    for (const word of words) {
        if (word.split("").reverse().join("") in map) {
            res += map[word.split("").reverse().join("")]
        }
        map[word] = map[word] + 1 || 1
    }
    return res
};