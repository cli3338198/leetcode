function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: Record<string, number[]> = {}, indegree: Record<string, number> = {}, q: number[] = []
    let count = 0
    for (let n=0; n < numCourses; n++) {
        indegree[n] = 0
        graph[n] = []
    }
    for (const [course, pre] of prerequisites) {
        indegree[course]++
        graph[pre].push(course)
    }
    for (let n=0; n < numCourses; n++) {
        if (indegree[n] === 0) {
            q.push(n)
        }
    }
    while (q.length) {
        const i = q.shift()
        count++
        for (const j of graph[i] || []) {
            indegree[j]--
            if (indegree[j] === 0) {
                q.push(j)
            }
        }
    }
    return count === numCourses
};