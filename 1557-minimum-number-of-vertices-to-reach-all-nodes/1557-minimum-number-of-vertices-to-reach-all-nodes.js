/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const nodes = new Set(Array(n).fill(0).map((_,i) => i))
    for (const [, v] of edges) {
        nodes.delete(v)
    }
    return Array.from(nodes)
};

findSmallestSetOfVertices = function(n, edges) {
    class UF {
        constructor() {
            this.root = {}
        }
        add(n) {
            if (!(n in this.root)) {
                this.root[n] = n
            }
        }
        find(n) {
            this.add(n)
            if (this.root[n] !== n) {
                this.root[n] = this.find(this.root[n])
            }
            return this.root[n]
        }
        union(a, b) {
            const A = this.find(a)
            const B = this.find(b)
            if (A !== B) {
                this.root[b] = A
            }
        }
        getRoots() {
            const res = []
            for (const node in this.root) {
                if (this.root[node] == node) {
                    res.push(this.root[node])
                }
            }
            return res
        }
    }
    const uf = new UF()
    for (const [u, v] of edges) {
        uf.union(u, v)
    }
    return uf.getRoots()
}