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