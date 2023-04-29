class Solution {
    fun getConcatenation(nums: IntArray): IntArray {
        val res = IntArray(nums.size * 2)
        for (i in 0..(nums.size-1)) {
            res[i] = nums[i]
            res[i+nums.size] = nums[i]
        }
        return res
    }
}