function combinationSum(candidates: number[], target: number): number[][] {
    const dp = Array(target+1).fill(0).map(() => [])
    dp[0].push([])
    for (const c of candidates) {
        for (let t=1; t <= target; t++) {
            if (c <= t) {
                for (const sub of dp[t-c]) {
                    dp[t].push([...sub, c])
                }
            }
        }
    }
    return dp.at(-1)
    
    //
    
    const res: number[][] = []
    backtrack(0, target, [])
    return res
    
    function backtrack(i: number, target: number, curList: number[]) {
        if (target === 0) {
            res.push(curList)
            return
        }
        for (let j=i; j < candidates.length; j++) {
            if (candidates[j] <= target) {
                backtrack(j, target-candidates[j], [...curList, candidates[j]])
            }
        }
    }
};