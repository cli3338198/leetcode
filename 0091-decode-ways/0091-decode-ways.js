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