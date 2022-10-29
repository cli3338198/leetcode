/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const rows = matrix.length
    const cols = matrix[0].length
    let lo = matrix[0][0]
    let hi = matrix[rows-1][cols-1]
    while (lo < hi) {
        const m = Math.floor((lo + hi) / 2)
        const count = getRank(m)
        if (count < k) {
            lo = m + 1
        } else {
            hi = m
        }
    }
    return lo
    
    function getRank(target) {
        let count = 0
        let r = rows-1
        let c = 0
        while (r >= 0 && c < rows) {
            if (matrix[r][c] > target) {
                r--
            } else {
                count += r + 1
                c++
            }
        }
        return count
    }
};