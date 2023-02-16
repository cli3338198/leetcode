/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = {}
    for (let i=0; i < n; i++) {
        graph[i] = []
    }
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    return dfs(source, destination, new Set())
    
    function dfs(src, dst, visiting) {
        if (src === dst) return true
        if (!visiting.has(src)) {
            visiting.add(src)
            for (const next of graph[src]) {
                if (dfs(next, dst, visiting)) return true
            }
        }
        return false
    }
};

validPath = function(n, edges, source, destination) {
    const graph = {}
    for (let i=0; i < n; i++) {
        graph[i] = []
    }
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    const q = [source]
    const set = new Set()
    while (q.length) {
        const cur = q.shift()
        if (cur === destination) return true
        if (set.has(cur)) continue
        set.add(cur)
        for (const next of graph[cur]) {
            q.push(next)
        }
    }
    return false
}

validPath = function(n, edges, source, destination) {
    class UF {
        constructor(n) {
            this.root = {}
            this.size = {}
            for (let i=0; i < n; i++) {
                this.root[i] = i
                this.size[i] = 1
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
            const sizeA = this.size[A]
            const B = this.find(b)
            const sizeB = this.size[B]
            if (A === B) return
            if (sizeA > sizeB) {
                this.root[B] = A
                this.size[A] += this.size[B]
            } else {
                this.root[A] = B
                this.size[B] += this.size[A]
            }
        }
    }
    
    const uf = new UF(n)
    for (const [u, v] of edges) {
        uf.union(u, v)
    }
    return uf.find(source) === uf.find(destination)
}