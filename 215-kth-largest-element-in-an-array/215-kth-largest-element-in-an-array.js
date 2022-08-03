/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k = nums.length-k
    return quickSelect(0, nums.length-1)
    
    function quickSelect(l, r) {
        const pivot = nums[r]
        let p = l
        for (let i=l; i < r; i++) {
            if (nums[i] <= pivot) {
                [nums[i], nums[p]] = [nums[p], nums[i]]
                p++
            } 
        }
        [nums[p], nums[r]] = [nums[r], nums[p]]
        if (p > k) return quickSelect(l, p-1)
        if (p < k) return quickSelect(p+1, r)
        return nums[p]
    }
};