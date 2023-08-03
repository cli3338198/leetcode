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