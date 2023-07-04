/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    nums = nums.map((n, i) => ([n, i])).sort(([a], [b]) => a - b)
    const res = []
    for (let i=0; i < nums.length; i++) {
        const [n, idx] = nums[i]
        let j = i
        while (j > 0 && nums[j-1][0] === nums[j][0]) j--
        res[idx] = j
    }
    return res
};