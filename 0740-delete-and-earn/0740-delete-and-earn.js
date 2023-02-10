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

deleteAndEarn = function(nums) {
    const max = Math.max(...nums)
    const freq = Array(max+1).fill(0)
    const dp = Array(max+1).fill(0)
    for (const n of nums) {
        freq[n]++
    }
    dp[1] = 1 * freq[1]
    for (let i=2; i <= max; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + i * freq[i])
    }
    return dp[max]
}

