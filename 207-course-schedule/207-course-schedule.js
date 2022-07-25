/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = {}
    const indegree = {}
    for (let i=0; i < numCourses; i++) {
        graph[i] = []
        indegree[i] = 0
    }
    for (let [course, req] of prerequisites) {
        graph[req].push(course)
        indegree[course]++
    }
    const q = []
    for (let i=0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            q.push(i)
        }
    }
    while (q.length) {
        const course = q.shift()
        for (let next of graph[course] || []) {
            indegree[next]--
            if (indegree[next] === 0) {
                q.push(next)
            }
        }
    }
    for (let node in indegree) {
        if (indegree[node] > 0) return false
    }
    return true
};