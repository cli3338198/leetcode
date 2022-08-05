/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b)
    return helper(nums)
    
    function helper(nums) {
        if (nums.length === 1) return [nums]
        const res = []
        for (let i=0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue
            const num = nums[i]
            for (let rest of helper(nums.slice(0, i).concat(nums.slice(i+1)))) {
                res.push([num, ...rest])
            }
        }
        return res
    }
};