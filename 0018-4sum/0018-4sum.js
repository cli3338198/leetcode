/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    return kSum(0, 4, target)    
    
    function kSum(j, k, target) {
        if (k === 2) return twoSum(j, target)
        const res = []
        for (let i=j; i < nums.length; i++) {
            if (i > j && nums[i] === nums[i-1]) continue
            for (const kMinusOneList of kSum(i+1, k-1, target-nums[i])) {
                res.push([nums[i], ...kMinusOneList])
            }
        }
        return res
    }
    
    function twoSum(j, target) {
        const res = []
        let l = j
        let r = nums.length-1
        while (l < r) {
            const sum = nums[l] + nums[r]
            if ((sum > target) || (r < nums.length-1 && nums[r] === nums[r+1])) {
                r--
            } else if ((sum < target) || (l > j && nums[l] === nums[l-1])) {
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