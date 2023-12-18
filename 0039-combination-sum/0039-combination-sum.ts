function combinationSum(candidates: number[], target: number): number[][] {
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