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

checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const graph = {}
    const indegree = {}
    const map = {}
    const q = []
    for (let i=0; i < numCourses; i++) {
        graph[i] = []
        indegree[i] = 0
        map[i] = new Set()
    }
    for (const [u, v] of prerequisites) {
        graph[u].push(v)
        indegree[v]++
    }
    for (const key in indegree) {
        if (indegree[key] === 0) {
            q.push(key)
        }
    }
    while (q.length) {
        const u = q.shift()
        for (const v of graph[u]) {
            [u, ...Array.from(map[u])].forEach(map[v].add, map[v])
            indegree[v]--
            if (indegree[v] === 0) {
                q.push(v)
            }
        }
    }
    return queries.map(([u, v]) => map[v].has(Number(u)) || map[v].has(String(u)))
}