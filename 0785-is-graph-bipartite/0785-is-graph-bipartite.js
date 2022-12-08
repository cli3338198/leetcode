/**
 * @param {number[][]} graph
 * @return {boolean}
 */
class UF {
    constructor() {
        this.root = {}
    }
    insert(a) {
        if (!(a in this.root)) {
            this.root[a] = a
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
    }
}

var isBipartite = function(graph) {
    const uf = new UF()
    for (let i=0; i < graph.length; i++) {
        const rootI = uf.find(i)
        for (const j of graph[i]) {
            const rootJ = uf.find(j)
            if (rootI === rootJ) return false
            uf.union(graph[i][0], j)
        }
    }
    return true
};