/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length
    const set = new Set(wordDict)
    if (!canSplit(s, set)) return []
    const dp = Array(n).fill(0).map(() => ([]))
    for (let i=0; i < n; i++) {
        for (let j=i; j >= 0; j--) {
            const sub = s.substring(j, i+1)
            if (set.has(sub)) {
                for (const k of dp[j-1] || [""]) {
                    dp[i].push(`${k} ${sub}`.trim())
                }
            }
        }
    }
    return dp[n-1]
};

function canSplit(s, set) {
    const n = s.length
    const dp = Array(n+1).fill(false)
    dp[0] = true
    for (let i=1; i <= n; i++) {
        for (let j=0; j < i; j++) {
            const sub = s.substring(j, i)
            if (set.has(sub) && dp[j]) {
                dp[i] = true
            }
        }
    }
    return dp[n]
}