/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    const n = nums.length
    nums.sort((a, b) => a - b)
    let res = 0
    for (let k=2; k < n; k++) {
        let i = 0
        let j = k-1
        while (i < j) {
            const sum = nums[i] + nums[j]
            if (sum > nums[k]) {
                res += j - i
                j--
            } else {
                i++
            }
        }
    }
    return res
};