/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const memo = {}
    nums.sort((a, b) => a - b)
    return helper(nums)
    
    function helper(nums) {
        if (nums.length < 2) {
            return memo[nums] = [nums]
        }
        if (nums in memo) {
            return memo[nums]
        }
        const res = []
        for (let i=0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue
            const num = nums[i]
            const rest = helper(nums.slice(0, i).concat(nums.slice(i+1)))
            for (const r of rest) {
                res.push([num, ...r])
            }
        }
        return memo[nums] = res
    }
};