function numDecodings(s: string): number {
    if (s[0] === "0") return 0
    const dp: number[] = Array(s.length+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for (let i=2; i <= s.length; i++) {
        if (s[i-1] !== "0") dp[i] += dp[i-1]
        if ((s[i-2] === "1") || (s[i-2] === "2" && Number(s[i-1]) <= 6)) dp[i] += dp[i-2]
    }
    return dp[s.length]
};