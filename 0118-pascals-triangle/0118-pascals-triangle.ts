function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1,1]]
    const dp: number[][] = Array(numRows).fill(0).map((_,r) => Array(r+1).fill(1))
    dp[0] = [1]
    dp[1] = [1, 1]
    for (let r=2; r < numRows; r++) {
        for (let c=1; c < dp[r].length - 1; c++) {
            dp[r][c] = dp[r-1][c-1] + dp[r-1][c]
        }
    }
    return dp
};