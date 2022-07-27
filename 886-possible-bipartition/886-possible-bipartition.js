/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const graph = {}
    for (let [u, v] of dislikes) {
        graph[u] ? graph[u].push(v) : graph[u] = [v]
        graph[v] ? graph[v].push(u) : graph[v] = [u]
    }
    const colors = Array(n+1).fill(0)
    for (let i=1; i <= n; i++) {
        if (!(i in graph)) continue
        if (colors[i] === 0 && !helper(i, 1)) return false
    }
    return true
    
    function helper(node, color) {
        if (colors[node] !== 0) {
            return colors[node] === color
        }
        colors[node] = color
        for (let next of graph[node] || []) {
            if (!helper(next, -color)) return false
        }
        return true
    }
};