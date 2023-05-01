class Solution {
    fun shuffle(nums: IntArray, n: Int): IntArray {
        val res = IntArray(nums.size)
        for (i in 0..(n-1)) {
            res[i*2] = nums[i]
            res[i*2 + 1] = nums[i+n]
        }
        return res
    }
}