function findLongestChain(pairs: number[][]): number {
    // sorting by end is greedy, can see the future
    
    pairs.sort((a, b) => a[1] - b[1])
    let last = pairs[0][1], res = 1
    for (let i=1; i < pairs.length; i++) {
        const [start, end] = pairs[i]
        if (start > last) {
            res++
            last = end
        }
    }
    return res
    
    // sorting by start is dp, cannot see the future
    
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