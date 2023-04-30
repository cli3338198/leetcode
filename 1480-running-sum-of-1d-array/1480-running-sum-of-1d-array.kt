class Solution {
    fun runningSum(nums: IntArray): IntArray {
        val res = IntArray(nums.size) { nums[0] }
        for (i in 1..(nums.size-1)) {
            res[i] = nums[i] + res[i-1]
        }
        return res
    }
}