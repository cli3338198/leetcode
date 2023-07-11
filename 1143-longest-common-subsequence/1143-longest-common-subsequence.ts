function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length, n = text2.length
    let prev: number[] = Array(n+1).fill(0)
    for (let i=1; i <= m; i++) {
        const cur: number[] = Array(n+1).fill(0)
        for (let j=1; j <= n; j++) {
            if (text1[i-1] === text2[j-1]) {
                cur[j] = 1 + prev[j-1]
            } else {
                cur[j] = Math.max(cur[j-1], prev[j])
            }
        }
        prev = cur
    }
    return prev[n]
};