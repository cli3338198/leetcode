/**
 * @param {number[][]} edges
 * @return {number[]}
 */
class UF {
    constructor() {
        this.root = {}
        this.size = {}
    }
    insert(a) {
        if (!(a in this.root)) {
            this.root[a] = a
            this.size[a] = 1
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
        if (A === B) return false
        if (this.size[A] > this.size[B]) {
            this.size[A] += this.size[B]
            this.root[B] = A
        } else {
            this.size[B] += this.size[A]
            this.root[A] = B
        }
        return true
    }
}

var findRedundantConnection = function(edges) {
    const uf = new UF()
    for (const [u, v] of edges) {
        if (uf.union(u, v) === false) return [u, v]
    }
};