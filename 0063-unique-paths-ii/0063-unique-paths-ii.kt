class Solution {
    fun uniquePathsWithObstacles(g: Array<IntArray>): Int {
        if (g[0][0] === 1 || g[g.size-1][g[0].size-1] === 1) return 0
        for (r in 0..g.size-1) {
            for (c in 0..g[r].size-1) {
                if (r === 0 && c === 0) {
                    g[r][c] = 1
                } else if (g[r][c] === 1) {
                    g[r][c] = 0
                } else if (r === 0) {
                    g[r][c] = g[r][c-1]
                } else if (c === 0) {
                    g[r][c] = g[r-1][c]
                } else {
                    g[r][c] = g[r-1][c] + g[r][c-1]
                }
            }
        }
        return g[g.size-1][g[0].size-1]
    }
}