/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    return kSum(4, 0, target)
    
    function kSum(k, i, target) {
        if (k === 2) return twoSum(i, target)
        const res = []
        for (let j=i; j < nums.length; j++) {
            if (j > i && nums[j] === nums[j-1]) continue
            for (const kMinusOneList of kSum(k-1, j+1, target-nums[j])) {
                res.push([nums[j], ...kMinusOneList])
            }
        }
        return res
    }
    
    function twoSum(i, target) {
        let l = i
        let r = nums.length-1
        const res = []
        while (l < r) {
            const sum = nums[l] + nums[r]
            if (sum > target) {
                r--
            } else if (sum < target) {
                l++
            } else {
                res.push([nums[l], nums[r]])
                l++
                r--
                while (l > i && nums[l] === nums[l-1]) l++
                while (r < nums.length-1 && nums[r] === nums[r+1]) r--
            }
        }
        return res
    }
};