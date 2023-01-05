/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    const dp = {}
    return helper(n)
    
    function helper(n) {
        if (n in dp) return dp[n]
        if (n === 1) return 0
        let res = Infinity
        if (n % 2 === 0) {
            res = Math.min(res, 1 + helper(n/2))
        } else {
            res = Math.min(res, 1 + Math.min(helper(n-1), helper(n+1)))
        }
        return dp[n] = res
    }
};