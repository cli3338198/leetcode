/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    const graph = {}
    for (const [u, v] of edges) {
        graph[u] = graph[u] || []
        graph[v] = graph[v] || []
        graph[u].push(v)
        graph[v].push(u)
    }
    return Math.max(dfs(0, new Set([0])) - 2, 0)
    
    function dfs(root, set) {
        let res = 0
        for (const next of graph[root] || []) {
            if (!set.has(next)) {
                set.add(next)
                res += dfs(next, set)
            }
        }
        if (res > 0 || hasApple[root]) {
            return res + 2
        }
        return res
    }
};