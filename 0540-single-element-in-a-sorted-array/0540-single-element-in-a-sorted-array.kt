class Solution {
    fun singleNonDuplicate(nums: IntArray): Int {
        var l = 0
        var r = nums.size-1
        while (l < r) {
            var m = (l+r)/2
            if (m % 2 !== 0) m--
            if (nums[m] !== nums[m+1]) {
                r = m
            } else {
                l = m + 2
            }
        }
        return nums[l]
    }
}