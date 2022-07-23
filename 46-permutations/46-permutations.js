/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return helper(nums)
    
    function helper(nums) {
        if (!nums.length || nums.length === 1) return [nums]
        const res = []
        for (let i=0; i < nums.length; i++) {
            const num = nums[i]
            const rest = helper(nums.slice(0, i).concat(nums.slice(i+1)))
            for (let r of rest) {
                res.push([num, ...r])
            }
        }
        return res
    }
};