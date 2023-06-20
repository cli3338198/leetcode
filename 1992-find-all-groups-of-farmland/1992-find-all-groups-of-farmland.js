/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const rows = land.length
    const cols = land[0].length
    const seen = new Set()
    const res = []
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            const key = `${r} ${c}`
            if (land[r][c] === 1 && !seen.has(key)) {
                res.push(dfs(r, c, [r, c, r, c]))
            }
        }
    }
    return res
    
    function dfs(r, c, coords) {
        const key = `${r} ${c}`
        if (r in land && c in land[r] && land[r][c] === 1 && !seen.has(key)) {
            seen.add(key)
            coords[2] = Math.max(coords[2], r)
            coords[3] = Math.max(coords[3], c)
            for (const [rr, cc] of [[0, 1], [1, 0]]) {
                const rrr = r + rr
                const ccc = c + cc
                dfs(rrr, ccc, coords)
            }
        }
        return coords
    }
};

findFarmland = function(land) {
    const rows = land.length
    const cols = land[0].length
    const res = []
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (land[r][c] === 1) {
                let rr = r, cc = c
                for (rr = r; rr < rows && land[rr][c] === 1; rr++) {
                    for (cc = c; cc < cols && land[rr][cc] === 1; cc++) {
                        land[rr][cc] = 0
                    }
                }
                res.push([r, c, rr-1, cc-1])
            }
        }
    }
    return res
}