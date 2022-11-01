/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = Array(n).fill(0).map(() => Array(n))
    let left = 0
    let right = n-1
    let top = 0
    let bottom = n-1
    let i = 1
    while (left <= right && top <= bottom) {
        for (let c=left; c <= right; c++) {
            res[top][c] = i
            i++
        }
        top++
        for (let r=top; r <= bottom; r++) {
            res[r][right] = i
            i++
        }
        right--
        if (top > bottom) break
        for (let c=right; c >= left; c--) {
            res[bottom][c] = i
            i++
        }
        bottom--
        if (left > right) break
        for (let r=bottom; r >= top; r--) {
            res[r][left] = i
            i++
        }
        left++
    }
    return res
};