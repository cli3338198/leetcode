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
    return helper(k, row, column) / (8**k)
    
    function helper(k, row, col) {
        const key = `${k} ${row} ${col}`
        if (key in dp) return dp[key]
        if (row < 0 || row >= n || col < 0 || col >= n) return 0
        if (k === 0) return 1
        let res = 0
        for (const [r, c] of moves) {
            const rr = row + r
            const cc = col + c
            res += helper(k-1, rr, cc)
        }
        return dp[key] = res
    }
};