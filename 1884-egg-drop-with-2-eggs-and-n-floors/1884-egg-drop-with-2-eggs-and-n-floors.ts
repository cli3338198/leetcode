function twoEggDrop(n: number): number {
    const dp: number[] = Array(n+1).fill(Infinity)
    dp[1] = 1
    for (let i=2; i <= n; i++) {
        for (let j=1; j <= i; j++) {
            dp[i] = Math.min(dp[i], Math.max(j, 1 + dp[i-j]))
        }
    }
    return dp[n]
};