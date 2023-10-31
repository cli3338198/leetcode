function numDistinct(s: string, t: string): number {
    const m = s.length, n = t.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    dp.forEach(row => row[0] = 1)
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            dp[i][j] = dp[i-1][j]
            if (s[i-1] === t[j-1]) {
                dp[i][j] += dp[i-1][j-1]
            }
        }
    }
    return dp[m][n]
};