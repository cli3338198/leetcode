function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b)
    const dp: Record<string, number[][]> = {}
    dp[0] = [[]]
    for (const candidate of candidates) {
        for (let t=1; t <= target; t++) {
            if (!(t in dp)) dp[t] = []
            for (const sub of dp[t-candidate] || []) {
                dp[t].push([...sub, candidate])
            }
        }
    }
    return dp[target]
};