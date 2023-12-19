function partition(s: string): string[][] {
    const n = s.length
    const dp: string[][][][] = Array(n).fill(0).map(() => Array(n).fill(0).map(() => []))
    for (let i=0; i < n; i++) {
        dp[i][i].push([s[i]])
    }
    for (let i=0; i < n-1; i++) {
        if (s[i] === s[i+1]) {
            dp[i][i+1].push([s[i] + s[i+1]])
        }
        dp[i][i+1].push([s[i], s[i+1]])
    }
    for (let len=3; len <= n; len++) {
        for (let i=0; i < n-len+1; i++) {
            const j = i+len-1
            if (s[i] === s[j] && dp[i+1][j-1].length > 0) {
                dp[i][j].push([s.substring(i, j+1)])
                for (const sub of dp[i+1][j-1]) {
                    dp[i][j].push([s[i], ...sub, s[j]])
                }
            }
            for (const sub of dp[i][j-1]) {
                dp[i][j].push([...sub, s[j]])
            }
            for (const sub of dp[i+1][j]) {
                dp[i][j].push([s[i], ...sub])
            }
        }
    }
    return Array.from(new Set(dp[0][n-1].map(x => JSON.stringify(x)))).map(x => JSON.parse(x))
    
    //
    
    let res: string[][] = []
    backtrack(s, [])
    return res
    
    function backtrack(s: string, curList: string[]) {
        if (!s.length) return res.push(curList)
        for (let i=1; i <= s.length; i++) {
            const substring = s.substring(0, i)
            if (isPalindrome(substring)) {
                backtrack(s.substring(i), [...curList, substring])
            }
        }
    }
    
    // 
    
    if (s.length === 0) return [[]]
    res = []
    for (let i=1; i <= s.length; i++) {
        const curSubstring = s.substring(0, i)
        if (isPalindrome(curSubstring)) {
            for (const sub of partition(s.substring(i))) {
                res.push([curSubstring, ...sub])
            }
        }
    }
    return res
};

function isPalindrome(s: string) {
    for (let l=0; l < Math.floor(s.length/2); l++) {
        const r = s.length-1-l
        if (s[l] !== s[r]) return false
    }
    return true
}

function partition(s: string): string[][] {
    const n = s.length
    const dp: string[][][] = Array(n+1).fill(0).map(() => ([]))
    dp[n].push([])
    for (let i=n-1; i >= 0; i--) {
        for (let j=i+1; j <= n; j++) {
            const sub = s.substring(i, j)
            if (isPalindrome(sub)) {
                for (const r of dp[j]) {
                    dp[i].push([sub, ...r])
                }
            }
        }
    }
    return dp[0]
};

function isPalindrome(s: string): boolean {
    let a = 0
    let b = s.length-1
    while (a < b) {
        if (s[a] !== s[b]) return false
        a++
        b--
    }
    return true
}
