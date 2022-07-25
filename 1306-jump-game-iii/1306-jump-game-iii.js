/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const q = [start]
    const set = new Set()
    while (q.length) {
        const idx = q.shift()
        if (arr[idx] === 0) return true
        set.add(idx)
        const jump = arr[idx]
        if (idx + jump < arr.length && !set.has(idx + jump)) q.push(idx + jump)
        if (idx - jump >= 0 && !set.has(idx - jump)) q.push(idx - jump)
    }
    return false
};