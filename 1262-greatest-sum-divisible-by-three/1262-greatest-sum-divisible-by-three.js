/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    const n = nums.length
    const dp = Array(n+1).fill(0).map(() => Array(3).fill(0))
    for (let i=1; i <= n; i++) {
        dp[i] = dp[i-1].slice()
        for (let j=0; j < 3; j++) {
            const sum = dp[i-1][j] + nums[i-1]
            const mod = sum % 3
            dp[i][mod] = Math.max(dp[i][mod], sum)
        }
    }
    return dp[n][0]
};

maxSumDivThree = function(nums) {
    const n = nums.length
    let dp = Array(3).fill(0)
    for (let i=1; i <= n; i++) {
        const nextDp = dp.slice()
        for (let j=0; j < 3; j++) {
            const sum = dp[j] + nums[i-1]
            const mod = sum % 3
            nextDp[mod] = Math.max(nextDp[mod], sum)
        }
        dp = nextDp
    }
    return dp[0]
}