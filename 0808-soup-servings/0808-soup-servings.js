/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    const ops = [[-100, 0], [-75, -25], [-50, -50], [-25, -75]]
    const dp = {}
    if (n >= 4800) return 1
    return helper(n, n)
    
    function helper(m, n) {
        const key = `${m} ${n}`
        if (key in dp) return dp[key]
        if (m <= 0 && n <= 0) return 0.5
        if (m <= 0) return 1
        if (n <= 0) return 0
        let res = 0
        for (const [mm, nn] of ops) {
            res += helper(m + mm, n + nn) * 0.25
        }
        return dp[key] = res
    }
};