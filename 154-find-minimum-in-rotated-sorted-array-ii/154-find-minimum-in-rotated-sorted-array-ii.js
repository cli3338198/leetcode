/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return search(0, nums.length-1)
    
    function search(l, r) {
        if (l === r) return nums[l]
        const m = Math.floor((l+r)/2)
        if (nums[m] > nums[r]) return search(m+1, r)
        if (nums[m] < nums[r]) return search(l, m)
        if (nums[m] === nums[r]) return search(l, r-1)
    }
};