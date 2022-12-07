function allPathsSourceTarget(graph: number[][]): number[][] {
    const target = graph.length-1
    const res: number[][] = []
    const q: [number, number[]][] = [[0, [0]]]
    while (q.length) {
        const [node, list] = q.shift()
        if (node === target) {
            res.push(list)
            continue
        }
        for (const next of graph[node]) {
            q.push([next, [...list, next]])
        }
    }
    return res
};