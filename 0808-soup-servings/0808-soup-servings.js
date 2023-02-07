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

soupServings = function(n) {
    if (n >= 4800) return 1
    const ops = [[-100, 0], [-75, -25], [-50, -50], [-25, -75]]
    const dp = Array(n+1).fill(0).map(() => Array(n+1).fill(0))
    dp[0].fill(1)
    dp[0][0] = 0.5
    for (let i=1; i <= n; i++) {
        for (let j=1; j <= n; j++) {
            for (const [ii, jj] of ops) {
                const iii = i + ii
                const jjj = j + jj
                const temp = dp[Math.max(0, iii)][Math.max(0, jjj)]
                dp[i][j] += 0.25 * temp
            }
        }
    }
    return dp[n][n]
}