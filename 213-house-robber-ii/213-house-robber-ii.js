/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    if (!n || n === 1) return nums[0]
    return Math.max(helper(0, n-2), helper(1, n-1))
    
    function helper(start, end) {
        let rob1 = 0
        let rob2 = 0
        for (let i=start; i <= end; i++) {
            const temp = Math.max(rob1 + nums[i], rob2)
            rob1 = rob2
            rob2 = temp
        }
        return rob2
    }
};