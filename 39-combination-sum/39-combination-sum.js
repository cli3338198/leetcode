/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    helper(0, target, [])
    return res
    
    function helper(idx, target, list) {
        if (!target) {
            return res.push(list.slice())
        }
        for (let i=idx; i < candidates.length; i++) {
            const c = candidates[i]
            if (c <= target) {
                list.push(c)
                helper(i, target-c, list)
                list.pop()                                
            }
        }
    }
};