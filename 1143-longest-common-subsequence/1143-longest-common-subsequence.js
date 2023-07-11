/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = {}
    return lcs(0, 0)
    
    function lcs(i, j) {
        const key = `${i} ${j}`
        if (i === text1.length || j === text2.length) return 0
        if (key in dp) return dp[key]
        if (text1[i] === text2[j]) {
            return 1 + lcs(i+1, j+1)
        } else {
            return dp[key] = Math.max(lcs(i+1, j), lcs(i, j+1))
        }
    }
};