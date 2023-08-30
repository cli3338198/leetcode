function maxSumAfterPartitioning(arr: number[], k: number): number {
    const n = arr.length
    const dp: number[] = Array(n+1).fill(0)
    for (let i=1; i <= n; i++) {
        let max = 0
        for (let j=1; j <= k && i - j >= 0; j++) {
            max = Math.max(max, arr[i-j])
            dp[i] = Math.max(dp[i], dp[i-j] + max * j)
        }
    }
    return dp[n]
};