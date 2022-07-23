/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    
    return kSum(3, nums, 0)
    
    function kSum(k, nums, target) {
        if (k === 2) return twoSum(nums, target)
        const res = []
        for (let i=0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue
            for (let kList of kSum(k-1, nums.slice(i+1), target - nums[i])) {
                res.push([nums[i], ...kList])
            }
        }
        return res
    }
    
    function twoSum(nums, target) {
        const res = []
        let l = 0
        let r = nums.length-1
        while (l < r) {
            const sum = nums[l] + nums[r]
            if (sum < target || (l > 0 && nums[l] === nums[l-1])) {
                l++
            } else if (sum > target | (r < nums.length-1 && nums[r] === nums[r+1])) {
                r--
            } else {
                res.push([nums[l], nums[r]])
                l++
                r--
            }
        }
        return res
    }
};