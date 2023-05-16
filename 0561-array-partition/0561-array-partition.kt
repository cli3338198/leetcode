class Solution {
    fun arrayPairSum(nums: IntArray): Int {
        nums.sort()
        var res = 0
        for (i in 0..(nums.size-2) step 2) {
            res += Math.min(nums[i], nums[i+1])
        }
        return res
    }
}