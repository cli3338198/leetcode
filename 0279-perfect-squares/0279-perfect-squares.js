/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const squares = findSquares(n)
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 0
    dp[1] = 1 
    for (let i=2; i <= n; i++) {
        for (const sqr of squares) {
            if (sqr <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i-sqr])
            }
        }
    }
    return dp[n]
    
    function findSquares(n) {
        const res = []
        for (let i=1; i * i <= n; i++) {
            res.push(i * i)
        }
        return new Set(res)
    }
};