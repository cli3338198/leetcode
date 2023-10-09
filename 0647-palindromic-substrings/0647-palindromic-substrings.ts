function countSubstrings(s: string): number {
    const dp: boolean[][] = Array(s.length).fill(0).map(() => Array(s.length).fill(0))
    for (let i=0; i < s.length; i++) {
        dp[i][i] = true
    }
    for (let i=0; i < s.length-1; i++) {
        if (s[i] === s[i+1]) dp[i][i+1] = true
    }
    for (let len=3; len <= s.length; len++) {
        for (let left=0; left < s.length-len+1; left++) {
            const right = left+len-1
            if (s[left] === s[right] && dp[left+1][right-1]) {
                dp[left][right] = true
            }
        }
    }
    return dp.reduce((acc, row) => acc + row.reduce((acc, cell) => acc + (cell ? 1 : 0), 0), 0)
};