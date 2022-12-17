/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const q = []
    const set = new Set()
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1) {
                dfs(r, c)
                return bfs()
            }
        }
    }

    function bfs() {
        let res = 0
        while (q.length) {
            const len = q.length
            for (let i=0; i < len; i++) {
                const [r, c] = q.shift()
                for (const [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                    const rrr = rr + r
                    const ccc = cc + c
                    if (rrr in grid && ccc in grid[rrr] && !set.has(`${rrr} ${ccc}`)) {
                        if (grid[rrr][ccc] === 1) return res
                        q.push([rrr, ccc])
                        set.add(`${rrr} ${ccc}`)
                    }
                }
            }
            res++
        }
    }
    
    function dfs(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] === 0 || set.has(`${r} ${c}`)) return
        q.push([r, c])
        set.add(`${r} ${c}`)
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)
    }
};