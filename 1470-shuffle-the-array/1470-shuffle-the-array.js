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

shuffle = function(nums, n) {
    const res = []
    for (let i=0; i < n; i++) {
        res.push(nums[i])
        res.push(nums[i+n])
    }
    return res
}