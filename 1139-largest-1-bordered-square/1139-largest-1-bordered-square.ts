function largest1BorderedSquare(grid: number[][]): number {
    const rows = grid.length
    const cols = grid[0].length
    const horizontal = clone(grid)
    const vertical = clone(grid)
    let max = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] > 0) {
                if (c > 0 && horizontal[r][c-1] > 0) {
                    horizontal[r][c] += horizontal[r][c-1]
                }
                if (r > 0 && vertical[r-1][c] > 0) {
                    vertical[r][c] += vertical[r-1][c]
                }
            }
        }
    }
    for (let r=rows-1; r >= 0; r--) {
        for (let c=cols-1; c >= 0; c--) {
            if (grid[r][c] > 0) {
                let min = Math.min(horizontal[r][c], vertical[r][c])
                while (min > max) {
                    if (horizontal[r-min+1][c] >= min && vertical[r][c-min+1] >= min) {
                        max = Math.max(max, min)
                        break
                    }
                    min--
                }
            }
        }
    }
    return max * max
};

function clone<T>(grid: T): T {
    if (!Array.isArray(grid)) return grid
    return grid.map(clone) as unknown as T
}