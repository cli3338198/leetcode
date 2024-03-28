/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    for (let j=0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++
        }
    }
    return i
    
    //
    
    let l = 0, r = nums.length - 1
    while (l < r) {
        if (nums[l] === val) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
        }
        if (nums[l] !== val) {
            l++
        }
        r--
    }
    return l
};