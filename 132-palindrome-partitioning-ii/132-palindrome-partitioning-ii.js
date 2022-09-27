/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(word) {
    const n = word.length
    const dp = []
    for (let i=0; i < n; i++) {
        dp[i] = Array(n).fill(0)
    }
    for (let i=0; i < n; i++) {
        dp[i][i] = 1
    }
    for (let i=0; i < n-1; i++) {
        if (word[i] === word[i+1]) {
            dp[i][i+1] = 1
        }
    }
    for (let len=3; len <= n; len++) {
        for (let i=0; i < n - len + 1; i++) {
            const j = i + len - 1
            if (word[i] === word[j] && dp[i+1][j-1]) {
                dp[i][j] = 1
            }
        }
    }
    const cuts = Array(n).fill(Infinity)
    for (let i=0; i < n; i++) {
        if (dp[0][i]) {
            cuts[i] = 0
        } else {
            for (let j=0; j < i; j++) {
                if (dp[j+1][i]) {
                    cuts[i] = Math.min(cuts[i], cuts[j] + 1)
                }
            }
        }
    }
    return cuts[n-1]
};