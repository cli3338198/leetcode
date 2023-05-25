class Solution {
    fun binSearch(nums: IntArray, original: Int): Boolean {
        var l = 0
        var r = nums.size-1
        while (l <= r) {
            val m = (l + r) / 2
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
    fun findFinalValue(nums: IntArray, original: Int): Int {
        nums.sort()
        if (this.binSearch(nums, original)) {
            return this.findFinalValue(nums, original * 2)
        }
        return original
    }
}