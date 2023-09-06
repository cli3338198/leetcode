class Solution {
    fun canReach(s: String, minJump: Int, maxJump: Int): Boolean {
        val n = s.length
        var windowOfJumps = 0
        val dp = BooleanArray(n){false}
        dp[0] = true
        for (jumpSpot in 1..n-1) {
            if (jumpSpot >= minJump) {
                windowOfJumps += if (jumpSpot - minJump >= 0 && dp[jumpSpot - minJump] === true) 1 else 0
            }
            if (jumpSpot > maxJump) {
                windowOfJumps -= if (jumpSpot - maxJump - 1 >= 0 && dp[jumpSpot - maxJump - 1] === true) 1 else 0
            }
            if (windowOfJumps > 0 && s[jumpSpot] === '0'.toChar()) {
                dp[jumpSpot] = true
            }
        }
        return dp[n-1]
    }
}