/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    class UF {
        constructor() {
            this.root = {}
            this.islands = 0
        }
        insert(a) {
            if (!(a in this.root)) {
                this.root[a] = a
                this.islands++
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
            if (A !== B) {
                this.root[B] = A
                this.islands--
            }
        }
    }
    
    const uf = new UF()
    const rows = grid.length
    const cols = grid[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === '1') {
                uf.insert([r, c])
                for (let [r1, c1] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                    const rr = r + r1
                    const cc = c + c1
                    if (rr in grid && cc in grid[rr] && grid[rr][cc] === '1') {
                        uf.insert([rr, cc])
                        uf.union([r, c], [rr, cc])
                    }
                }
            }
        }
    }
    return uf.islands
};