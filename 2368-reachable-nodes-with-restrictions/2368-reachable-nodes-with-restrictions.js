/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    if (restricted.length === 0) return n
    if (restricted.includes(0)) return 0
    restricted = new Set(restricted)
    restricted.add(0)
    const graph = {}, q = [0]
    let visited = 0
    for (let i=0; i < n; i++) {
        graph[i] = []
    }
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    while (q.length) {
        visited++
        const cur = q.shift()
        for (const next of graph[cur]) {
            if (!restricted.has(next)) {
                restricted.add(next)
                q.push(next)
            }
        }
    }
    return visited
};