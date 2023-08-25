function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n-1) return -1
    const graph: Record<string, number[]> = {}
    for (let i=0; i < n; i++) {
        graph[i] = []
    }
    for (const [u, v] of connections) {
        graph[u].push(v)
        graph[v].push(u)
    }
    let numberConnected = 0
    const visited: boolean[] = Array(n).fill(false)
    for (let i=0; i < n; i++) {
        if (!visited[i]) {
            numberConnected++
            bfs(i)
        }
    }
    return numberConnected - 1
    
    function bfs(i) {
        const q = [i]
        visited[i] = true
        while (q.length) {
            const node = q.shift()
            for (const next of graph[node]) {
                if (!visited[next]) {
                    visited[next] = true
                    q.push(next)
                }
            }
        }
    }
};