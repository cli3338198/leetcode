/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(""))
    let res = ""
    for (let i=0; i < n; i++) {
        dp[i][i] = s[i]
        res = dp[i][i]
    }
    for (let i=0; i < n-1; i++) {
        if (s[i] === s[i+1]) {
            dp[i][i+1] = s[i] + s[i+1]
            if (dp[i][i+1].length > res.length) {
                res = dp[i][i+1]
            }
        }
    }
    for (let len=3; len <= n; len++) {
        for (let i=0; i < n - len + 1; i++) {
            const j = i + len - 1
            if (s[i] === s[j] && dp[i+1][j-1].length) {
                dp[i][j] = s[i] + dp[i+1][j-1] + s[j]
                if (dp[i][j].length > res.length) {
                    res = dp[i][j]
                }
            }
        }
    }
    return res
};