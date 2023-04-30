class Solution {
    fun runningSum(nums: IntArray): IntArray {
        var res = IntArray(nums.size) { 0 }
        var sum = 0
        for (i in 0..(nums.size-1)) {
            sum += nums[i]
            res[i] = sum
        }
        return res
    }
}