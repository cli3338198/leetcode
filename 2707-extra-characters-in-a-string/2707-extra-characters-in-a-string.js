/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const n = s.length
    dictionary = new Set(dictionary)
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 0
    for (let i=1; i <= n; i++) {
        dp[i] = 1 + dp[i-1]
        for (let j=0; j < i; j++) {
            if (dictionary.has(s.substring(j, i))) {
                dp[i] = Math.min(dp[i], dp[j])
            }
        }
    }
    return dp[n]
};