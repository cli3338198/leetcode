/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    if (n === 2) return true
    if (n < 2) return false
    for (let x=1; x < n; x++) {
        if (n % x === 0 && !divisorGame(n - x)) return true
    }
    return false
};

divisorGame = function(n) {
    const dp = {}
    return helper(n)
    
    function helper(n) {
        if (n === 2) return true
        if (n < 2) return false
        if (n in dp) return dp[n]
        let res = false
        for (let x=1; x < n; x++) {
            if (n % x === 0 && !divisorGame(n - x)) {
                res = true
                break
            }
        }
        return dp[n] = res
    }
}

divisorGame = function(n) {
    const dp = Array(n+1).fill(false)
    dp[2] = true
    for (let m = 3; m <= n; m++) {
        for (let x=1; x < m; x++) {
            if (m % x === 0 && !dp[m - x]) dp[m] = true
        }
    }
    return dp[n]
}