/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.reduce((acc, val, idx) => {
        if (idx > 0) {
            acc[idx] = val + acc[idx-1]
        } else {
            acc[idx] = val
        }
        return acc
    }, [])
};