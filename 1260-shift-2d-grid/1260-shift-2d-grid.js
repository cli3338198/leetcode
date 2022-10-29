/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length
    const n = grid[0].length
    const len = m * n
    const map = {}
    for (let r=0; r < m; r++) {
        for (let c=0; c < n; c++) {
            const newTwoD = (threeToTwo(r, c) + k) % len
            map[newTwoD] = grid[r][c]
        }
    }
    for (const twoDIndex in map) {
        const [r, c] = twoToThree(twoDIndex)
        grid[r][c] = map[twoDIndex]
    }
    return grid
    
    function threeToTwo(r, c) {
        return r * n + c
    }
    
    function twoToThree(x) {
        return [Math.floor(x / n), x % n]
    }
};

