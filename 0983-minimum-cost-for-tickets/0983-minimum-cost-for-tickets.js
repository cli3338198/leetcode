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

mincostTickets = function(days, costs) {
    const dp = {}
    const n = days.length
    return helper(0, 0)
    
    function helper(idx, daysCovered) {
        const key = `${idx} ${daysCovered}`
        if (idx >= n) return 0
        if (key in dp) return dp[key]
        if (daysCovered >= days[idx]) return helper(idx+1, daysCovered)
        let res = Infinity
        res = Math.min(res, costs[0] + helper(idx+1, days[idx]))
        res = Math.min(res, costs[1] + helper(idx+1, days[idx]+6))
        res = Math.min(res, costs[2] + helper(idx+1, days[idx]+29))
        return dp[key] = res
    }
}
