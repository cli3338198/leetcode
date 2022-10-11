/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = {}
    const indegree = {}
    for (const [course, req] of prerequisites) {
        graph[req] = graph[req] || []
        graph[req].push(course)
        indegree[course] = indegree[course] + 1 || 1
    }
    const q = []
    for (let i=0; i < numCourses; i++) {
        if (!(i in indegree)) {
            q.push(i)
        }
    }
    const res = []
    while (q.length) {
        const course = q.shift()
        res.push(course)
        for (const next of graph[course] || []) {
            indegree[next]--
            if (indegree[next] === 0) {
                q.push(next)
            }
        }
    }    
    return res.length === numCourses ? res : []
};