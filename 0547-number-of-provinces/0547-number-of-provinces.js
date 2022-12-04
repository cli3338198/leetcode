/**
 * @param {number[][]} isConnected
 * @return {number}
 */
class UF {
    constructor() {
        this.root = {}
        this.provinces = 0
    }
    insert(a) {
        if (!(a in this.root)) {
            this.root[a] = a
            this.provinces++
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
        this.provinces--
    }
}

var findCircleNum = function(isConnected) {
    const uf = new UF()
    const n = isConnected.length
    for (let i=0; i < n; i++) {
        for (let j=0; j < n; j++) {
            if (isConnected[i][j] === 1) {
                uf.union(i, j)
            } else {
                uf.insert(i)
                uf.insert(j)
            }
        }
    }
    return uf.provinces
};