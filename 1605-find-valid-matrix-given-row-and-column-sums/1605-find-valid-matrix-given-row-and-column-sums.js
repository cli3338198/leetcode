/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const rows = rowSum.length
    const cols = colSum.length
    const mat = Array(rows).fill(0).map(() => Array(cols).fill(0))
    while (rowSum.some(x => x > 0) || colSum.some(x => x > 0)) {
        const [rMin, rIdx] = getMin(rowSum)
        const [cMin, cIdx] = getMin(colSum)
        if (rMin < cMin) {
            rowSum[rIdx] -= rMin
            for (let c=0; c < colSum.length; c++) {
                if (colSum[c] >= rMin) {
                    mat[rIdx][c] = rMin
                    colSum[c] -= rMin
                    break
                }
            }
        } else {
            colSum[cIdx] -= cMin
            for (let r=0; r < rowSum.length; r++) {
                if (rowSum[r] >= cMin) {
                    mat[r][cIdx] = cMin
                    rowSum[r] -= cMin
                    break
                }
            }
        }
    }
    return mat
    
    function getMin(arr) {
        let min = Infinity
        let idx = null
        for (let i=0; i < arr.length; i++) {
            if (arr[i] > 0 && arr[i] < min) {
                min = arr[i]
                idx = i
            }
        }
        return [min, idx]
    }
};

restoreMatrix = function(rowSum, colSum) {
    const rows = rowSum.length
    const cols = colSum.length
    const mat = Array(rows).fill(0).map(() => Array(cols).fill(0))
    let r = 0
    let c = 0
    while (r < rows && c < cols) {
        mat[r][c] = Math.min(rowSum[r], colSum[c])
        rowSum[r] -= mat[r][c]
        colSum[c] -= mat[r][c]
        if (rowSum[r] === 0) r++
        if (colSum[c] === 0) c++
    }
    return mat
}