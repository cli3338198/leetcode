/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length
    let left = 0, right = n - 1
    while (left < right) {
        for (let i=0; i < right - left; i++) {
            const top = left, bottom = right
            const topleft = matrix[top][left + i]
            matrix[top][left + i] = matrix[bottom - i][left]
            matrix[bottom - i][left] = matrix[bottom][right - i]
            matrix[bottom][right - i] = matrix[top + i][right]
            matrix[top + i][right] = topleft
        }
        left++
        right--
    }
};