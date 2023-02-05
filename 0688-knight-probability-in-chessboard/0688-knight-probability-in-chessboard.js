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