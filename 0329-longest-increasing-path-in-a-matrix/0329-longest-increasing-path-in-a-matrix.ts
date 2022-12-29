function longestIncreasingPath(mat: number[][]): number {
    const rows = mat.length
    const cols = mat[0].length
    const dirs: number[][] = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    const outdegrees: number[][] = Array(rows).fill(0).map(() => Array(cols).fill(0))
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            for (const [rr, cc] of dirs) {
                const rrr = rr + r
                const ccc = cc + c
                if (rrr in mat && ccc in mat[rrr] && mat[r][c] > mat[rrr][ccc]) {
                    outdegrees[r][c]++
                }
            }
        }
    }
    const q: number[][] = []
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (outdegrees[r][c] === 0) {
                q.push([r, c])
            }
        }
    }
    let res = 0
    while (q.length) {
        res++
        const len = q.length
        for (let i=0; i < len; i++) {
            const [r, c] = q.shift()
            for (const [rr, cc] of dirs) {
                const rrr = rr + r
                const ccc = cc + c
                if (rrr in mat && ccc in mat[rrr] && mat[r][c] < mat[rrr][ccc]) {
                    outdegrees[rrr][ccc]--
                    if (outdegrees[rrr][ccc] === 0) {
                        q.push([rrr, ccc])
                    }
                }
            }
        }
    }
    return res
};