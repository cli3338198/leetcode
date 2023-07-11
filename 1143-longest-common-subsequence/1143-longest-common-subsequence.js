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

longestCommonSubsequence = function(t1, t2) {
    const m = t1.length
    const n = t2.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            if (t1[i-1] === t2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m][n]
}

longestCommonSubsequence = function(t1, t2) {
    const m = t1.length
    const n = t2.length
    let prev = Array(n+1).fill(0)
    for (let i=1; i <= m; i++) {
        let cur = Array(n+1).fill(0)
        for (let j=1; j <= n; j++) {
            if (t1[i-1] === t2[j-1]) {
                cur[j] = 1 + prev[j-1]
            } else {
                cur[j] = Math.max(cur[j-1], prev[j])
            }
        }
        prev = cur
    }
    return prev[n]
}