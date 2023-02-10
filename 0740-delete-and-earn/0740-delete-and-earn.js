/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const max = Math.max(...nums)
    const freq = Array(max+1).fill(0)
    for (const n of nums) {
        freq[n]++
    }
    const dp = {}
    return helper(0)
    
    function helper(n) {
        if (n > max) return 0
        if (n in dp) return dp[n]
        return dp[n] = Math.max(helper(n+1), n * freq[n] + helper(n+2))
    }
};

