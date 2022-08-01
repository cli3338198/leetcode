/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    const res = []
    helper(0, target, [])
    return res
    
    function helper(idx, target, list) {
        if (!target) {
            return res.push(list.slice())
        }
        for (let i=idx; i < candidates.length; i++) {
            if (i > idx && candidates[i] === candidates[i-1]) continue
            const c = candidates[i]
            if (c <= target) {
                list.push(c)
                helper(i+1, target-c, list)
                list.pop()
            }
        }
    }
};