/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let lo = Math.max(...nums)
    let hi = nums.reduce((acc, val) => acc + val, 0)
    let res = hi
    while (lo <= hi) {
        const mid = Math.floor((lo+hi)/2)
        if (helper(mid)) {
            hi = mid - 1
            res = mid
        } else {
            lo = mid + 1
        }
    }
    return res
    
    function helper(target) {
        let subArrays = 1
        let curSum = 0
        for (const num of nums) {
            curSum += num
            if (curSum > target) {
                curSum = num
                subArrays++
            }
        }
        return subArrays <= k
    }
};