/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const res = [], map = {}
    backtrack(0, [], Array(nums.length).fill(false))
    return res
    
    function backtrack(idx, list, used) {
        if (list.length >= 2) {
            if (!(list in map)) {
                map[list] = true
                res.push(list.slice())
            }
        }
        for (let i=idx; i < nums.length; i++) {
            if (!used[i] && (!list.length || list.at(-1) <= nums[i])) {
                used[i] = true
                list.push(nums[i])
                backtrack(i+1, list, used)
                list.pop()
                used[i] = false
            }
        }
    }
};