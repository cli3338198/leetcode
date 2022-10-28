/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length
    const left = Array(n).fill(1)
    let cur = 1
    for (let i=0; i < n; i++) {
        left[i] = cur
        cur *= nums[i]
    }
    cur = 1
    const right = Array(n).fill(1)
    for (let i=n-1; i >= 0; i--) {
        right[i] = cur
        cur *= nums[i]
    }
    const res = []
    for (let i=0; i < n; i++) {
        res.push(left[i]*right[i])
    }
    return res
};