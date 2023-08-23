/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const graph = {}
    graph[-1] = []
    for (let i=0; i <= n; i++) {
        graph[i] = []
    }
    for (let i=0; i < manager.length; i++) {
        graph[manager[i]].push(i)
    }
    return dfs(headID)
    
    function dfs(id) {
        if (graph[id].length === 0) return 0
        let res = 0
        for (const subordinate of graph[id] || []) {
            res = Math.max(res, dfs(subordinate))
        }
        return res + informTime[id]
    }
};