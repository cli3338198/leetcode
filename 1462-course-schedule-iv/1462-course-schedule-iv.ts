function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
    const graph: Record<string, number[]> = {}
    const indegree: Record<string, number> = {}
    const map: Record<string, Set<string | number>> = {}
    for (let i=0; i < numCourses; i++) {
        graph[i] = []
        indegree[i] = 0
        map[i] = new Set()
    }
    for (const [u, v] of prerequisites) {
        graph[u].push(v)
        indegree[v]++
    }
    const q: (string|number)[] = []
    for (const node in indegree) {
        if (indegree[node] === 0) {
            q.push(node)
        }
    }
    while (q.length) {
        const u = q.shift()
        for (const v of graph[u]) {
            map[v].add(Number(u))
            for (const p of map[u]) {
                map[v].add(p)
            }
            indegree[v]--
            if (indegree[v] === 0) {
                q.push(v)
            }
        }
    }
    return queries.map(([u, v]) => map[v].has(u))
};