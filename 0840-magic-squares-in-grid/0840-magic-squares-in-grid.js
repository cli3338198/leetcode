/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let res = 0
    for (let r=0; r < rows-2; r++) {
        for (let c=0; c < cols-2; c++) {
            if (isMagic(grid[r].slice(c, c+3), grid[r+1].slice(c, c+3), grid[r+2].slice(c, c+3))) {
                res++
            }
        }
    }
    return res
};

function isMagic([a, b, c], [d, e, f], [g, h, i]) {
    return (a+b+c === d+e+f) && (d+e+f === g+h+i) && (a+d+g === b+e+h) && (b+e+h === c+f+i)
        && (a+e+i === g+e+c) && isDistinct(...arguments) 
}

function isDistinct(arr1, arr2, arr3) {
    const set = new Set([...arr1, ...arr2, ...arr3])
    for (let i=1; i <= 9; i++) {
        if (!set.has(i)) return false
    }
    return true
}