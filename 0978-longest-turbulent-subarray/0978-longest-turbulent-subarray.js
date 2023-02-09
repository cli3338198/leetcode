/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    const n = arr.length
    if (n <= 1) return n
    const dp = Array(n).fill(0).map(() => [1, 1])
    let res = 1
    for (let i=1; i < n; i++) {
        if (arr[i] < arr[i-1]) {
            dp[i][1] = 1 + dp[i-1][0]
        }
        if (arr[i] > arr[i-1]) {
            dp[i][0] = 1 + dp[i-1][1]
        }
        res = Math.max(res, ...dp[i])
    }
    return res
};