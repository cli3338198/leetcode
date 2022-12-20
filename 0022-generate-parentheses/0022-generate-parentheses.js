/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const dp = Array(n+2).fill(0).map(() => Array(n+1).fill(0).map(() => ([])))
    dp[1][1].push("(")
    for (let open=1; open < n + 2; open++) {
        for (let close=1; close < n + 1; close++) {
            if (open - 1 > close) continue
            for (const k of dp[open-1][close]) {
                dp[open][close].push(k + ")")
            }
            for (const k of dp[open][close-1]) {
                dp[open][close].push(k + "(")
            }
        }
    }
    return dp[n+1][n]
};