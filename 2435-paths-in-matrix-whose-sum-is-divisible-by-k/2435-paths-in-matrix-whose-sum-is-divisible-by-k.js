/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    const mod = Math.pow(10, 9) + 7
    const rows = grid.length
    const cols = grid[0].length
    const dp = Array(rows).fill(0).map(() => Array(cols).fill(0).map(() => Array(k+1).fill(-1)))
    return dfs(0, 0, 0)
    
    function dfs(r, c, sumMod) {
        if (r >= rows || c >= cols) return 0
        if (dp[r][c][sumMod] !== -1) return dp[r][c][sumMod]
        if (r === rows-1 && c === cols-1) return (sumMod + grid[r][c]) % k === 0 ? 1 : 0
        let res = 0
        res += dfs(r+1, c, (sumMod + grid[r][c]) % k)
        res += dfs(r, c+1, (sumMod + grid[r][c]) % k)
        return dp[r][c][sumMod] = res % mod
    }
};