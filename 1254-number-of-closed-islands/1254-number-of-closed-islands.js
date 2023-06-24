/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            if (r === 0 || r === grid.length-1 || c === 0 || c === grid[r].length-1) {
                if (grid[r][c] === 0) {
                    flip(r, c)
                }
            }
        }
    }
    let res = 0
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            if (grid[r][c] === 0) {
                res++
                flip(r, c)
            }
        }
    }
    return res
    
    function flip(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] !== 0) return
        grid[r][c] = 1
        flip(r+1, c)
        flip(r-1, c)
        flip(r, c+1)
        flip(r, c-1)
    }

};