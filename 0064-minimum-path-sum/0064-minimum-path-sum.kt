class Solution {
    fun minPathSum(grid: Array<IntArray>): Int {
        for (r in 0..grid.size-1) {
            for (c in 0..grid[0].size-1) {
                if (r === 0 && c === 0) {
                    continue
                } else if (r === 0) {
                    grid[r][c] += grid[r][c-1]
                } else if (c === 0) {
                    grid[r][c] += grid[r-1][c]
                } else {
                    grid[r][c] += Math.min(grid[r-1][c], grid[r][c-1])
                }
            }
        }
        return grid[grid.size-1][grid[0].size-1]
    }
}