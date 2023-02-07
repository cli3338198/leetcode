function soupServings(n: number): number {
    if (n >= 4800) return 1
    const ops: [number, number][] = [[-100, 0], [-75, -25], [-50, -50], [-25, -75]]
    const dp: number[][] = Array(n+1).fill(0).map(() => Array(n+1).fill(0))
    dp[0].fill(1)
    dp[0][0] = 0.5
    for (let i=1; i <= n; i++) {
        for (let j=1; j <= n; j++) {
            for (const [ii, jj] of ops) {
                const iii = i + ii
                const jjj = j + jj
                dp[i][j] += dp[Math.max(0, iii)][Math.max(0, jjj)] * 0.25
            }
        }
    }
    return dp[n][n]
};