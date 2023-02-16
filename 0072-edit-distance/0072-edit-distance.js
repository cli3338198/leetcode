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
        if (word1[i] === word2[j]) return dp[key] = helper(i+1, j+1)
        return dp[key] = 1 + Math.min(helper(i+1, j), helper(i, j+1), helper(i+1, j+1))
    }
};

minDistance = function(word1, word2) {
    const m = word1.length
    const n = word2.length
    const dp = Array(m+1).fill(0).map((_,i) => Array(n+1).fill(0).map((_,j) => i === 0 ? j : j === 0 ? i : 0))
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
            }
        }
    }
    return dp[m][n]
}