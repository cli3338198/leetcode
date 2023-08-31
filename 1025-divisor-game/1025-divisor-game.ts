function divisorGame(n: number): boolean {
    const dp: boolean[] = Array(n+1).fill(false)
    dp[2] = true
    for (let i=3; i <= n; i++) {
        for (let x=1; x < i; x++) {
            if (i % x === 0 && !dp[i-x]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[n]
};