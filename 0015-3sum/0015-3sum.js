/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    return kSum(3, 0, 0)
    
    function kSum(k, target, i) {
        if (k === 2) return twoSum(i, nums.length-1, target)
        const res = []
        for (i; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue
            for (const kList of kSum(k-1, target-nums[i], i+1)) {
                res.push([nums[i], ...kList])
            }
        }
        return res
    }
    
    function twoSum(j, k, target) {
        const left = j
        const right = k
        const res = []
        while (j < k) {
            const sum = nums[j] + nums[k]
            if ((sum > target) || (k < right && nums[k] === nums[k+1])) {
                k--
            } else if ((sum < target) || (j > left && nums[j] === nums[j-1])) {
                j++
            } else {
                res.push([nums[j], nums[k]])
                j++
                k--
            }
        }
        return res
    }
};