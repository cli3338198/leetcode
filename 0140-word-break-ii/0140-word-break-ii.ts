function wordBreak(s: string, wordDict: string[]): string[] {
    const n = s.length
    const set: Set<string> = new Set(wordDict)
    if (!canSplit(s, set)) return []
    const dp: string[][] = Array(n).fill(0).map(() => ([]))
    for (let i=0; i < n; i++) {
        for (let j=i; j >= 0; j--) {
            const sub = s.substring(j, i+1)
            if (set.has(sub)) {
                for (const k of dp[j-1] || [""]) {
                    dp[i].push(k + " " + sub)
                }
            }
        }
    }
    return dp[n-1].map(s => s.trim())
};

function canSplit(s: string, set: Set<string>): boolean {
    const n = s.length
    const dp: boolean[] = Array(n+1).fill(false)
    dp[0] = true
    for (let i=1; i <= n; i++) {
        for (let j=0; j < i; j++) {
            if (set.has(s.substring(j, i)) && dp[j]) {
                dp[i] = true
            }
        }
    }
    return dp[n]
}