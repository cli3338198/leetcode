/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    return kSum(0, 4, target)    
    
    function kSum(start, k, target) {
        if (k === 2) return twoSum(start, target)
        const kList = []
        for (let i=start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i-1]) continue
            for (let kMinusOneList of kSum(i+1, k-1, target-nums[i])) {
                kList.push([nums[i], ...kMinusOneList])
            }
        }
        return kList
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