/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    helper(0, [])
    return res
    
    function helper(idx, cur) {
        res.push(cur)
        for (let i=idx; i < nums.length; i++) {
            if (i > idx && nums[i-1] === nums[i]) continue
            helper(i+1, [...cur, nums[i]])
        }
    }
};