/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    return kSum(0, 4, target)    
    
    function kSum(idx, k, target) {
        if (k === 2) return twoSum(idx, target)
        const res = []
        for (let i=idx; i < nums.length; i++) {
            if (i > idx && nums[i] === nums[i-1]) continue
            for (let kMinusOneList of kSum(i+1, k-1, target-nums[i])) {
                res.push([nums[i], ...kMinusOneList])
            }
        }
        return res
    }
    
    function twoSum(idx, target) {
        const res = []
        let l = idx
        let r = nums.length-1
        while (l < r) {
            const sum = nums[l] + nums[r]
            if (sum > target || (r < nums.length-1 && nums[r] === nums[r+1])) {
                r--
            } else if (sum < target || (l > idx && nums[l] === nums[l-1])) {
                l++
            } else {
                res.push([nums[l], nums[r]])
                l++
                r--
            }
        }
        return res
    }
};