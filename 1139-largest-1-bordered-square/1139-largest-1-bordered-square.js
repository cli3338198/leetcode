/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const verticalDp = clone(grid)
    const horizontalDp = clone(grid)
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1) {
                if (c > 0 && horizontalDp[r][c-1] > 0) horizontalDp[r][c] += horizontalDp[r][c-1]
                if (r > 0 && verticalDp[r-1][c] > 0) verticalDp[r][c] += verticalDp[r-1][c]
            }
        }
    }
    let max = 0
    for (let r=rows-1; r >= 0; r--) {
        for (let c=cols-1; c >= 0; c--) {
            if (grid[r][c] > 0) {
                let k = Math.min(verticalDp[r][c], horizontalDp[r][c])
                while (k > max) {
                    if (horizontalDp[r-k+1][c] >= k && verticalDp[r][c-k+1] >= k) {
                        max = Math.max(max, k)
                    }
                    k--
                }
            }
        }
    }
    return max * max
    
    function clone(grid) {
        if (!Array.isArray(grid)) return grid
        return grid.map(clone)
    }
};

largest1BorderedSquare = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const dp = Array(rows).fill(0).map((_,r) => Array(cols).fill(0).map((_,c) => Array(2).fill(0).map(() => grid[r][c])))
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] > 0) {
                if (r > 0 && dp[r-1][c][0] > 0) dp[r][c][0] += dp[r-1][c][0]
                if (c > 0 && dp[r][c-1][1] > 0) dp[r][c][1] += dp[r][c-1][1]
            }
        }
    }
    let max = 0
    for (let r=rows-1; r >= 0; r--) {
        for (let c=cols-1; c >= 0; c--) {
            if (grid[r][c] > 0) {
                let min = Math.min(dp[r][c][0], dp[r][c][1])
                while (min > max) {
                    if (dp[r][c-min+1][0] >= min && dp[r-min+1][c][1] >= min) {
                        max = min
                        break
                    }
                    min--
                }
            }
        }
    }
    return max * max
}