/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    const squares = []
    for (let i=1; i <= n; i++) {
        for (let j=1; j <= i; j++) {
            if (j * j === i) {
                squares.push(i)
            }
        }
    }
    const dp = {}
    return helper(n)
    
    function helper(n) {
        if (n === 0) return false
        if (n === 1) return true
        if (n in dp) return dp[n]
        for (let i=squares.length-1; i >= 0; i--) {
            if (squares[i] <= n && !helper(n-squares[i])) {
                return dp[n] = true
            }
        }
        return dp[n] = false
    }
};