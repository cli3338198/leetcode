/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = []
    let cur = 1
    for (let i=0; i < nums.length; i++) {
        left[i] = cur
        cur *= nums[i]
    }
    cur = 1    
    const res = []
    for (let i=nums.length-1; i >= 0; i--) {
        res[i] = left[i] * cur
        cur *= nums[i]
    }
    return res
    
    
};