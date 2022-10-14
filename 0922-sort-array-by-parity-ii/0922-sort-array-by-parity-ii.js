/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const n = nums.length
    let evenIdx = 1
    let oddIdx = 0
    while (evenIdx < n && oddIdx < n) {
        while (evenIdx < n && nums[evenIdx] % 2 !== 0) {
            evenIdx += 2
        }
        while (oddIdx < n && nums[oddIdx] % 2 === 0) {
            oddIdx += 2
        }
        if (oddIdx < n && evenIdx < n) {
            [nums[oddIdx], nums[evenIdx]] = [nums[evenIdx], nums[oddIdx]]
        }
    }
    return nums
};