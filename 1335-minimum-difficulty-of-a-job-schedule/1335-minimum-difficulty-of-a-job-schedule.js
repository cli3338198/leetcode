/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, days) {
    const n = jobDifficulty.length
    const dp = Array(n+1).fill(0).map(() => Array(days+1).fill(Infinity))
    dp[0][0] = 0
    for (let i=1; i <= n; i++) {
        let max = jobDifficulty[i-1]
        for (let j=i-1; j >= 0; j--) {
            for (let d=1; d <= days; d++) {
                if (dp[j][d-1] !== Infinity) {
                    dp[i][d] = Math.min(dp[i][d], dp[j][d-1] + max)
                }
            }
            if (j-1 >= 0) {
                max = Math.max(max, jobDifficulty[j-1])
            }
        }
    }
    return dp[n][days] === Infinity ? -1 : dp[n][days]
};