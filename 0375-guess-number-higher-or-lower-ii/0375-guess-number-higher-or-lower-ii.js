/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    const dp = {}
    return helper(1, n)
    
    function helper(lo, hi) {
        const key = `${lo} ${hi}`
        if (key in dp) return dp[key]
        if (lo >= hi) return 0
        let res = Infinity
        for (let i=lo; i <= hi; i++) {
            res = Math.min(res, i + Math.max(helper(lo, i-1), helper(i+1, hi)))
        }
        return dp[key] = res
    }
};