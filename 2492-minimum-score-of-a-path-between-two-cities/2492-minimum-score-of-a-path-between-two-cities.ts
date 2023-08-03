function minScore(n: number, roads: number[][]): number {
    const graph: Record<string, number[][]> = {}
    for (const [u, v, d] of roads) {
        graph[u] = graph[u] || []
        graph[v] = graph[v] || []
        graph[u].push([v, d])
        graph[v].push([u, d])
    }
    return dfs(1, new Set())
    
    function dfs(cur: number, set: Set<number>): number {
        set.add(cur)
        let res = Infinity
        for (const [next, d] of graph[cur] || []) {
            res = Math.min(res, d)
            if (!set.has(next)) {
                res = Math.min(res, dfs(next, set))
            }
        }
        return res
    }
};