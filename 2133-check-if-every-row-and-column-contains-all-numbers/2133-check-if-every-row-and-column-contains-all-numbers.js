/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const n = matrix.length
    const map = {}
    for (let r=0; r < n; r++) {
        for (let c= 0; c < n; c++) {
            const row = `r${r}`
            const col = `c${c}`
            map[row] = map[row] || new Set()
            map[col] = map[col] || new Set()
            if (map[row].has(matrix[r][c])) return false
            map[row].add(matrix[r][c])
            if (map[col].has(matrix[r][c])) return false
            map[col].add(matrix[r][c])
        }
    }
    return Object.values(map).every(isValidSet)
    
    function isValidSet(set) {
        for (let i=1; i <= n; i++) {
            if (!set.has(i)) return false
        }
        return true
    }
};


