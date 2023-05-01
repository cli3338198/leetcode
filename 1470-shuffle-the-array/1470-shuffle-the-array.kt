class Solution {
    fun shuffle(nums: IntArray, n: Int): IntArray {
        val res = IntArray(nums.size) { 0 }
        var j = 0
        for (i in 0..(n-1)) {
            res[j] = nums[i]
            j++
            res[j] = nums[i+n]
            j++
        }
        return res
    }
}