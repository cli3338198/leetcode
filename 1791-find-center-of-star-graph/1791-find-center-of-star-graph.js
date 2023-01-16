/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const outdegree = {}
    const set = new Set()
    for (const [u, v] of edges) {
        outdegree[u] = outdegree[u] + 1 || 1
        outdegree[v] = outdegree[v] + 1 || 1
        set.add(u)
        set.add(v)
    }
    for (const n in outdegree) {
        if (outdegree[n] === set.size - 1) {
            return n
        }
    }
};