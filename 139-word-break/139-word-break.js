/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length
    const set = new Set(wordDict)
    const dp = Array(n+1).fill(false)
    dp[0] = true
    for (let i=1; i <= n; i++) {
        for (let j=0; j < i; j++) {
            if (set.has(s.substring(i, j)) && dp[j]) {
                dp[i] = true
            }
        }
    }
    return dp[n]
};