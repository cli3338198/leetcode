/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b)
    const res1 = []
    for (let i=0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] <= k) {
            res1.push([nums[i], nums[i + 1], nums[i + 2]])
        } else {
            return []
        }
    }
    return res1
    
    //
    
    nums.sort((a, b) => a - b)
    const res = []
    for (const n of nums) {
        if (!res.length || res.at(-1).length === 3) {
            res.push([n])
        } else {
            if (res.at(-1).some(x => Math.abs(n - x) > k)) {
                return []
            } else {
                res.at(-1).push(n)
            }
        }
    }
    return res
};