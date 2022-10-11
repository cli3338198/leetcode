/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = {}
    const indegree = {}
    for (const [course, req] of prerequisites) {
        graph[req] = graph[req] || []
        graph[req].push(course)
        indegree[course] = indegree[course] + 1 || 1
    }
    const set = new Set()
    const q = []
    for (let i=0; i < numCourses; i++) {
        if (!(i in indegree)) {
            q.push(i)
        }
    }
    while (q.length) {
        const course = q.shift()
        set.add(course)
        for (const next of graph[course] || []) {
            indegree[next]--
            if (indegree[next] === 0) {
                q.push(next)
            }
        }
    }
    return set.size === numCourses
};