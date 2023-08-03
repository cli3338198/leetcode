/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const graph = {}
    for (const [u, v, d] of roads) {
        graph[u] = graph[u] || []
        graph[v] = graph[v] || []
        graph[u].push([v, d])
        graph[v].push([u, d])
    }
    return dfs(1, new Set())
    
    function dfs(cur, set) {
        set.add(cur)
        let res = Infinity
        for (const [next, d] of graph[cur] || []) {
            res = Math.min(res, d)
            if (!set.has(next)) {
                res = Math.min(res, dfs(next, set))
            }
        }
        return res
    }
};

minScore = function(n, roads) {
    const graph = {}
    for (const [u, v, d] of roads) {
        graph[u] = graph[u] || []
        graph[v] = graph[v] || []
        graph[u].push([v, d])
        graph[v].push([u, d])
    }
    const q = [1]
    let res = Infinity
    const set = new Set()
    set.add(1)
    while (q.length) {
        const cur = q.shift()
        for (const [next, d] of graph[cur] || []) {
            res = Math.min(res, d)
            if (!set.has(next)) {
                set.add(next)
                q.push(next)
            }
        }
    }
    return res
}

minScore = function(n, roads) {
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
    
    const uf = new UF()
    let res = Infinity
    for (const [u, v] of roads) {
        uf.union(u, v)
    }
    const root = uf.find(1)
    for (const [u, v, d] of roads) {
        const U = uf.find(u)
        const V = uf.find(v)
        if (U === root || V === root) {
            res = Math.min(res, d)
        }
    }
    return res
}