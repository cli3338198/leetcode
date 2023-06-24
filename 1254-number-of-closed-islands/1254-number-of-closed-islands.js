/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            if (r === 0 || r === grid.length-1 || c === 0 || c === grid[r].length-1) {
                if (grid[r][c] === 0) {
                    flip(r, c)
                }
            }
        }
    }
    let res = 0
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            if (grid[r][c] === 0) {
                res++
                flip(r, c)
            }
        }
    }
    return res
    
    function flip(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] !== 0) return
        grid[r][c] = 1
        flip(r+1, c)
        flip(r-1, c)
        flip(r, c+1)
        flip(r, c-1)
    }
};

closedIsland = function(grid) {
    class UF {
        constructor() {
            this.root = {}
            this.islands = 0
        }
        add(a) {
            if (!(a in this.root)) {
                this.root[a] = a
                this.islands++
            }
        }
        find(a) {
            this.add(a)
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
            this.islands--
        }
    }
    const uf = new UF()
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            if (r === 0 || r === grid.length-1 || c === 0 || c === grid[r].length-1) {
                if (grid[r][c] === 0) {
                    flip(r, c)
                }
            }
        }
    }
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            if (grid[r][c] === 0) {
                uf.add([r, c])
                for (const [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                    const rrr = r + rr
                    const ccc = c + cc
                    if (!(rrr in grid) || !(ccc in grid[rrr]) || grid[rrr][ccc] !== 0) continue
                    uf.union([r, c], [rrr, ccc])
                }
            }
        }
    }
    return uf.islands
    
    function flip(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] !== 0) return
        grid[r][c] = 1
        flip(r+1, c)
        flip(r-1, c)
        flip(r, c+1)
        flip(r, c-1)
    }
}