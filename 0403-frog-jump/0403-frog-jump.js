/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const n = stones.length
    const dp = {}
    return helper(0, 0)
    
    function helper(i, k) {
        const key = `${i} ${k}`
        if (key in dp) return dp[key]
        for (let j=i+1; j < n; j++) {
            const jump = stones[j] - stones[i]
            if (jump < k - 1) continue
            if (jump > k + 1) return false
            if (helper(j, jump)) return true
        }
        return dp[key] = i === n-1
    }
};

canCross = function(stones) {
    const n = stones.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(false))
    dp[0][1] = true
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            const jump = stones[i] - stones[j]
            if (jump >= n || dp[j][jump] === false) continue
            dp[i][jump] = true
            if (jump + 1 < n) dp[i][jump+1] = true
            if (jump - 1 < n) dp[i][jump-1] = true
            if (i === n-1) return true
        }
    }
    return false
}