function knightDialer(n: number): number {
    const mod = Math.pow(10, 9) + 7
    const moves = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]
    const dp: number[][] = Array(n+1).fill(0).map(() => Array(10).fill(0))
    dp[1].fill(1)
    for (let move=2; move <= n; move++) {
        for (let i=0; i < 10; i++) {
            for (const next of moves[i]) {
                dp[move][i] += dp[move-1][next] % mod
            }
        }
    }
    return dp[n].reduce((acc, val) => acc + val, 0) % mod
};