class UF {
    constructor() {
        this.root = {}
    }
    coordToKey(r, c) {
        return `${r} ${c}`
    }
    keyToCoord(key) {
        return key.split(" ")
    }
    add(r, c) {
        const key = this.coordToKey(r, c)
        if (!(key in this.root)) {
            this.root[key] = key
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
        if (root1 === root2) return false
        this.root[root2] = root1
        return true
    }
}

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    const uf = new UF()
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            uf.add(r, c)
            for (const [rr, cc] of [[0, 1], [1, 0]]) {
                const rrr = rr + r
                const ccc = cc + c
                if (!(rrr in grid) || !(ccc in grid[rrr]) || grid[rrr][ccc] !== grid[r][c]) continue
                uf.add(rrr, ccc)
                if (uf.union(r, c, rrr, ccc) === false) return true
            }
        }
    }
    return false
};