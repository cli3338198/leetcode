/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = {}
    wordDict = new Set(wordDict)
    return helper(s)
    
    function helper(s) {
        if (!s.length) return true
        if (s in dp) return dp[s]
        for (let i=1; i <= s.length; i++) {
            const word = s.substring(0, i)
            if (wordDict.has(word)) {
                if (helper(s.substring(i))) {
                    return true
                }
            }
        }
        return dp[s] = false
    }
};