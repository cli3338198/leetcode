function letterCasePermutation(s: string): string[] {
    const res: string[] = []
    backtrack(0, "")
    return res
    
    function backtrack(i: number, substring: string): void {
        if (i >= s.length) {
            res.push(substring)
            return
        }
        if (s[i].match(/[a-zA-Z]/)) {
            backtrack(i+1, substring + s[i].toLowerCase())
            backtrack(i+1, substring + s[i].toUpperCase())
        } else {
            backtrack(i+1, substring + s[i])
        }
    }
    
    //
    
    const dp: string[][] = Array(s.length+1).fill(0).map(() => [])
    dp[0].push("")
    for (let i=1; i <= s.length; i++) {
        for (const sub of dp[i-1]) {
            dp[i].push(sub + s[i-1].toLowerCase())
            if (s[i-1].toLowerCase() !== s[i-1].toUpperCase()) dp[i].push(sub + s[i-1].toUpperCase())
        }
    }
    return dp.at(-1)
};