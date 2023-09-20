class Solution {
    fun minimumTotal(triangle: List<List<Int>>): Int {
        // var dp = triangle[triangle.size-1]
        // for (i in triangle.size-2 downTo 0) {
        //     var nextDp = arrayOf<Int>([])
        //     for (j in triangle[i]) {
        //         nextDp.push(triangle[i][j] + Math.min(dp[j], dp[j+1]))
        //     }
        //     dp = nextDp
        // }
        // return dp[0]
        
        val dp = HashMap<String, Int>()
        return dfs(dp, triangle, 0, 0)
    }
    
    fun dfs(dp: HashMap<String, Int>, triangle: List<List<Int>>, r: Int, c: Int): Int {
        val key = "$r $c"
        if (dp.containsKey(key)) {
            return dp[key]!!
        }
        if (r === triangle.size) {
            return 0
        }
        val ans = triangle[r][c] + Math.min(dfs(dp, triangle, r+1, c), dfs(dp, triangle, r+1, c+1))
        dp[key] = ans
        return ans
    }
}