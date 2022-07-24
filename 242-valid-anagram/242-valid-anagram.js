/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {}
    for (let char of s) {
        map[char] = map[char] + 1 || 1
    }
    for (let char of t) {
        if (!(char in map)) return false
        map[char]--
    }
    for (let key in map) {
        if (map[key] !== 0) return false
    }
    return true
};