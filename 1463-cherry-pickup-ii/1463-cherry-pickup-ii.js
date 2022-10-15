/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const dp = {}
    const rows = grid.length
    const cols = grid[0].length
    return helper(0, 0, cols-1)
    
    function helper(r, c1, c2) {
        const key = JSON.stringify([r, c1, c2])
        if (key in dp) {
            return dp[key]
        }
        if (r >= rows) {
            return 0
        }
        if (c1 < 0 || c1 >= cols || c2 < 0 || c2 >= cols) {
            return -Infinity
        }
        let cherries = 0
        if (c1 === c2) {
            cherries = grid[r][c1]
        } else {
            cherries = grid[r][c1] + grid[r][c2]
        }
        let nextCherries = -Infinity
        for (const cc of [-1, 0, 1]) {
            for (const ccc of [-1, 0, 1]) {
                nextCherries = Math.max(nextCherries, helper(r+1, c1+cc, c2+ccc))
            }
        }
        return dp[key] = nextCherries + cherries
    }
};