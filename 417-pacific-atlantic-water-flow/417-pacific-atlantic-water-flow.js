/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const rows = heights.length
    const cols = heights[0].length
    const pac = new Set()
    const atl = new Set()
    const res = []
    
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (r === 0 || c === 0) {
                dfs(r, c, heights[r][c], pac)
            }
            if (r === rows-1 || c === cols-1) {
                dfs(r, c, heights[r][c], atl)
            }
        }
    }
    
    
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            const key = JSON.stringify([r, c])
            if (pac.has(key) && atl.has(key)) {
                res.push([r, c])
            }
        }
    }
    
    return res
    
    function dfs(r, c, prevHeight, set) {
        const key = JSON.stringify([r, c])
        if (!(r in heights) || !(c in heights[r]) || heights[r][c] < prevHeight || set.has(key)) return
        set.add(key)
        dfs(r+1, c, heights[r][c], set)
        dfs(r-1, c, heights[r][c], set)
        dfs(r, c+1, heights[r][c], set)
        dfs(r, c-1, heights[r][c], set)
    }
};