class Solution {
    fun updateMatrix(mat: Array<IntArray>): Array<IntArray> {
        val rows = mat.size
        val cols = mat[0].size
        for (r in 0..rows-1) {
            for (c in 0..cols-1) {
                if (mat[r][c] !== 0) {
                    val up = if (r-1 >= 0) mat[r-1][c] else Math.max(rows, cols)
                    val left = if (c-1 >= 0) mat[r][c-1] else Math.max(rows, cols)
                    mat[r][c] = 1 + Math.min(up, left)
                }
            }
        }
        for (r in rows-1 downTo 0) {
            for (c in cols-1 downTo 0) {
                if (mat[r][c] !== 0) {
                    val down = if (r+1 < rows) mat[r+1][c] else Math.max(rows, cols)
                    val right = if (c+1 < cols) mat[r][c+1] else Math.max(rows, cols)
                    mat[r][c] = Math.min(mat[r][c], 1 + Math.min(down, right))
                }
            }
        }
        return mat
    }
}