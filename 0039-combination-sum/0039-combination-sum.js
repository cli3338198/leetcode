/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    backtrack(0, [], target)
    return res
    
    function backtrack(idx, curList, target) {
        if (target === 0) {
            return res.push(curList)
        } else {
            for (let i=idx; i < candidates.length; i++) {
                if (candidates[i] <= target) {
                    backtrack(i, [...curList, candidates[i]], target-candidates[i])   
                }
            }
        }
    }
};

combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    const dp = Array(target+1).fill(0).map(() => ([]))
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
    return dp[target]
}

combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    const dp = {}
    dp[0] = [[]]
    for (const c of candidates) {
        for (let t=1; t <= target; t++) {
            if (c <= t) {
                if (!(t in dp)) dp[t] = []
                for (const sub of dp[t-c] || []) {
                    dp[t].push([...sub, c])
                }
            }
        }
    }
    // ┌─────────┬─────────────┬──────────┬───────┐
    // │ (index) │      0      │    1     │   2   │
    // ├─────────┼─────────────┼──────────┼───────┤
    // │    0    │     []      │          │       │
    // │    2    │    [ 2 ]    │          │       │
    // │    3    │    [ 3 ]    │          │       │
    // │    4    │  [ 2, 2 ]   │          │       │
    // │    5    │  [ 2, 3 ]   │          │       │
    // │    6    │ [ 2, 2, 2 ] │ [ 3, 3 ] │ [ 6 ] │
    // │    7    │ [ 2, 2, 3 ] │  [ 7 ]   │       │
    // └─────────┴─────────────┴──────────┴───────┘
    return target in dp ? dp[target] : []
}