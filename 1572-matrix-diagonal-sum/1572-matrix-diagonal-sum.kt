class Solution {
    fun diagonalSum(mat: Array<IntArray>): Int {
        var res = 0
        var left = 0
        var right = mat.size-1
        for (r in 0..(mat.size-1)) {
            if (left === right) {
                res += mat[r][left]
            } else {
                res += mat[r][left] + mat[r][right]
            }
            left++
            right--
        }
        return res
    }
}