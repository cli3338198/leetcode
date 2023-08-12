/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let required = (new Set(nums)).size
    let res = 0
    let l = 0
    const map = {}
    for (let r=0; r < nums.length; r++) {
        map[nums[r]] = map[nums[r]] + 1 || 1
        if (map[nums[r]] === 1) required--
        while (required === 0) {
            map[nums[l]]--
            if (map[nums[l]] === 0) required++
            l++
        }
        res += l
    }
    return res
};