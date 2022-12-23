function minDistance(word1: string, word2: string): number {
    const rows = word1.length
    const cols = word2.length
    const dp = Array(rows+1).fill(0).map(() => Array(cols+1).fill(0))
    for (let r=1; r <= rows; r++) {
        dp[r][0] = 1 + dp[r-1][0]
    }
    for (let c=1; c <= cols; c++) {
        dp[0][c] = 1 + dp[0][c-1]
    }
    for (let r=1; r <= rows; r++) {
        for (let c=1; c <= cols; c++) {
            if (word1[r-1] === word2[c-1]) {
                dp[r][c] = dp[r-1][c-1]
            } else {
                dp[r][c] = 1 + Math.min(dp[r-1][c-1], dp[r-1][c], dp[r][c-1])
            }
        }
    }
    return dp[rows][cols]
};