function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length
    const freq: Record<string, number>[] = Array(n+1).fill(0).map(() => ({}))
    for (let i=1; i <= n; i++) {
        const n1 = A[i-1], n2 = B[i-1]
        freq[i] = {...freq[i-1]}
        freq[i][n1] = freq[i][n1] + 1 || 1
        freq[i][n2] = freq[i][n2] + 1 || 1
    }
    const res: number[] = Array(n+1).fill(0)
    for (let i=1; i <= n; i++) {
        for (const candidate in freq[i]) {
            if (freq[i][candidate] > 1) res[i]++
        }
    }
    return res.slice(1)
};