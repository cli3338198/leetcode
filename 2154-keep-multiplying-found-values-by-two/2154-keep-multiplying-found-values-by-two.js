/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums = new Set(nums)
    while (nums.has(original)) {
        original *= 2
    }
    return original
};

findFinalValue = function(nums, original) {
    nums.sort((a, b) => a - b)
    if (binSearch(original)) return findFinalValue(nums, original*2)
    return original
    
    function binSearch(original) {
        let l=0, r=nums.length-1
        while (l <= r) {
            const m = Math.floor((l+r)/2)
            if (nums[m] === original) {
                return true
            } else if (nums[m] > original) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return false
    }
}