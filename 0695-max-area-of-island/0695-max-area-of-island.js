/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0
    const set = new Set()
    const rows = grid.length
    const cols = grid[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1 && !set.has(`${r} ${c}`)) {
                res = Math.max(res, dfs(r, c))
            }
        }
    }
    return res
    
    function dfs(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] !== 1 || set.has(`${r} ${c}`)) return 0
        set.add(`${r} ${c}`)
        let res = 1
        res += dfs(r+1, c)
        res += dfs(r-1, c)
        res += dfs(r, c+1)
        res += dfs(r, c-1)
        return res
    }
};

maxAreaOfIsland = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let res = 0
    const set = new Set()
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1 && !set.has(`${r} ${c}`)) {
                res = Math.max(res, bfs(r, c))
            }
        }
    }
    return res
    
    function bfs(r, c) {
        const q = [[r, c]]
        let res = 0
        while (q.length) {
            const [r, c] = q.shift()
            if (!set.has(`${r} ${c}`)) {
                set.add(`${r} ${c}`)
                res++
                for (const [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                    const rrr = rr + r
                    const ccc = cc + c
                    if (rrr in grid && ccc in grid[rrr] && grid[rrr][ccc] === 1 && !set.has(`${rrr} ${ccc}`)) {
                        q.push([rrr, ccc])
                    }
                }
            }
        }
        return res
    }
}

maxAreaOfIsland = function(grid) {
    class UF {
        constructor() {
            this.root = {}
            this.size = {}
            this.max = 0
        }
        insert(a) {
            if (!(a in this.root)) {
                this.root[a] = a
                this.size[a] = 1
                this.max = Math.max(this.max, this.size[a])
            }
        }
        find(a) {
            this.insert(a)
            if (this.root[a] !== a) {
                this.root[a] = this.find(this.root[a])
            }
            return this.root[a]
        }
        union(a, b) {
            const A = this.find(a)
            const B = this.find(b)
            if (A === B) return
            this.root[B] = A
            this.size[A] += this.size[B]
            this.max = Math.max(this.max, this.size[A])
        }
    }
    
    const uf = new UF()
    const rows = grid.length
    const cols = grid[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1) {
                uf.insert([r, c])
                for (const [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                    const rrr = rr + r
                    const ccc = cc + c
                    if (rrr in grid && ccc in grid[rrr] && grid[rrr][ccc] === 1) {
                        uf.union([r, c], [rrr, ccc])
                    }
                }
            }
        }
    }
    return uf.max
}