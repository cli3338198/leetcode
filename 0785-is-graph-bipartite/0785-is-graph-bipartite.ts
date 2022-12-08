function isBipartite(graph: number[][]): boolean {
    const n = graph.length
    const colors: number[] = Array(n).fill(0)
    for (let i=0; i < n; i++) {
        if (colors[i] === 0 && !dfs(i, 1)) return false
    }
    return true
    
    function dfs(i: number, color: number) {
        if (colors[i] !== 0) return colors[i] === color
        colors[i] = color
        for (const next of graph[i]) {
            if (!dfs(next, -color)) return false
        }
        return true
    }
};