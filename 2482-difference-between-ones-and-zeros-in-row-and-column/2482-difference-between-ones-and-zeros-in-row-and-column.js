/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const map = {}
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            for (const i of [0, 1]) {
                for (const j of ['r', 'c']) {
                    map[`${j}${i}${r}`] = map[`${j}${i}${r}`] || 0
                    map[`${j}${i}${c}`] = map[`${j}${i}${c}`] || 0
                }
            }
            if (grid[r][c] === 1) {
                map[`r1${r}`] = map[`r1${r}`] + 1
                map[`c1${c}`] = map[`c1${c}`] + 1
            } else {
                map[`r0${r}`] = map[`r0${r}`] + 1
                map[`c0${c}`] = map[`c0${c}`] + 1
            }
        }
    }
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            grid[r][c] = map[`r1${r}`] + map[`c1${c}`] - map[`r0${r}`] - map[`c0${c}`]
        }
    }
    return grid
};