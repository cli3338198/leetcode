/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const moves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, -1], [2, 1], [-1, -2], [1, -2]]
    const dp = {}
    return helper(row, column, k)
    
    function helper(row, column, k) {
        const key = `${row} ${column} ${k}`
        if (row < 0 || row >= n || column < 0 || column >= n) return 0
        if (k === 0) return 1
        if (key in dp) return dp[key]
        let res = 0
        for (const [rr, cc] of moves) {
            const rrr = rr + row
            const ccc = cc + column
            res += helper(rrr, ccc, k-1) / 8
        }
        return dp[key] = res
    }
};

knightProbability = function(n, k, row, column) {
    const moves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, -1], [2, 1], [-1, -2], [1, -2]]
    const dp = Array(k+1).fill(0).map(() => Array(n).fill(0).map(() => Array(n).fill(0)))
    dp[0][row][column] = 1
    for (let i=1; i <= k; i++) {
        for (let r=0; r < n; r++) {
            for (let c=0; c < n; c++) {
                for (const [rr, cc] of moves) {
                    const rrr = r + rr
                    const ccc = c + cc
                    if (rrr < 0 || rrr >= n || ccc < 0 || ccc >= n) continue
                    dp[i][r][c] += dp[i-1][rrr][ccc] / 8
                }
            }
        }
    }
    return dp[k].reduce((acc, row) => acc + row.reduce((acc, cell) => acc + cell ,0) ,0)
}