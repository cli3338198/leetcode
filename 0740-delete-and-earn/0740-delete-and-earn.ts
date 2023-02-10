function deleteAndEarn(nums: number[]): number {
    const max = Math.max(...nums)
    const dp: number[] = Array(max+1).fill(0)
    const freq: number[] = Array(max+1).fill(0)
    for (const n of nums) {
        freq[n]++
    }
    dp[1] = 1 * freq[1]
    for (let i=2; i <= max; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + i * freq[i])
    }
    return dp[max]
};