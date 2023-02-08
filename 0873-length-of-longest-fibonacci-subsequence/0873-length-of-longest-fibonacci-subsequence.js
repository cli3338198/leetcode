/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const n = arr.length
    const set = new Set(arr)
    let res = 0
    for (let i=0; i < n; i++) {
        for (let j=i+1; j < n; j++) {
            let a = arr[i]
            let b = arr[j]
            let k = 2
            for (k; set.has(a + b); k++) {
                [a, b] = [b, a + b]
            }
            res = Math.max(res, k)
        }
    }
    return res > 2 ? res : 0
};