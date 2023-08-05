function findMaxFish(grid: number[][]): number {
    const rows = grid.length
    const cols = grid[0].length
    const visited: boolean[][] = Array(rows).fill(0).map(() => Array(cols).fill(false))
    let max = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] !== 0 && visited[r][c] === false) {
                const stack: number[][] = [[r, c]]
                let curMax = 0
                while (stack.length) {
                    const [r, c] = stack.pop()
                    if (visited[r][c] === true) continue
                    visited[r][c] = true
                    curMax += grid[r][c]
                    for (const [rr, cc] of [[0, 1], [1, 0], [-1, 0], [0, -1]]) {
                        const rrr = rr + r
                        const ccc = cc + c
                        if (!(rrr in grid) || !(ccc in grid[rrr]) || grid[rrr][ccc] === 0 || visited[rrr][ccc] === true) continue
                        stack.push([rrr, ccc])
                    }
                }
                max = Math.max(max, curMax)
            }
        }
    }
    return max
};