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

findPaths = function(m, n, maxMove, startRow, startColumn) {
    const mod = Math.pow(10, 9) + 7
    let dp = Array(m).fill(0).map(() => Array(n).fill(0))
    dp[startRow][startColumn] = 1
    let res = 0
    for (let move=1; move <= maxMove; move++) {
        const nextDp = Array(m).fill(0).map(() => Array(n).fill(0))
        for (let r=0; r < m; r++) {
            for (let c=0; c < n; c++) {
                if (r === 0) res = (res + dp[r][c]) % mod
                if (r === m-1) res = (res + dp[r][c] % mod)
                if (c === 0) res = (res + dp[r][c]) % mod
                if (c === n-1) res = (res + dp[r][c]) % mod
                nextDp[r][c] = ((r > 0 ? dp[r-1][c] : 0) + (r < m-1 ? dp[r+1][c] : 0)) % mod + ((c > 0 ? dp[r][c-1] : 0) + (c < n-1 ? dp[r][c+1] : 0)) % mod
            }
        }
        dp = nextDp
    }
    return res
}