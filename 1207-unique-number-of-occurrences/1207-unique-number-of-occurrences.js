/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}
    for (const n of arr) {
        map[n] = map[n] + 1 ||1
    }
    const set = new Set()
    for (const k in map) {
        if (set.has(map[k])) return false
        set.add(map[k])
    }
    return true
};