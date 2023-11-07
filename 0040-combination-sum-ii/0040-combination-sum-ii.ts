function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b)
    const dp = Array(target + 1).fill(0).map(_ => [])
    dp[0].push([])
    for (const n of candidates) {
        for (let t = target; t >= n; t--) {
            for (const combo of dp[t - n]) {
                const newCombo = combo.concat(n)
                if (!isDuplicate(dp[t], newCombo)) {
                    dp[t].push(newCombo)
                }
            }
        }
    }
    return dp[target]
    
    function isDuplicate(combos, newCombo) {
        for (const combo of combos) {
            if (combo.length === newCombo.length && combo.every((v, i) => v === newCombo[i])) {
                return true
            }
        }
        return false
    }
};