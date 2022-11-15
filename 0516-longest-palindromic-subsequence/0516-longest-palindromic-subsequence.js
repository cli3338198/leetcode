/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length
    const dp = Array(n).fill(0).map(() => Array(n))
    for (let i=0; i < n; i++) {
        dp[i][i] = 1
    }
    for (let i=0; i < n-1; i++) {
        if (s[i] === s[i+1]) {
            dp[i][i+1] = 2
        } else {
            dp[i][i+1] = 1
        }
    }
    for (let len=3; len <= n; len++) {
        for (let i=0; i < n - len + 1; i++) {
            const j = i + len - 1
            if (s[i] === s[j]) {
                dp[i][j] = 2 + dp[i+1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }
    return dp[0][n-1]
};