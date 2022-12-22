function maxSubArray(nums: number[]): number {
    const n = nums.length
    const dp = nums.slice()
    let res = nums[0]
    for (let i=1; i < n; i++) {
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
        res = Math.max(res, dp[i])
    }
    return res
};