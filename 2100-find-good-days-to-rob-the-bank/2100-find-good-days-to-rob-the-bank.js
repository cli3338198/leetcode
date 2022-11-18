/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
    const n = security.length
    let left = Array(n).fill(0)
    for (let i=1; i < n; i++) {
        if (security[i-1] >= security[i]) {
            left[i] = 1 + left[i-1]
        }
    }
    let right = Array(n).fill(0)
    for (let i=n-2; i >= 0; i--) {
        if (security[i] <= security[i+1]) {
            right[i] = 1 + right[i+1]
        }
    }
    const res = []
    for (let i=time; i <= n - time; i++) {
        if (left[i] >= time && right[i] >= time) {
            res.push(i)
        }
    }
    return res
};