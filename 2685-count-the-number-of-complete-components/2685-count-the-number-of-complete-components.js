/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const graph = {}
    for (let i=0; i < n; i++) {
        graph[i] = []
    }
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    let res = 0
    const visited = new Set()
    for (let i=0; i < n; i++) {
        if (!visited.has(i)) {
            visited.add(i)
            const set = new Set()
            dfs(i, set)
            if (Array.from(set).every(node => graph[node].length === set.size-1)) {
                res++
            }
        }
    }
    return res
    
    function dfs(i, set) {
        set.add(i)
        for (const next of graph[i] || []) {
            if (!visited.has(next)) {
                visited.add(next)
                dfs(next, set)
            }
        }
    }
};