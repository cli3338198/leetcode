/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    const dp = Array(n+1).fill(false)
    dp[1] = true
    for (let i=2; i <= n; i++) {
        for (let j=1; j <= 3 && i-j in dp; j++) {
            dp[i] = dp[i] || !dp[i-j]
        }
    }
    return dp[n]
};

canWinNim = function(n) {
    return !!(n % 4)
}