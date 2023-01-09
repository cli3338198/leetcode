function findTargetSumWays(nums: number[], target: number): number {
    const n = nums.length
    const sum = nums.reduce((acc, val) => acc + val, 0)
    if (Math.abs(target) > sum || (sum + target) % 2 !== 0) return 0
    const s1 = (sum + target) / 2
    const dp: number[][] = Array(n+1).fill(0).map(() => Array(s1+1).fill(0))
    dp[0][0] = 1
    for (let i=1; i <= n; i++) {
        for (let j=0; j <= s1; j++) {
            dp[i][j] += dp[i-1][j]
            if (nums[i-1] <= j) {
                dp[i][j] += dp[i-1][j-nums[i-1]]
            }
        }
    }
    return dp[n][s1]
};