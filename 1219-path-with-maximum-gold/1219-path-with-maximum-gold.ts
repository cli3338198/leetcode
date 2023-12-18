function getMaximumGold(grid: number[][]): number {
    let res = 0
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            res = Math.max(res, backtrack(r, c))
        }
    }
    return res
    
    function backtrack(r: number, c: number): number {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] === 0) return 0
        const temp = grid[r][c]
        grid[r][c] = 0
        let res = 0
        for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            const rrr = rr + r, ccc = cc + c
            res = Math.max(res, backtrack(rrr, ccc))
        }
        grid[r][c] = temp
        return res + temp
    }
};