function numIslands(grid: string[][]): number {
    const rows = grid.length, cols = grid[0].length
    let count = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++
                bfs(r, c)
            }
        }
    }
    return count
    
    function bfs(r: number, c: number) {
        const q: [number, number][] = [[r, c]], visited = new Set<string>()
        while (q.length) {
            const [r, c] = q.shift()
            const key = `${r} ${c}`
            if (!visited.has(key)) {
                visited.add(key)
                grid[r][c] = '0'
                for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
                    const rrr = rr + r, ccc = cc + c
                    if (rrr in grid && ccc in grid[rrr] && grid[rrr][ccc] === '1') {
                        q.push([rrr, ccc])
                    }
                }
            }
        }
    }
    
    //
    
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