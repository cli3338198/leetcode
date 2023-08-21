class Solution {
    fun pivotIndex(nums: IntArray): Int {
        var lsum = 0
        var rsum = nums.sum()
        for (i in 0..nums.size-1) {
            if (lsum === rsum - nums[i]) {
                return i
            }
            lsum += nums[i]
            rsum -= nums[i]
        }
        return -1
    }
}