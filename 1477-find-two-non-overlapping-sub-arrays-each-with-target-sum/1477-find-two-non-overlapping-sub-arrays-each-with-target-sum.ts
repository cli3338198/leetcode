function minSumOfLengths(arr: number[], target: number): number {
    return helper(arr, target, 2)
    
    function helper(arr: number[], target: number, k: number): number {
        const n = arr.length
        const dp: number[][] = Array(n+1).fill(0).map(() => Array(k+1).fill(Infinity))
        const prefixSums: Record<string, number> = {}
        prefixSums[0] = 0
        let sum = 0
        for (let i=0; i <= n; i++) {
            dp[i][0] = 0
        }
        for (let i=1; i <= n; i++) {
            let d = -1
            sum += arr[i-1]
            prefixSums[sum] = i
            if (sum - target in prefixSums) {
                d = prefixSums[sum - target]
            }
            for (let j=1; j <= k; j++) {
                dp[i][j] = Math.min(dp[i][j], dp[i-1][j])
                if (d !== -1) {
                    dp[i][j] = Math.min(dp[i][j], dp[d][j-1] + i - d)
                }
            }
        }
        if (dp[n][k] >= Infinity) return -1
        return dp[n][k]
    }
};
