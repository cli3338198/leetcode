/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b)
    let l = 0, r = nums.length-1, res = 0
    while (nums[l] + nums[r] > target) r--
    for (let i=l; i <= r; i++) {
        for (let j=i+1; j <= r; j++) {
            if (nums[i] + nums[j] < target) res++
        }
    }
    return res
};