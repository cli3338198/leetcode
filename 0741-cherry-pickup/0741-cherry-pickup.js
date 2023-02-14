/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const n = grid.length
    const dp = {}
    const res = helper(0, 0, 0, 0)
    return res === -Infinity ? 0 : res
    
    function helper(r1, c1, r2, c2) {
        const key = `${r1} ${c1} ${r2} ${c2}`
        if (key in dp) return dp[key]
        if (r1 >= n || r2 >= n || c1 >= n || c2 >= n || grid[r1][c1] === -1 || grid[r2][c2] === -1) return -Infinity
        if (r1 === n-1 && c1 === n-1 && r2 === n-1 && c2 === n-1) return grid[r1][c1]
        let curCherries = 0
        if (c1 === c2) {
            curCherries = grid[r1][c1]
        } else {
            curCherries = grid[r1][c1] + grid[r2][c2]
        }
        let nextCherries = -Infinity
        for (const [r11, c11] of [[1, 0], [0, 1]]) {
            for (const [r22, c22] of [[1, 0], [0, 1]]) {
                const r111 = r11 + r1
                const c111 = c11 + c1
                const r222 = r22 + r2
                const c222 = c22 + c2
                nextCherries = Math.max(nextCherries, helper(r111, c111, r222, c222))
            }
        }
        return dp[key] = curCherries + nextCherries
    }
};