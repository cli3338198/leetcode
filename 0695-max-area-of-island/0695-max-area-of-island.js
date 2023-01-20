/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0
    const set = new Set()
    const rows = grid.length
    const cols = grid[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1 && !set.has(`${r} ${c}`)) {
                res = Math.max(res, dfs(r, c))
            }
        }
    }
    return res
    
    function dfs(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] !== 1 || set.has(`${r} ${c}`)) return 0
        set.add(`${r} ${c}`)
        let res = 1
        res += dfs(r+1, c)
        res += dfs(r-1, c)
        res += dfs(r, c+1)
        res += dfs(r, c-1)
        return res
    }
};

maxAreaOfIsland = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let res = 0
    const set = new Set()
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1 && !set.has(`${r} ${c}`)) {
                res = Math.max(res, bfs(r, c))
            }
        }
    }
    return res
    
    function bfs(r, c) {
        const q = [[r, c]]
        let res = 0
        while (q.length) {
            const [r, c] = q.shift()
            if (!set.has(`${r} ${c}`)) {
                set.add(`${r} ${c}`)
                res++
                for (const [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                    const rrr = rr + r
                    const ccc = cc + c
                    if (rrr in grid && ccc in grid[rrr] && grid[rrr][ccc] === 1 && !set.has(`${rrr} ${ccc}`)) {
                        q.push([rrr, ccc])
                    }
                }
            }
        }
        return res
    }
}