/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    const graph = {}
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            const key = `${r},${c}`
            graph[key] = []
            for (let [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                const rrr = rr + r
                const ccc = cc + c
                if (rrr in matrix && ccc in matrix[rrr] && matrix[r][c] < matrix[rrr][ccc]) {
                    graph[key].push([rrr, ccc])
                }
            }
        }
    }
    let res = 1
    const dp = {}
    for (const key in graph) {
        res = Math.max(res, helper(key))
    }
    return res
    
    function helper(node) {
        if (node in dp) return dp[node]
        if (!(node in graph)) return 0
        let res = 1
        for (const next of graph[node] || []) {
            res = Math.max(res, 1 + helper(next))
        }
        return dp[node] = res
    }
};