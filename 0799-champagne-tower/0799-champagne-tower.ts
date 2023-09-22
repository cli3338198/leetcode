function champagneTower(poured: number, query_row: number, query_glass: number): number {
    const dp: number[][] = Array(101).fill(0).map(() => Array(101).fill(0))
    dp[0][0] = poured
    for (let r=0; r < query_row; r++) {
        for (let c=0; c <= query_glass; c++) {
            if (dp[r][c] > 1) {
                dp[r+1][c] += (dp[r][c] - 1) / 2
                dp[r+1][c+1] += (dp[r][c] - 1) / 2
            }
        }
    }
    return Math.min(dp[query_row][query_glass], 1)
};