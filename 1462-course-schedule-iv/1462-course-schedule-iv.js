/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const graph = {}
    for (let i=0; i < numCourses; i++) {
        graph[i] = []
    }
    for (const [u, v] of prerequisites) {
        graph[u].push(v)
    }
    return queries.map(q => dfs(...q))
    
    function dfs(u, v, set=new Set()) {
        if (u === v) return true
        if (set.has(u)) return false
        set.add(u)
        for (const next of graph[u]) {
            if (dfs(next, v, set)) return true
        }
        return false
    }
};