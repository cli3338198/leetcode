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

areOccurrencesEqual = function(s) {
    return (new Set(Object.values(s.split("").reduce((acc, val) => ({...acc, [val]: acc[val] + 1 || 1}), {})))).size === 1
}