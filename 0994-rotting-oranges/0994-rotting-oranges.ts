function orangesRotting(grid: number[][]): number {
    const rows = grid.length, cols = grid[0].length
    const q: [number, number][] = []
    let fresh = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 2) {
                q.push([r, c])
            }
            if (grid[r][c] === 1) {
                fresh++
            }
        }
    }
    if (fresh === 0) return 0
    let time = 0
    while (q.length) {
        const len = q.length
        for (let i=0; i < len; i++) {
            const [r, c] = q.shift()
            for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
                const rrr = rr + r, ccc = cc + c
                if (rrr in grid && ccc in grid[rrr] && grid[rrr][ccc] === 1) {
                    fresh--
                    grid[rrr][ccc] = 2
                    q.push([rrr, ccc])
                }
            }
        }
        time++
    }
    if (fresh === 0) return time - 1
    return -1
};