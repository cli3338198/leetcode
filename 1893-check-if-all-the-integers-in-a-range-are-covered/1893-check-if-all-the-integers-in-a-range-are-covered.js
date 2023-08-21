/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    const set = new Set()
    for (const [lo, hi] of ranges) {
        for (let i=lo; i <= hi; i++) {
            set.add(i)
        }
    }
    for (let i=left; i <= right; i++) {
        if (!set.has(i)) return false
    }
    return true
};