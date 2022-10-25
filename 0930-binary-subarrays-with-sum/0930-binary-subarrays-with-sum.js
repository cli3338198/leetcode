/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const map = {'0': 1}
    let curSum = 0
    let res = 0
    for (const num of nums) {
        curSum += num
        res += map[curSum - goal] || 0
        map[curSum] = map[curSum] + 1 || 1
    }
    return res
};