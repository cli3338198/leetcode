function isInterleave(s1: string, s2: string, s3: string): boolean {
    const dp: Record<string, boolean> = {}
    return helper(0, 0)
    
    function helper(m: number, n: number): boolean {
        const key = `${m} ${n}`
        if (key in dp) return dp[key]
        if (m === s1.length && n === s2.length) {
            return m + n === s3.length
        }
        let res = false
        const o = m + n
        if (m < s1.length && s1[m] === s3[o]) {
            res = res || helper(m+1, n)
        }
        if (n < s2.length && s2[n] === s3[o]) {
            res = res || helper(m, n+1)
        }
        return dp[key] = res
    }
};