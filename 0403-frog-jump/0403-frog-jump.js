/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const n = stones.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(false))
    dp[0][1] = true
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            const jump = stones[i] - stones[j]
            if (jump >= n || !dp[j][jump]) continue
            dp[i][jump] = true
            if (jump - 1 >= 0) dp[i][jump - 1] = true
            if (jump + 1 < n) dp[i][jump + 1] = true
            if (i === n - 1) return true
        }
    }
    return false
};