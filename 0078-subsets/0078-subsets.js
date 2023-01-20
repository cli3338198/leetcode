/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = []
    helper(0, [])
    return res
    
    function helper(idx, list) {
        res.push(list)
        for (let i=idx; i < nums.length; i++) {
            helper(i+1, [...list, nums[i]])
        }
    }
};