/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const n = matrix.length
    for (let r=0; r < n; r++) {
        const set = new Set()
        for (let c=0; c < n; c++) {
            const val = matrix[r][c]
            if (set.has(val)) return false
            set.add(val)
        }
    }
    for (let c=0; c < n; c++) {
        const set = new Set()
        for (let r=0; r < n; r++) {
            const val = matrix[r][c]
            if (set.has(val)) return false
            set.add(val)
        }
    }
    return true
};


