/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(false))
    let res = 0
    for (let i=0; i < n; i++) {
        dp[i][i] = true
        res++
    }
    for (let i=0; i < n-1; i++) {
        if (s[i] === s[i+1]) {
            dp[i][i+1] = true
            res++
        }
    }
    for (let len=3; len <= n; len++) {
        for (let i=0; i < n-len+1; i++) {
            const j = i+len-1
            if (s[i] === s[j] && dp[i+1][j-1]) {
                dp[i][j] = true
                res++
            }
        }
    }
    return res
};