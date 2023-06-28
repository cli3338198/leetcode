/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for (let i=0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [i, map[target - nums[i]]]
        }
        map[nums[i]] = i
    }
};

twoSum = function(nums, target) {
    nums = nums.map((n, i) => ([n, i])).sort(([a], [b]) => a - b)
    let l = 0, r = nums.length-1
    while (l < r) {
        const sum = nums[l][0] + nums[r][0]
        if (sum === target) {
            return [nums[l][1], nums[r][1]]
        } else if (sum > target) {
            r--
        } else {
            l++
        }
    }
}