/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let i = 0, res = 0, cnt = 0
    for (let j=0; j < nums.length; j++) {
        if (nums[j] % 2 !== 0) {
            k--
            cnt = 0
        }
        while (k === 0) {
            if (nums[i] % 2 !== 0) k++
            i++
            cnt++
        }
        res += cnt
    }
    return res
};