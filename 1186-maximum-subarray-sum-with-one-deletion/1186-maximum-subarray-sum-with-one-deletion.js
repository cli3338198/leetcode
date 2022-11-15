/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    const n = arr.length
    if (n === 0) return 0
    if (n === 1) return arr[0]
    let res = -Infinity
    for (const n of arr) {
        res = Math.max(res, n)
    }
    if (res < 0) return res
    res = 0
    let oneDelete = 0
    let noDelete = arr[0]
    for (let i=1; i < arr.length; i++) {
        oneDelete = Math.max(oneDelete + arr[i], noDelete)
        noDelete = Math.max(noDelete + arr[i], arr[i])
        res = Math.max(res, oneDelete, noDelete)
    }
    return res
};