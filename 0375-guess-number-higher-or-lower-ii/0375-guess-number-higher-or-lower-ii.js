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

getMoneyAmount = function(n) {
    if (n === 1) return 0
    const dp = Array(n+2).fill(0).map(() => Array(n+2).fill(0))
    for (let len=2; len <= n; len++) {
        for (let i=0; i <= n-len+1; i++) {
            const j = i+len-1
            let min = Infinity
            for (let k=i; k <= j; k++) {
                min = Math.min(min, k + Math.max(dp[i][k-1], dp[k+1][j]))
            }
            dp[i][j] = min
        }
    }
    return dp[1][n]
}