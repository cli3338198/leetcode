function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => a[0] - b[0])
    const dp = Array(pairs.length).fill(1)
    let max = 1
    for (let i=1; i < pairs.length; i++) {
        for (let j=0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
};