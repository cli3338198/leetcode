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

deleteAndEarn = function(nums) {
    const max = Math.max(...nums)
    const freq = Array(max+1).fill(0)
    for (const n of nums) {
        freq[n]++
    }
    let earn1 = 0
    let earn2 = 0
    for (let i=1; i <= max; i++) {
        [earn1, earn2] = [earn2, Math.max(earn2, earn1 + i * freq[i])]
    }
    return Math.max(earn1, earn2)
}

