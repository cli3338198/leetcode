class Solution {
    fun countNegatives(grid: Array<IntArray>): Int {
        var res = 0
        for (i in grid.indices) {
            val row = grid[i]
            var l = 0
            var r = row.size-1
            while (l <= r) {
                val m = ((l+r)/2)
                if (row[m] < 0) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            }
            res += row.size - l
        }
        return res
    }
}