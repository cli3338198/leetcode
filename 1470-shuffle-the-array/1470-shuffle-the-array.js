/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const res = []
    for (let i=0; i < n; i++) {
        for (let j=i; j < nums.length; j += n) {
            res.push(nums[j])
        }
    }
    return res
};