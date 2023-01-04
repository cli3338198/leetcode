/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const n = arr.length
    const map = {}
    let sum = 0
    let size = Infinity
    let res = Infinity
    map[0] = -1
    for (let i=0; i < n; i++) {
        sum += arr[i]
        map[sum] = i
    }
    sum = 0
    for (let i=0; i < n; i++) {
        sum += arr[i]
        if ((sum - target) in map) {
            size = Math.min(size, i - map[sum - target])
        }
        if ((sum + target) in map && size < Infinity) {
            res = Math.min(res, map[sum + target] - i + size)
        }
    }
    return res === Infinity ? -1 : res
};