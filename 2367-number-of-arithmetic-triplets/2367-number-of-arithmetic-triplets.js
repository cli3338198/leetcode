/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    const map = {}
    let res = 0
    for (let i=0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for (let i=0; i < nums.length; i++) {
        if (nums[i]-diff in map && map[nums[i]-diff] < i && nums[i]+diff in map && map[nums[i]+diff] > i) {
            res++
        }
    }
    return res
};