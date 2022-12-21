function longestValidParentheses(s: string): number {
    const n = s.length
    const dp = Array(n).fill(0)
    let res = 0
    for (let i=1; i < n; i++) {
        if (s[i-1] === '(' && s[i] === ')') {
            dp[i] = 2 + (dp[i-2] || 0)
        }
        if (s[i-1] === ")" && s[i] === ')' && s[i - dp[i-1] - 1] === '(') {
            dp[i] = 2 + dp[i-1] + (dp[i - dp[i-1] - 2] || 0)
        }
        res = Math.max(res, dp[i])
    }
    return res    
};