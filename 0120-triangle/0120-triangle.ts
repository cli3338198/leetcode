function minimumTotal(triangle: number[][]): number {
    let dp = triangle.at(-1).slice()
    for (let i=triangle.length-2; i >= 0; i--) {
        const nextDp = triangle[i].slice()
        for (let j=0; j < nextDp.length; j++) {
            nextDp[j] += Math.min(dp[j], dp[j+1])
        }
        dp = nextDp
    }
    return dp[0]
};