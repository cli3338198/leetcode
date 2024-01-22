function numIslands(grid: string[][]): number {
    const rows = grid.length, cols = grid[0].length
    let count = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++
                dfs(r, c)
            }
        }
    }
    return count
    
    function dfs(r: number, c: number) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] !== '1') return
        grid[r][c] = '0'
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)
    }
};