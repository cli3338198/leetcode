function longestSubsequence(arr: number[], difference: number): number {
    const dp: Record<number, number> = {}
    let max = 1
    for (const currentNumber of arr) {
        const previousNumber = currentNumber - difference
        dp[currentNumber] = 1 + (dp[previousNumber] || 0)
        max = Math.max(max, dp[currentNumber])
    }
    return max
};