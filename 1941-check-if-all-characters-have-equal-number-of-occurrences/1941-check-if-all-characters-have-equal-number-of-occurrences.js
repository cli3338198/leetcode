/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const map = {}
    for (const c of s) {
        map[c] = map[c] + 1 || 1
    }
    let cnt
    for (const key in map) {
        if (!cnt) {
            cnt = map[key]
        } else if (map[key] !== cnt) {
            return false
        }
    }
    return true
};