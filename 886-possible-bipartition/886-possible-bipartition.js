/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
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
    
    const uf = new UF()
    const graph = {}
    for (let [u, v] of dislikes) {
        graph[u] ? graph[u].push(v) : graph[u] = [v]
        graph[v] ? graph[v].push(u) : graph[v] = [u]
    }
    
    for (let i=1; i <= n; i++) {
        uf.insert(i)
    }
    
    for (let i=1; i <= n; i++) {
        if (!(i in graph)) continue
        for (let j of graph[i]) {
            if (uf.find(i) === uf.find(j)) return false
            uf.union(graph[i][0], j)
        }
    }
    return true
};