/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    class UF {
        constructor() {
            this.root = {}
            this.caught = {}
        }
        coordToKey(r, c) {
            return `${r} ${c}`
        }
        keyToCoord(key) {
            return key.split(" ")
        }
        add(r, c, fish) {
            const key = this.coordToKey(r, c)
            if (!(key in this.root)) {
                this.root[key] = key
                this.caught[key] = fish
            }
        }
        find(r, c) {
            const key = this.coordToKey(r, c)
            if (this.root[key] !== key) {
                const [r, c] = this.keyToCoord(this.root[key])
                this.root[key] = this.find(r, c)
            }
            return this.root[key]
        }
        union(r1, c1, r2, c2) {
            const root1 = this.find(r1, c1)
            const root2 = this.find(r2, c2)
            const caught1 = this.caught[root1]
            const caught2 = this.caught[root2]
            if (root1 !== root2) {
                if (caught1 > caught2) {
                    this.root[root2] = root1
                    this.caught[root1] += caught2
                } else {
                    this.root[root1] = root2
                    this.caught[root2] += caught1
                }
            }
        }
        getMax() {
            let res = 0
            for (const key in this.caught) {
                res = Math.max(res, this.caught[key])
            }
            return res
        }
    }
    
    const uf = new UF()
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            if (grid[r][c] === 0) continue
            uf.add(r, c, grid[r][c])
            for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
                const rrr = rr + r
                const ccc = cc + c
                if (!(rrr in grid) || !(ccc in grid[rrr]) || grid[rrr][ccc] === 0) continue
                uf.add(rrr, ccc, grid[rrr][ccc])
                uf.union(r, c, rrr, ccc)
            }
        }
    }
    return uf.getMax()
};