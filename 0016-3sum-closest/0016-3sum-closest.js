/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let res = Infinity
    for (let i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue
        let l = i + 1
        let r = nums.length-1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (Math.abs(target - sum) < Math.abs(res)) {
                res = target - sum
            }
            if (sum > target) {
                r--
            } else {
                l++
            }
        }
    }
    return target - res
};

threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let diff = Infinity
    let sum
    for (let i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue
        let l = i + 1
        let r = nums.length-1
        while (l < r) {
            const curSum = nums[i] + nums[l] + nums[r]
            const curDiff = Math.abs(target - curSum)
            if (curDiff === 0) {
                return curSum
            } else if (curDiff < diff) {
                sum = curSum
                diff = curDiff
            } else if (curSum > target) {
                r--
            } else {
                l++
            }
        }
    }
    return sum
}