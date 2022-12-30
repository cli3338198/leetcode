function maxCoins(nums: number[]): number {
    const n = nums.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(0))
    for (let len=1; len <= n; len++) {
        for (let i=0; i < n - len + 1; i++) {
            const j = i + len - 1
            for (let k=i; k <= j; k++) {
                const left = k - 1 >= 0 ? dp[i][k-1] : 0
                const right = k + 1 < n ? dp[k+1][j] : 0
                dp[i][j] = Math.max(
                    dp[i][j],
                    left + (nums[i-1] || 1) * nums[k] * (nums[j+1] || 1) + right
                )
            }
        }
    }
    return dp[0][n-1]
};