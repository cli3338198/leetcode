/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = {}
    const time = {}
    for (const [u, v, t] of times) {
        graph[u] = graph[u] || []
        graph[u].push(v)
        time[[u, v]] = t
    }
    const costs = {}
    const q = [[k, 0]]
    while (q.length) {
        const [n, t] = q.shift()
        if (!(n in costs) || t < costs[n]) {
            costs[n] = t
            for (const next of graph[n] || []) {
                q.push([next, t + time[[n, next]]])
            }
        }
    }
    for (let i=1; i <= n; i++) {
        if (!(i in costs)) return -1
    }
    return Math.max(...Object.values(costs))
};