function numTrees(n: number): number {
    const dp: number[] = Array(n+1).fill(1)
    for (let i=2; i <= n; i++) {
        dp[i] = 0
        for (let j=1; j <= i; j++) {
            dp[i] += dp[j-1] * dp[i-j]
        }
    }
    return dp[n]
};