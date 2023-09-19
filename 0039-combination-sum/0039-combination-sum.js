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