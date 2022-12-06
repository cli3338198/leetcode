function findRedundantConnection(edges: number[][]): number[] {
    const graph: Record<string, number[]> = {}
    const set = new Set<number>()
    for (const [u, v] of edges) {
        if (u in graph && v in graph && dfs(u, v, new Set<number>())) {
            return [u, v]
        }
        graph[u] = graph[u] || []
        graph[v] = graph[v] || []
        graph[u].push(v)
        graph[v].push(u)
    }
    
    function dfs(u: number, v: number, set: Set<number>) {
        if (!set.has(u)) {
            set.add(u)
            if (u === v) return true
            for (const nei of graph[u]) {
                if (dfs(nei, v, set)) return true
            }
        }
        return false
    }
};