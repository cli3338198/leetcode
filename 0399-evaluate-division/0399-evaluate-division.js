/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {}
    const dist = {}
    for (let i=0; i < equations.length; i++) {
        const [u, v] = equations[i]
        graph[u] = graph[u] || new Set()
        graph[v] = graph[v] || new Set()
        graph[u].add(v)
        graph[v].add(u)
        dist[[u, v]] = values[i]
        dist[[v, u]] = 1 / values[i]
    }
    const res = []
    for (const [u, v] of queries) {
        res.push(dfs(u, v, new Set()))
    }
    return res
    
    function dfs(u, v, set) {
        if (!(u in graph)) return -1
        if (graph[u].has(v)) return dist[[u, v]]
        set.add(u)
        for (const next of graph[u]) {
            if (!set.has(next)) {
                const t = dfs(next, v, set)
                if (t !== -1) return dist[[u, next]] * t
            }
        }
        return -1
    }
};