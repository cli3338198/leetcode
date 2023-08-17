class Solution {
    fun arithmeticTriplets(nums: IntArray, diff: Int): Int {
        val indices = IntArray(201) {-1}
        var res = 0
        for (k in 0..nums.size-1) {
            val numsj = nums[k] - diff
            val numsi = numsj - diff
            if (numsj >= 0 &&
                numsi >= 0 &&
                indices[numsj] !== -1 && 
                indices[numsi] !== -1 && 
                indices[numsi] < indices[numsj] && 
                indices[numsj] < k) {
                res++
            }
            indices[nums[k]] = k
        }
        return res
    }
}