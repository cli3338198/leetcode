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