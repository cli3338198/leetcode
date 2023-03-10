/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = {}
    return helper(0)
    
    function helper(idx) {
        if (idx in dp) return dp[idx]
        if (idx >= s.length) return 1
        if (s[idx] == 0) return 0
        let res = 0
        res += helper(idx+1)
        if (idx + 1 < s.length && Number(s[idx] + s[idx+1]) <= 26) {
            res += helper(idx+2)
        }
        return dp[idx] = res
    }
};

numDecodings = function(s) {
    if (s[0] == 0) return 0
    const n = s.length
    const dp = Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for (let i=2; i <= n; i++) {
        if (s[i-1] != 0) {
            dp[i] += dp[i-1]
        }
        if (s[i-2] == 1 || (s[i-2] == 2 && s[i-1] <= 6)) {
            dp[i] += dp[i-2]
        }
    }
    return dp[n]
}