function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length, n = heights[0].length
    const oceans = Array(m).fill(0).map(() => Array(n).fill(0).map(() => ([false, false])))
    for (let r=0; r < m; r++) {
        for (let c=0; c < n; c++) {
            if (r === 0 || c === 0) {
                dfs(r, c, 0)
            } 
            if (r === m-1 || c === n-1) {
                dfs(r, c, 1)
            }
        }
    }
    const res: number[][] = []
    for (let r=0; r < m; r++) {
        for (let c=0; c < n; c++) {
            if (oceans[r][c].every(x => x === true)) {
                res.push([r, c])
            }
        }
    }
    return res
    
    function dfs(r: number, c: number, ocean: number): void {
        oceans[r][c][ocean] = true
        for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            const rrr = rr + r, ccc = cc + c
            if (rrr in heights && ccc in heights[rrr] && heights[r][c] <= heights[rrr][ccc] && oceans[rrr][ccc][ocean] !== true) {
                dfs(rrr, ccc, ocean)
            }
        }
    }
};