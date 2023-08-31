/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) return [nums]
    const res = []
    for (let i=0; i < nums.length; i++) {
        for (const sub of permute(nums.slice(0, i).concat(nums.slice(i+1)))) {
            res.push([nums[i], ...sub])
        }
    }
    return res
};