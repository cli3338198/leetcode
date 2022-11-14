/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0
    let fast = 0
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) break
    }
    fast = 0
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return fast
};