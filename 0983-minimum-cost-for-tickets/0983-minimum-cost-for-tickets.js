/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const n = days[days.length-1]
    const set = new Set(days)
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 0
    for (let i=1; i <= n; i++) {
        if (!set.has(i)) {
            dp[i] = dp[i-1]
            continue
        }
        dp[i] = Math.min(dp[i], costs[0] + dp[Math.max(0, i-1)])
        dp[i] = Math.min(dp[i], costs[1] + dp[Math.max(0, i-7)])
        dp[i] = Math.min(dp[i], costs[2] + dp[Math.max(0, i-30)])
    }
    return dp[n]
};