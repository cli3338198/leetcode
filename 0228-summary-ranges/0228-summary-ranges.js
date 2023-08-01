/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = []
    for (let i=0; i < nums.length; i += 0) {
        let j = i
        while (j < nums.length && nums[j+1] === nums[j]+1) j++
        if (j === i) {
            res.push(`${nums[i]}`)
            i++
        } else {
            res.push(`${nums[i]}->${nums[j]}`)
            i = j+1
        }
    }
    return res
};