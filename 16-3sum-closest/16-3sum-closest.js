/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let diff = Infinity
    for (let i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue
        let j = i + 1
        let k = nums.length-1
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum
            }
            if (sum > target) {
                k--
            } else {
                j++
            }
        }
    }
    return target - diff
};