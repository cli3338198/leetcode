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
    const dp = Array(max+1).fill(0)
    for (let i=1; i <= max; i++) {
        dp[i] = Math.max(dp[i-1], (dp[i-2] || 0) + i * freq[i])
    }
    return dp[max]
};

deleteAndEarn = function(nums) {
    const max = Math.max(...nums)
    const freq = Array(max+1).fill(0)
    for (const n of nums) {
        freq[n]++
    }
    let earn1 = 0, earn2 = 0
    for (let i=1; i <= max; i++) {
        [earn1, earn2] = [earn2, Math.max(earn2, earn1 + i * freq[i])]
    }
    return Math.max(earn1, earn2)
}