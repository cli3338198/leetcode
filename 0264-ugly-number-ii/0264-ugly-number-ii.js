/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = Array(1690)
    dp[0] = 1
    let i2 = 0
    let i3 = 0
    let i5 = 0
    for (let i=1; i < n; i++) {
        const t2 = dp[i2] * 2
        const t3 = dp[i3] * 3
        const t5 = dp[i5] * 5
        dp[i] = Math.min(t2, t3, t5)
        if (dp[i] === t2) i2++
        if (dp[i] === t3) i3++
        if (dp[i] === t5) i5++
    }
    return dp[n-1]
};