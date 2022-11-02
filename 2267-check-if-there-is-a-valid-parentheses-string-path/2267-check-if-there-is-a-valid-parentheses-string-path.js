/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const dp = {}
    return helper(0, 0, 0)
    
    function helper(r, c, k) {
        const key = `${r} ${c} ${k}`
        if (key in dp) {
            return dp[key]
        }
        if (r >= rows || c >= cols) {
            return dp[key] = false
        }
        if (grid[r][c] === '(') {
            k++
        } else {
            k--
        }
        if (k < 0) {
            return dp[key] = false
        }
        if (r === rows-1 && c === cols-1) {
            if (k === 0) {
                return dp[key] = true
            } else {
                return dp[key] = false
            }
        }
        return dp[key] = helper(r+1, c, k) || helper(r, c+1, k)
    }
};