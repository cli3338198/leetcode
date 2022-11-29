/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    const dp = {}
    return helper(1, n)
    
    function helper(lo, hi) {
        const key = `${lo} ${hi}`
        if (lo >= hi) return 0
        if (key in dp) return dp[key]
        let res = Infinity
        for (let i=lo; i <= hi; i++) {
            res = Math.min(
                res, 
                i + Math.max(helper(i+1, hi), helper(lo, i-1))
            )
        }
        return dp[key] = res
    }
};