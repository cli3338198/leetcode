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

uniqueOccurrences = function(arr) {
    const map = arr.reduce(reducer, {})
    return new Set(Object.values(map)).size === Object.values(map).length
    
    function reducer(acc, val) {
        acc[val] = acc[val] + 1 || 1
        return acc
    }
}