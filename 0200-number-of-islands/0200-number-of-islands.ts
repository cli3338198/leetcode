class UF<T extends string> {
    constructor(private root: Record<T, T> = {} as Record<T, T>, private distinct: number = 0) {
    }
    insert(a: T) {
        if (!(a in this.root)) {
            this.root[a] = a
            this.distinct++
        }
    }
    find(a: T) {
        if (this.root[a] !== a) {
            this.root[a] = this.find(this.root[a])
        }
        return this.root[a]
    }
    union(a: T, b: T) {
        const A = this.find(a), B = this.find(b)
        if (A !== B) {
            this.root[B] = A
            this.distinct--
        }
    }
    getDistinct() {
        return this.distinct
    }
}

function numIslands(grid: string[][]): number {
    const rows = grid.length, cols = grid[0].length, uf = new UF<string>()
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === '1') {
                const a = `${r} ${c}`
                uf.insert(a)
                for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
                    const rrr = rr + r, ccc = cc + c
                    if (rrr in grid && ccc in grid[rrr] && grid[rrr][ccc] === '1') {
                        const b = `${rrr} ${ccc}`
                        uf.insert(b)
                        uf.union(a, b)
                    }
                }
            }
        }
    }
    return uf.getDistinct()
    
    // 
    
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