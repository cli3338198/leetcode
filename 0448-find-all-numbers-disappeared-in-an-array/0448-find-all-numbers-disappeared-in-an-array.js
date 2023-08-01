/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i=0; i < nums.length; i++) {
        const abs = Math.abs(nums[i])
        if (nums[abs-1] > 0) {
            nums[abs-1] *= -1
        }
    }
    const res = []
    for (let i=0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i+1)
        }
    }
    return res
};