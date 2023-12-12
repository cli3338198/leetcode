function letterCasePermutation(s: string): string[] {
    const dp: Set<string>[] = Array(s.length+1).fill(0).map(() => new Set())
    dp[0].add("")
    for (let i=1; i <= s.length; i++) {
        for (const sub of dp[i-1]) {
            dp[i].add(sub + s[i-1].toLowerCase())
            dp[i].add(sub + s[i-1].toUpperCase())
        }
    }
    return Array.from(dp[s.length])
};