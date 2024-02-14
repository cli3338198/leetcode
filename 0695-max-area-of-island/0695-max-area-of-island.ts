function maxAreaOfIsland(grid: number[][]): number {
    const parent: Record<string, string> = {}
    const size: Record<string, number> = {}
    const rows = grid.length, cols = grid[0].length
    const add = (root: string) => {
        if (!(root in parent)) {
            parent[root] = root
            size[root] = 1
        }
    }
    const find = (root: string) => {
        if (parent[root] !== root) {
            parent[root] = find(parent[root])
        }
        return parent[root]
    }
    const union = (root1: string, root2: string) => {
        const a = find(root1), b = find(root2)
        if (a !== b) {
            const [big, small] = [a, b].sort((x, y) => size[y] - size[x])
            parent[small] = big
            size[big] += size[small]
        }
    }
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1) {
                add(`${r} ${c}`)
                for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
                    const rrr = rr + r, ccc = cc + c
                    if (rrr in grid && ccc in grid[rrr] && grid[rrr][ccc] === 1) {
                        add(`${rrr} ${ccc}`)
                        union(`${r} ${c}`, `${rrr} ${ccc}`)
                    }
                }
            }
        }
    }
    return Math.max(0, ...Object.values(size))
    
    //
    
    const visited = new Set<string>()
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