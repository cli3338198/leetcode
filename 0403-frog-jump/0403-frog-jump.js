/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const n = stones.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(false))
    dp[0][0] = true
    for (let i=1; i < n; i++) {
        if (stones[i] - stones[i-1] > i) return false
    }
    for (let i=1; i < n; i++) {
        for (let j=i-1; j >= 0; j--) {
            const jump = stones[i] - stones[j]
            if (jump > j + 1) break
            dp[i][jump] = dp[j][jump-1] || dp[j][jump] || dp[j][jump+1]
            if (i === n-1 && dp[i][jump] === true) return true
        }
    }
    return false
};