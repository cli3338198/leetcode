/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(false))
    for (let i=0; i < n; i++) {
        dp[i][i] = true
    }
    for (let i=0; i < n-1; i++) {
        if (s[i] === s[i+1]) {
            dp[i][i+1] = true
        }
    }
    for (let len=3; len <= n; len++) {
        for (let i=0; i < n - len + 1; i++) {
            const j = i + len - 1
            if (s[i] === s[j] && dp[i+1][j-1]) {
                dp[i][j] = true
            }
        }
    }
    const cuts = Array(n).fill(Infinity)
    cuts[0] = 0
    for (let i=1; i < n; i++) {
        if (dp[0][i]) {
            cuts[i] = 0
        } else {
            for (let j=0; j < i; j++) {
                if (dp[j+1][i]) {
                    cuts[i] = Math.min(cuts[i], 1 + cuts[j])
                }
            }
        }
    }
    return cuts[n-1]
};