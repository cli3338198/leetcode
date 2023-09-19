class Solution {
    fun rob(nums: IntArray): Int {
        if (nums.size === 1) return nums[0]
        return Math.max(robber(nums.slice(0..nums.size-2)), robber(nums.slice(1..nums.size-1)))
    }
    
    fun robber(nums: List<Int>): Int {
        var rob1 = 0
        var rob2 = 0
        for (i in 0..nums.size-1) {
            val temp = rob2
            rob2 = Math.max(rob2, rob1 + nums[i])
            rob1 = temp
        }
        return Math.max(rob1, rob2)
    }
}