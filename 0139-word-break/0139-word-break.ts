function wordBreak(s: string, wordDict: string[]): boolean {
    const n = s.length
    const set: Set<string> = new Set(wordDict)
    const dp: boolean[] = Array(n+1).fill(false)
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
};