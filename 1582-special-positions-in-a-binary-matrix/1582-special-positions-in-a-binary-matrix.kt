class Solution {
    fun numSpecial(mat: Array<IntArray>): Int {
        val rows = IntArray(mat.size) {0}
        val cols = IntArray(mat[0].size) {0}
        var res = 0
        for (r in 0..(mat.size-1)) {
            for (c in 0..(mat[r].size-1)) {
                if (mat[r][c] === 1) {
                    rows[r]++
                    cols[c]++
                }
            }
        }
        for (r in 0..(mat.size-1)) {
            for (c in 0..(mat[r].size-1)) {
                if (mat[r][c] === 1 && rows[r] === 1 && cols[c] === 1) {
                    res++
                }
            }
        }
        return res
    }
}