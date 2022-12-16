/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    for (const row of grid) {
        if (row[0] !== 1) {
            toggleRow(row)
        }
    }
    for (let c=1; c < cols; c++) {
        let countOnes = 0
        for (let r=0; r < rows; r++) {
            if (grid[r][c] === 1) countOnes++
        }
        if (countOnes < Math.ceil(rows/2)) {
            toggleCol(c)
        }
    }
    return calculateScore(grid)
    
    function toggleCol(c) {
        for (let r=0; r < rows; r++) {
            grid[r][c] = grid[r][c] === 1 ? 0 : 1
        }
    }

    function toggleRow(row) {
        for (let i=0; i < row.length; i++) {
            row[i] = row[i] === 1 ? 0 : 1
        }
    }

    function calculateScore(grid) {
        return grid.reduce((acc, row) => acc + row.reduceRight((acc, val, idx, arr) => val === 1 ? acc + Math.pow(2, arr.length - idx - 1) : acc, 0), 0)
    }
};

