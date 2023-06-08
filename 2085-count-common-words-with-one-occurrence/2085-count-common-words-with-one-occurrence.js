/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const map = {}
    for (const w of words1) {
        map[w] = map[w] + 1 || 1
    }
    for (const w of words2) {
        if (w in map && map[w] < 2) {
            map[w]--
        }
    }
    let res = 0
    for (const key in map) {
        if (map[key] === 0) {
            res++
        }
    }
    return res
};