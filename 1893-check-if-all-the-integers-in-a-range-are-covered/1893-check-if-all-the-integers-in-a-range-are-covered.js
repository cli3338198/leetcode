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

isCovered = function(ranges, left, right) {
    const arr = Array(52).fill(0)
    for (const [lo, hi] of ranges) {
        arr[lo]++
        arr[hi + 1]--
    }
    for (let i=1, overlaps=0; i <= right; i++) {
        overlaps += arr[i]
        if (i >= left && overlaps === 0) {
            return false
        }
    }
    return true
}