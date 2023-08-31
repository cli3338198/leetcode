class Solution {
    fun rob(nums: IntArray): Int {
        var rob1 = 0
        var rob2 = 0
        for (n in nums) {
            val cur = Math.max(rob2, rob1 + n)
            rob1 = rob2
            rob2 = cur
        }
        return Math.max(rob1, rob2)
    }
}