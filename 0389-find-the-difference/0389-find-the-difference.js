/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = {}
    for (const c of s) {
        map[c] = map[c] + 1 || 1
    }
    for (const c of t) {
        map[c]--
    }
    for (const c in map) {
        if (map[c] !== 0) return c
    }
};