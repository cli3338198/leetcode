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
    return helper(k, row, column)
    
    function helper(k, row, col) {
        const key = `${k} ${row} ${col}`
        if (key in dp) return dp[key]
        if (row < 0 || row >= n || col < 0 || col >= n) return 0
        if (k === 0) return 1
        let res = 0
        for (const [r, c] of moves) {
            const rr = row + r
            const cc = col + c
            res += 0.125 * helper(k-1, rr, cc)
        }
        return dp[key] = res
    }
};

knightProbability = function(n, k, row, column) {
    const moves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, -1], [2, 1], [-1, -2], [1, -2]]
    let dp = Array(n).fill(0).map(() => Array(n).fill(0))
    dp[row][column] = 1
    for (let i=1; i <= k; i++) {
        const newDp = Array(n).fill(0).map(() => Array(n).fill(0))
        for (let r=0; r < n; r++) {
            for (let c=0; c < n; c++) {
                for (const [rr, cc] of moves) {
                    const rrr = r + rr
                    const ccc = c + cc
                    if (rrr < 0 || rrr >= n || ccc < 0 || ccc >= n) continue
                    newDp[r][c] += dp[rrr][ccc] 
                }
            }
        }
        dp = newDp
    }
    let res = 0
    for (let r=0; r < n; r++) {
        for (let c=0; c < n; c++) {
            res += dp[r][c]
        }
    }
    return res / Math.pow(8, k)
}

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
                    dp[i][r][c] += dp[i-1][rrr][ccc] 
                }
            }
        }
    }
    let res = 0
    for (let r=0; r < n; r++) {
        for (let c=0; c < n; c++) {
            res += dp[k][r][c]
        }
    }
    return res / Math.pow(8, k)
}