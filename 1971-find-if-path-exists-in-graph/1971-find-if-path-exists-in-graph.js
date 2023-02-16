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