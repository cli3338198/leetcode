/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const mod = Math.pow(10, 9) + 7
    const dp = {}
    return dfs(startRow, startColumn, 0)
    
    function dfs(r, c, moves) {
        const key = `${r} ${c} ${moves}`
        if (key in dp) return dp[key]
        if (moves > maxMove) return 0
        if (r < 0 || r >= m || c < 0 || c >= n) return 1
        let res = 0
        for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            const rrr = rr + r, ccc = cc + c
            res += dfs(rrr, ccc, moves+1)
        }
        return dp[key] = res % mod
    }
};