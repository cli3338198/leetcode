/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const dp = {}
    return helper(0, 0)
    
    function helper(i, j) {
        const key = `${i} ${j}`
        if (i >= word1.length) return word2.length - j
        if (j >= word2.length) return word1.length - i
        if (key in dp) return dp[key]
        if (word1[i] === word2[j]) return dp[key] = helper(i + 1, j + 1)
        return dp[key] = 1 + Math.min(helper(i+1, j+1), helper(i+1, j), helper(i, j+1))
    }
};