/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {}
    for (const char of s) {
        map[char] = map[char] + 1 || 1
    }
    for (const char of t) {
        if (!(char in map) || map[char] === 0) {
            return false
        }
        map[char]--
    }
    for (const key in map) {
        if (map[key] !== 0) return false
    }   
    return true
};