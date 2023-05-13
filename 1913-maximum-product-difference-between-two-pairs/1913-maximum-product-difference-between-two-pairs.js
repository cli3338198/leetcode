/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => b - a)
    const a = nums.at(0), b = nums.at(1), c = nums.at(-1), d = nums.at(-2)
    return (a * b) - (c * d)
};

maxProductDifference = function(nums) {
    const max = [Math.max(nums[0], nums[1]), Math.min(nums[0], nums[1])]
    const min = [Math.min(nums[0], nums[1]), Math.max(nums[0], nums[1])]
    for (let i=2; i < nums.length; i++) {
        const cur = nums[i]
        if (cur > max[0] && cur > max[1]) {
            max[1] = max[0]
            max[0] = cur
        } else if (cur > max[1] && cur <= max[0]) {
            max[1] = cur
        }
        if (cur < min[0] && cur < min[1]) {
            min[1] = min[0]
            min[0] = cur
        } else if (cur < min[1] && cur >= min[0]) {
            min[1] = cur
        }
    }
    return (max[0] * max[1]) - (min[0] * min[1])
}