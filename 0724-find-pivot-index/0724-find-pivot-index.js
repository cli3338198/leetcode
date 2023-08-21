/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rsum = nums.reduce((acc, val) => acc + val, 0)
    let lsum = 0
    for (let i=0; i < nums.length; i++) {
        if (lsum === rsum - nums[i]) return i
        lsum += nums[i]
        rsum -= nums[i]
    }
    return -1
};