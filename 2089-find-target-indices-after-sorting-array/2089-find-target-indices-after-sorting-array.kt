class Solution {
    fun targetIndices(nums: IntArray, target: Int): List<Int> {
        nums.sort()
        val res = mutableListOf<Int>()
        for (i in 0..(nums.size-1)) {
            if (nums[i] === target) {
                res.add(i)
            } else if (nums[i] > target) {
                break
            }
        }
        return res
    }
}