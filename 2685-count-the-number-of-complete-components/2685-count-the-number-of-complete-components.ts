function countCompleteComponents(n: number, edges: number[][]): number {
    const graph: Record<string, number[]> = {}
    for (let i=0; i < n; i++) {
        graph[i] = []
    }
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    const visited = new Set<number>()
    let res = 0
    for (let i=0; i < n; i++) {
        if (!visited.has(i)) {
            visited.add(i)
            const connected = new Set<number>()
            dfs(i, connected)
            if (Array.from(connected).every(node => graph[node].length === connected.size-1)) {
                res++
            }
        }
    }
    return res
    
    function dfs(node: number, connected: Set<number>): void {
        connected.add(node)
        for (const next of graph[node] || []) {
            if (!visited.has(next)) {
                visited.add(next)
                dfs(next, connected)
            }
        }
    }
};