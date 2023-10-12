function canPartition(nums: number[]): boolean {
    const totalSum = nums.reduce((acc, val) => acc + val, 0)
    const halfSum = totalSum / 2
    if (halfSum !== Math.floor(halfSum)) return false
    const dp = Array(nums.length+1).fill(0).map(() => Array(halfSum+1).fill(false))
    for (const row of dp) {
        row[0] = true
    }
    for (let i=1; i <= nums.length; i++) {
        for (let j=1; j <= halfSum; j++) {
            dp[i][j] = dp[i-1][j]
            if (nums[i-1] <= j) {
                dp[i][j] = dp[i][j] || dp[i-1][j-nums[i-1]]
            }
        }
    }
    return dp[nums.length][halfSum]
};