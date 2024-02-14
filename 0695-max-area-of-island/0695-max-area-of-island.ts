function maxAreaOfIsland(grid: number[][]): number {
    const visited = new Set<string>()
    const rows = grid.length, cols = grid[0].length
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1 && !visited.has(`${r} ${c}`)) {
                res = Math.max(res, dfs(r, c))
            }
        }
    }
    return res
    
    function dfs(r: number, c: number): number {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] !== 1 || visited.has(`${r} ${c}`)) return 0
        visited.add(`${r} ${c}`)
        let ans = 1
        ans += dfs(r + 1, c)
        ans += dfs(r - 1, c)
        ans += dfs(r, c + 1)
        ans += dfs(r, c - 1)
        return ans
    }
};