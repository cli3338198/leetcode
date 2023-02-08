function lenLongestFibSubseq(arr: number[]): number {
    const n = arr.length
    const dp: number[][] = Array(n).fill(0).map(() => Array(n).fill(2))
    const map: Record<string, number> = {}
    let res = 0
    for (let i=0; i < n; i++) {
        map[arr[i]] = i
        for (let j=0; j < i; j++) {
            if (arr[i] - arr[j] < arr[j] && arr[i] - arr[j] in map) {
                const k = map[arr[i] - arr[j]]
                dp[j][i] = Math.max(dp[j][i], 1 + dp[k][j])
            }
            res = Math.max(res, dp[j][i])
        }
    }
    return res > 2 ? res : 0
};