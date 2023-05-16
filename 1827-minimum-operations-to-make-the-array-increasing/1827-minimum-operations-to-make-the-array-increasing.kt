class Solution {
    fun minOperations(nums: IntArray): Int {
        var res = 0
        for (i in 0..(nums.size-2)) {
            if (nums[i] < nums[i+1]) continue
            val diff = Math.abs(nums[i]-nums[i+1]) + 1
            nums[i+1] += diff
            res += diff
        }
        return res
    }
}