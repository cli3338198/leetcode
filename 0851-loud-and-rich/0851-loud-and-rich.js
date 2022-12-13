/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const n = quiet.length
    const graph = {}
    for (const [u, v] of richer) {
        graph[v] = graph[v] || []
        graph[v].push(u)
    }
    const res = Array(n).fill(-1)
    for (let i=0; i < n; i++) {
        dfs(i)
    }
    return res
    
    function dfs(i) {
        if (res[i] >= 0) return res[i]
        res[i] = i
        for (const j of graph[i] || []) {
            const k = dfs(j)
            if (quiet[res[i]] > quiet[k]) {
                res[i] = res[j]
            }
        }
        return res[i]
    }
};