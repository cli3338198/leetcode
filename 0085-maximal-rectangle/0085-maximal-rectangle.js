/**
 * @param {character[][]} mat
 * @return {number}
 */
var maximalRectangle = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            mat[r][c] = +mat[r][c]
        }
    }
    for (let r=1; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (mat[r][c] === 1) {
                mat[r][c] += mat[r-1][c]
            }
        }
    }
    let res = 0
    for (const row of mat) {
        res = Math.max(res, maxHistogram(row))
    }
    return res
    
    function maxHistogram(h) {
        let stack = []
        const left = []
        for (let i=0; i < h.length; i++) {
            while (stack.length && h[stack[stack.length-1]] >= h[i]) stack.pop()
            left[i] = stack.length ? stack[stack.length-1] + 1 : 0
            stack.push(i)
        }
        stack = []
        const right = []
        for (let i=h.length-1; i >= 0; i--) {
            while (stack.length && h[stack[stack.length-1]] >= h[i]) stack.pop()
            right[i] = stack.length ? stack[stack.length-1] - 1 : h.length - 1
            stack.push(i)
        }
        let res = 0
        for (let i=0; i < h.length; i++) {
            res = Math.max(res, h[i] * (right[i] - left[i] + 1))
        }
        return res
    }
};