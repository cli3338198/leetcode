function minCost(n: number, cuts: number[]): number {
    cuts = [0, ...cuts, n]
    cuts.sort((a, b) => a - b)
    const m = cuts.length
    const dp = Array(m).fill(0).map(() => Array(m).fill(0))
    for (let len=2; len < m; len++) {
        for (let i=0; i < m - len; i++) {
            const j = i + len
            dp[i][j] = Infinity
            for (let k=i+1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], cuts[j] - cuts[i] + dp[i][k] + dp[k][j])
            }
        }
    }
    return dp[0].at(-1)
};