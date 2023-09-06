class Solution {
    fun mincostTickets(days: IntArray, costs: IntArray): Int {
        val dp = IntArray(366){1000 * 366}
        dp[0] = 0
        for (day in 1..365) {
            if (!days.contains(day)) {
                dp[day] = dp[day-1]
            } else {
                dp[day] = Math.min(dp[day], costs[0] + dp[Math.max(0, day-1)])
                dp[day] = Math.min(dp[day], costs[1] + dp[Math.max(0, day-7)])
                dp[day] = Math.min(dp[day], costs[2] + dp[Math.max(0, day-30)])
            }
        }
        return dp[365]
    }
}