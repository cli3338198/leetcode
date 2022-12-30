function mergeStones(stones: number[], k: number): number {
    const n = stones.length
    if ((n - 1) % (k - 1) !== 0) return -1
    const dp: number[][] = Array(n).fill(0).map(() => Array(n).fill(0))
    const prefixSums = [0]
    for (let i=0; i < n; i++) {
        prefixSums[i + 1] = prefixSums[i] + stones[i]
    }
    for (let len=k; len <= n; len++) {
        for (let i=0; i < n - len + 1; i++) {
            const j = i + len - 1
            dp[i][j] = Infinity
            for (let mid=i; mid < j; mid += k - 1) {
                dp[i][j] = Math.min(dp[i][j], dp[i][mid] + dp[mid+1][j])
            }
            if ((j - i) % (k - 1) === 0) {
                dp[i][j] += prefixSums[j+1] - prefixSums[i]
            }
        }
    }
    return dp[0][n-1]
};